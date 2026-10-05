import { useEffect, useState } from "react";

import {
  Users,
  Mail,
  Phone,
  Building2,
  BriefcaseBusiness,
  RefreshCw,
  LogOut,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { getAdmins } from "../services/authService";

const EmployeeDashboard = () => {
  const { user, logout } = useAuth();

  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getAdmins();

      setAdmins(data.admins);
    } catch (error) {
      console.error("Fetch admins error:", error);

      setError(
        error.message || "Unable to fetch admins"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}

      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-green-600">
              Nexora Technologies
            </h1>

            <p className="text-sm text-gray-500">
              Employee Portal
            </p>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </header>


      {/* Main */}

      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Welcome */}

        <div className="mb-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Welcome, {user.name}
          </h2>

          <p className="mt-2 text-gray-600">
            View the administrators of Nexora Technologies.
          </p>

        </div>


        {/* Statistics */}

        <div className="bg-white rounded-2xl border p-6 mb-8">

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <Users
                className="text-green-600"
                size={24}
              />
            </div>

            <div>

              <p className="text-sm text-gray-500">
                Total Administrators
              </p>

              <p className="text-2xl font-bold text-gray-900">
                {admins.length}
              </p>

            </div>

          </div>

        </div>


        {/* Admin section */}

        <div className="flex items-center justify-between mb-5">

          <div>

            <h3 className="text-2xl font-bold text-gray-900">
              Administrators
            </h3>

            <p className="text-gray-500 mt-1">
              Company administration team
            </p>

          </div>

          <button
            onClick={fetchAdmins}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 transition disabled:opacity-50"
          >
            <RefreshCw
              size={18}
              className={loading ? "animate-spin" : ""}
            />

            Refresh
          </button>

        </div>


        {/* Loading */}

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl border p-6 animate-pulse"
              >
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4" />
                <div className="h-4 bg-gray-200 rounded mb-3" />
                <div className="h-4 bg-gray-200 rounded mb-3" />
                <div className="h-4 bg-gray-200 rounded" />
              </div>
            ))}

          </div>
        )}


        {/* Error */}

        {!loading && error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">

            <p className="text-red-600 font-medium">
              {error}
            </p>

            <button
              onClick={fetchAdmins}
              className="mt-4 px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              Try Again
            </button>

          </div>
        )}


        {/* Empty */}

        {!loading &&
          !error &&
          admins.length === 0 && (
            <div className="bg-white rounded-2xl border p-12 text-center">

              <Users
                size={40}
                className="mx-auto text-gray-400"
              />

              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                No administrators found
              </h4>

              <p className="mt-2 text-gray-500">
                There are currently no registered administrators.
              </p>

            </div>
          )}


        {/* Admin cards */}

        {!loading &&
          !error &&
          admins.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {admins.map((admin) => (
                <div
                  key={admin._id}
                  className="bg-white rounded-2xl border p-6 hover:shadow-md transition"
                >

                  {/* Name */}

                  <div className="flex items-center gap-4 mb-5">

                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
                      {admin.name
                        ?.charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>

                      <h4 className="font-bold text-gray-900">
                        {admin.name}
                      </h4>

                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                        {admin.role}
                      </span>

                    </div>

                  </div>


                  {/* Email */}

                  <div className="flex items-center gap-3 text-gray-600 mb-3">

                    <Mail size={18} />

                    <span className="text-sm break-all">
                      {admin.email}
                    </span>

                  </div>


                  {/* Phone */}

                  <div className="flex items-center gap-3 text-gray-600 mb-3">

                    <Phone size={18} />

                    <span className="text-sm">
                      {admin.phone}
                    </span>

                  </div>


                  {/* Department */}

                  <div className="flex items-center gap-3 text-gray-600 mb-3">

                    <Building2 size={18} />

                    <span className="text-sm">
                      {admin.department}
                    </span>

                  </div>


                  {/* Designation */}

                  <div className="flex items-center gap-3 text-gray-600">

                    <BriefcaseBusiness size={18} />

                    <span className="text-sm">
                      {admin.designation}
                    </span>

                  </div>

                </div>
              ))}

            </div>
          )}

      </main>
    </div>
  );
};

export default EmployeeDashboard;