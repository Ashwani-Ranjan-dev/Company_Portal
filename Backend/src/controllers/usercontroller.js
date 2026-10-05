import User from "../models/User.js";

// ==========================================
// GET ALL EMPLOYEES
// ADMIN ONLY
// ==========================================

export const getEmployees = async (req, res) => {
  try {
    const employees = await User.find({
      role: "EMPLOYEE",
    }).select("-password");

    return res.status(200).json({
      message: "Employees fetched successfully",
      employees,
    });
  } catch (error) {
    console.error("Get employees error:", error);

    return res.status(500).json({
      message: "Server error while fetching employees",
    });
  }
};


// ==========================================
// GET ALL ADMINS
// EMPLOYEE ONLY
// ==========================================

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({
      role: "ADMIN",
    }).select("-password");

    return res.status(200).json({
      message: "Admins fetched successfully",
      admins,
    });
  } catch (error) {
    console.error("Get admins error:", error);

    return res.status(500).json({
      message: "Server error while fetching admins",
    });
  }
};