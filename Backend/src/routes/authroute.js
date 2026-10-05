import express from "express";

import {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser,
} from "../controllers/authcontroller.js";

import protect from "../middlewares/authmiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", protect, getCurrentUser);

router.post("/logout", logoutUser);

export default router;