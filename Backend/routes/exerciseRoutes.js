import express from "express";

import {
    createExercise,
    getExercises,
    getExerciseById,
    updateExercise,
    deleteExercise,
} from "../controllers/exerciseController.js";
import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

//get all exercises
router.get("/", protect, getExercises);

//get single exercise by id
router.get("/:id", protect, getExerciseById);

//create new exercise
router.post("/", protect, admin, createExercise);

//update exercise
router.put("/:id", protect, admin, updateExercise);

//Delete exercise
router.delete("/:id", protect, admin, deleteExercise);

export default router;