import express from "express";

import {registerUser, loginUser, getMe, adminTest} from "../controllers/authController.js";
import protect from "../controllers/authController.js";
import { admin } from "../middleware/adminMiddleware";


const router = express.Router();

//public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

//protected route
router.get("/me", protect, getMe);

//Admin-only route
router.get("/admin-test", protect, admin, adminTest);

export default router;