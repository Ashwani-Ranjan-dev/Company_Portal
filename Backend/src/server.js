
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authroute.js";
import userroutes from "./routes/userroute.js";

dotenv.config();

const app = express();

// Database
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const allowedOrigins = [
    "http://localhost:5173",
    ...(process.env.FRONTEND_URL || "")
        .split(",")
        .map((url) => url.trim())
        .filter(Boolean),
];

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
        credentials: true,
    })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userroutes);

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Nexora Technologies API is running",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
