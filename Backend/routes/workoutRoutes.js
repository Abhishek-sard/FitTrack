import express from "express";
import {  createWorkout,
  getMyWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
  startWorkout,
  completeWorkout,
  toggleFavorite} from "../controllers/workoutController.js"
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

// All workout routes require login
router.use(protect);

// Create workout
router.post("/", createWorkout);

// Get my workouts
router.get("/", getMyWorkouts);

// Get single workout
router.get("/:id", getWorkoutById);

// Update workout
router.put("/:id", updateWorkout);

// Delete workout
router.delete("/:id", deleteWorkout);

// Start workout
router.patch("/:id/start", startWorkout);

// Complete workout
router.patch("/:id/complete", completeWorkout);

// Favorite/unfavorite workout
router.patch("/:id/favorite", toggleFavorite);

export default router;