import express from "express";

import {
  getEmployees,
  getAdmins,
} from "../controllers/usercontroller.js";

import protect from "../middlewares/authmiddleware.js";
import requireRole from "../middlewares/rolemiddleware.js";

const router = express.Router();


// ==========================================
// ADMIN → VIEW ALL EMPLOYEES
// ==========================================

router.get(
  "/admin/employees",
  protect,
  requireRole("ADMIN"),
  getEmployees
);


// ==========================================
// EMPLOYEE → VIEW ALL ADMINS
// ==========================================

router.get(
  "/employee/admins",
  protect,
  requireRole("EMPLOYEE"),
  getAdmins
);

export default router;