import mongoose from "mongoose";
import workout from "../models/Workout.js";
import Exercise from "../models/Exercise.js";

// ========================================
// CREATE WORKOUT
// POST /api/workouts
// LOGIN REQUIRED
// ========================================

const createWorkout = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      difficulty,
      exercises,
      duration,
      calories,
    } = req.body;

    // Validate name
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Workout name is required.",
      });
    }

    // Validate exercises
    if (!Array.isArray(exercises) || exercises.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Workout must contain at least one exercise.",
      });
    }

    // Validate exercise IDs
    const exerciseIds = exercises.map((item) => item.exercise);

    const invalidId = exerciseIds.find(
      (id) => !mongoose.Types.ObjectId.isValid(id),
    );

    if (invalidId) {
      return res.status(400).json({
        success: false,
        message: `Invalid exercise ID: ${invalidId}`,
      });
    }

    // Check exercises exist
    const existingExercises = await Exercise.find({
      _id: { $in: exerciseIds },
    }).select("_id");

    if (existingExercises.length !== exerciseIds.length) {
      return res.status(404).json({
        success: false,
        message: "One or more exercises were not found.",
      });
    }

    // Create workout
    const workout = await Workout.create({
      user: req.user._id,
      name,
      description,
      category,
      difficulty,
      exercises,
      duration,
      calories,
    });

    // Populate exercise information
    await workout.populate({
      path: "exercises.exercise",
      select: "name category muscleGroup equipment difficulty image",
    });

    res.status(201).json({
      success: true,
      message: "Workout created successfully.",
      workout,
    });
  } catch (error) {
    console.error("Create Workout Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while creating workout.",
    });
  }
};

// ========================================
// GET MY WORKOUTS
// GET /api/workouts
// LOGIN REQUIRED
// ========================================

const getMyWorkouts = async (req, res) => {
  try {
    const { status, category, difficulty, search } = req.query;

    const filter = {
      user: req.user._id,
    };

    // Status filter
    if (status) {
      filter.status = status;
    }

    // Category filter
    if (category) {
      filter.category = category;
    }

    // Difficulty filter
    if (difficulty) {
      filter.difficulty = difficulty;
    }

    // Search workout name
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    const workouts = await Workout.find(filter)
      .populate({
        path: "exercises.exercise",
        select: "name category muscleGroup equipment difficulty image",
      })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: workouts.length,
      workouts,
    });
  } catch (error) {
    console.error("Get My Workouts Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while getting workouts.",
    });
  }
};

// ========================================
// GET SINGLE WORKOUT
// GET /api/workouts/:id
// LOGIN REQUIRED
// ========================================

const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate({
      path: "exercises.exercise",
      select:
        "name description category muscleGroup equipment difficulty instructions image video",
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found.",
      });
    }

    res.status(200).json({
      success: true,
      workout,
    });
  } catch (error) {
    console.error("Get Workout Error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid workout ID.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while getting workout.",
    });
  }
};

// ========================================
// UPDATE WORKOUT
// PUT /api/workouts/:id
// LOGIN REQUIRED
// ========================================

const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found.",
      });
    }

    const allowedFields = [
      "name",
      "description",
      "category",
      "difficulty",
      "duration",
      "calories",
      "isFavorite",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        workout[field] = req.body[field];
      }
    });

    // If exercises are being updated
    if (req.body.exercises !== undefined) {
      if (
        !Array.isArray(req.body.exercises) ||
        req.body.exercises.length === 0
      ) {
        return res.status(400).json({
          success: false,
          message: "Workout must contain at least one exercise.",
        });
      }

      const exerciseIds = req.body.exercises.map((item) => item.exercise);

      const invalidId = exerciseIds.find(
        (id) => !mongoose.Types.ObjectId.isValid(id),
      );

      if (invalidId) {
        return res.status(400).json({
          success: false,
          message: `Invalid exercise ID: ${invalidId}`,
        });
      }

      const existingExercises = await Exercise.find({
        _id: { $in: exerciseIds },
      }).select("_id");

      if (existingExercises.length !== exerciseIds.length) {
        return res.status(404).json({
          success: false,
          message: "One or more exercises were not found.",
        });
      }

      workout.exercises = req.body.exercises;
    }

    const updatedWorkout = await workout.save();

    await updatedWorkout.populate({
      path: "exercises.exercise",
      select: "name category muscleGroup equipment difficulty image",
    });

    res.status(200).json({
      success: true,
      message: "Workout updated successfully.",
      workout: updatedWorkout,
    });
  } catch (error) {
    console.error("Update Workout Error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid workout ID.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while updating workout.",
    });
  }
};

// ========================================
// DELETE WORKOUT
// DELETE /api/workouts/:id
// LOGIN REQUIRED
// ========================================

const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found.",
      });
    }

    await workout.deleteOne();

    res.status(200).json({
      success: true,
      message: "Workout deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Workout Error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid workout ID.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while deleting workout.",
    });
  }
};

// ========================================
// START WORKOUT
// PATCH /api/workouts/:id/start
// LOGIN REQUIRED
// ========================================

const startWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found.",
      });
    }

    workout.status = "in-progress";

    const updatedWorkout = await workout.save();

    res.status(200).json({
      success: true,
      message: "Workout started.",
      workout: updatedWorkout,
    });
  } catch (error) {
    console.error("Start Workout Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while starting workout.",
    });
  }
};

// ========================================
// COMPLETE WORKOUT
// PATCH /api/workouts/:id/complete
// LOGIN REQUIRED
// ========================================

const completeWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found.",
      });
    }

    workout.status = "completed";
    workout.completedAt = new Date();

    const updatedWorkout = await workout.save();

    res.status(200).json({
      success: true,
      message: "Workout completed! 💪",
      workout: updatedWorkout,
    });
  } catch (error) {
    console.error("Complete Workout Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while completing workout.",
    });
  }
};

// ========================================
// TOGGLE FAVORITE
// PATCH /api/workouts/:id/favorite
// LOGIN REQUIRED
// ========================================

const toggleFavorite = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!workout) {
      return res.status(404).json({
        success: false,
        message: "Workout not found.",
      });
    }

    workout.isFavorite = !workout.isFavorite;

    await workout.save();

    res.status(200).json({
      success: true,
      message: workout.isFavorite
        ? "Workout added to favorites."
        : "Workout removed from favorites.",
      isFavorite: workout.isFavorite,
    });
  } catch (error) {
    console.error("Favorite Workout Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};


export default {
  createWorkout,
  getMyWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
  startWorkout,
  completeWorkout,
  toggleFavorite,
};
