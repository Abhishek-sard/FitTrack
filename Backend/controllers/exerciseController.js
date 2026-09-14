const Exercise = require("../models/Exercise");

// ========================================
// CREATE EXERCISE
// POST /api/exercises
// ADMIN ONLY
// ========================================
const createExercise = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      muscleGroup,
      equipment,
      difficulty,
      instructions,
      sets,
      reps,
      duration,
      calories,
      image,
      video,
    } = req.body;

    // Validate required fields
    if (!name || !description || !category || !muscleGroup) {
      return res.status(400).json({
        success: false,
        message:
          "Name, description, category and muscle group are required.",
      });
    }

    const exercise = await Exercise.create({
      name,
      description,
      category,
      muscleGroup,
      equipment,
      difficulty,
      instructions,
      sets,
      reps,
      duration,
      calories,
      image,
      video,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Exercise created successfully.",
      exercise,
    });
  } catch (error) {
    console.error("Create Exercise Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while creating exercise.",
    });
  }
};

// ========================================
// GET ALL EXERCISES
// GET /api/exercises
// LOGIN REQUIRED
// ========================================
const getExercises = async (req, res) => {
  try {
    const {
      search,
      category,
      muscleGroup,
      difficulty,
      page = 1,
      limit = 10,
    } = req.query;

    // Build filter
    const filter = {};

    // Search by exercise name
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    // Category filter
    if (category) {
      filter.category = category;
    }

    // Muscle group filter
    if (muscleGroup) {
      filter.muscleGroup = muscleGroup;
    }

    // Difficulty filter
    if (difficulty) {
      filter.difficulty = difficulty;
    }

    // Pagination
    const pageNumber = Math.max(Number(page), 1);
    const limitNumber = Math.min(Math.max(Number(limit), 1), 50);

    const skip = (pageNumber - 1) * limitNumber;

    const exercises = await Exercise.find(filter)
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNumber);

    const totalExercises = await Exercise.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: exercises.length,
      total: totalExercises,
      page: pageNumber,
      pages: Math.ceil(totalExercises / limitNumber),
      exercises,
    });
  } catch (error) {
    console.error("Get Exercises Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while getting exercises.",
    });
  }
};

// ========================================
// GET SINGLE EXERCISE
// GET /api/exercises/:id
// LOGIN REQUIRED
// ========================================
const getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!exercise) {
      return res.status(404).json({
        success: false,
        message: "Exercise not found.",
      });
    }

    res.status(200).json({
      success: true,
      exercise,
    });
  } catch (error) {
    console.error("Get Exercise Error:", error);

    // Invalid MongoDB ID
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid exercise ID.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while getting exercise.",
    });
  }
};

// ========================================
// UPDATE EXERCISE
// PUT /api/exercises/:id
// ADMIN ONLY
// ========================================
const updateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);

    if (!exercise) {
      return res.status(404).json({
        success: false,
        message: "Exercise not found.",
      });
    }

    const allowedFields = [
      "name",
      "description",
      "category",
      "muscleGroup",
      "equipment",
      "difficulty",
      "instructions",
      "sets",
      "reps",
      "duration",
      "calories",
      "image",
      "video",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        exercise[field] = req.body[field];
      }
    });

    const updatedExercise = await exercise.save();

    res.status(200).json({
      success: true,
      message: "Exercise updated successfully.",
      exercise: updatedExercise,
    });
  } catch (error) {
    console.error("Update Exercise Error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid exercise ID.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while updating exercise.",
    });
  }
};

// ========================================
// DELETE EXERCISE
// DELETE /api/exercises/:id
// ADMIN ONLY
// ========================================
const deleteExercise = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);

    if (!exercise) {
      return res.status(404).json({
        success: false,
        message: "Exercise not found.",
      });
    }

    await exercise.deleteOne();

    res.status(200).json({
      success: true,
      message: "Exercise deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Exercise Error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid exercise ID.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error while deleting exercise.",
    });
  }
};

module.exports = {
  createExercise,
  getExercises,
  getExerciseById,
  updateExercise,
  deleteExercise,
};