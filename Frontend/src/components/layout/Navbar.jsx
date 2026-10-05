import { Link, useNavigate } from "react-router-dom";

import {
  Building2,
  LogIn,
  UserPlus,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const dashboardPath =
    user?.role === "ADMIN"
      ? "/admin/dashboard"
      : "/employee/dashboard";

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
            <Building2
              size={22}
              className="text-white"
            />
          </div>

          <div>
            <h1 className="font-bold text-xl text-gray-900">
              Nexora
            </h1>

            <p className="text-xs text-gray-500">
              Technologies
            </p>
          </div>
        </Link>


        {/* Navigation */}

        <div className="flex items-center gap-3">

          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                <LogIn size={18} />
                Login
              </Link>

              <Link
                to="/register"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                <UserPlus size={18} />
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to={dashboardPath}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>

              <div className="hidden sm:block text-right mr-2">
                <p className="text-sm font-semibold text-gray-900">
                  {user.name}
                </p>

                <p className="text-xs text-green-600">
                  {user.role}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;