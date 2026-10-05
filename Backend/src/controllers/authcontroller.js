import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            phone,
            role,
            department,
            designation,
        } = req.body;

        // 1. Check required fields
        if (
            !name ||
            !email ||
            !password ||
            !phone ||
            !role ||
            !department ||
            !designation
        ) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        // 2. Check if user already exists
        const existingUser = await User.findOne({
            email: email.toLowerCase(),
        });

        if (existingUser) {
            return res.status(409).json({
                message: "User with this email already exists",
            });
        }

        // 3. Validate role
        if (!["ADMIN", "EMPLOYEE"].includes(role)) {
            return res.status(400).json({
                message: "Invalid role",
            });
        }

        // 4. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 5. Create user
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: hashedPassword,
            phone,
            role,
            department,
            designation,
        });

        // 6. Send response
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                department: user.department,
                designation: user.designation,
            },
        });
    } catch (error) {
        console.error("Registration error:", error);

        return res.status(500).json({
            message: "Server error during registration",
        });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Validate fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required",
            });
        }

        // 2. Find user
        const user = await User.findOne({
            email: email.toLowerCase(),
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        // 3. Compare password
        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid email or password",
            });
        }

        // 4. Generate JWT
        const token = generateToken(user._id);

        // 5. Store JWT in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite:
                process.env.NODE_ENV === "production"
                    ? "none"
                    : "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        // 6. Send user information
        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
                department: user.department,
                designation: user.designation,
            },
        });
    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            message: "Server error during login",
        });
    }
};

export const getCurrentUser = async (req, res) => {
    return res.status(200).json({
        user: req.user,
    });
};

export const logoutUser = async (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    });

    return res.status(200).json({
        message: "Logout successful",
    });
};