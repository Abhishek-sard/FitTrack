import express from "express";

import { registerUser, loginUser, getMe, adminTest } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";

const router = express.Router();

// public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// protected route
router.get("/me", protect, getMe);

// admin-only route
router.get("/admin-test", protect, admin, adminTest);

export default router;