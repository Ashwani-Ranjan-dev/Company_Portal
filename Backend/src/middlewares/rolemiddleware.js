const requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    // Check whether user is authenticated
    if (!req.user) {
      return res.status(401).json({
        message: "Not authenticated",
      });
    }

    // Check whether user's role is allowed
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    // User has the required role
    next();
  };
};

export default requireRole;