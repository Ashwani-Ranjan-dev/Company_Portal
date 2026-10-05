import { useEffect, useState } from "react";

import {
  Users,
  Mail,
  Phone,
  Building2,
  BriefcaseBusiness,
  RefreshCw,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

import { getEmployees } from "../services/authService";

import DashboardLayout from "../components/layout/DashboardLayout";

const AdminDashboard = () => {
  const { user } = useAuth();

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getEmployees();

      setEmployees(data.employees);
    } catch (error) {
      console.error("Fetch employees error:", error);

      setError(
        error.message || "Unable to fetch employees"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <DashboardLayout
      title="Admin Dashboard"
      description={`Welcome back, ${user?.name}. Manage your company employees.`}
    >

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">

        <div className="bg-white rounded-2xl border p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Total Employees
              </p>

              <p className="text-3xl font-bold text-gray-900 mt-2">
                {employees.length}
              </p>

            </div>

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <Users
                size={24}
                className="text-green-600"
              />
            </div>

          </div>

        </div>


        <div className="bg-white rounded-2xl border p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Your Role
              </p>

              <p className="text-2xl font-bold text-gray-900 mt-2">
                ADMIN
              </p>

            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Building2
                size={24}
                className="text-blue-600"
              />
            </div>

          </div>

        </div>


        <div className="bg-white rounded-2xl border p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Access Level
              </p>

              <p className="text-2xl font-bold text-gray-900 mt-2">
                Full
              </p>

            </div>

            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Users
                size={24}
                className="text-purple-600"
              />
            </div>

          </div>

        </div>

      </div>


      {/* Employee Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">

        <div>

          <h3 className="text-xl font-bold text-gray-900">
            Employees
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            All registered employees in the company
          </p>

        </div>

        <button
          onClick={fetchEmployees}
          disabled={loading}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border hover:bg-gray-50 transition disabled:opacity-50"
        >
          <RefreshCw
            size={17}
            className={loading ? "animate-spin" : ""}
          />

          Refresh
        </button>

      </div>


      {/* Loading */}

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white border rounded-2xl p-6 animate-pulse"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />

                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-3 bg-gray-200 rounded w-1/3 mt-2" />
                </div>
              </div>

              <div className="h-3 bg-gray-200 rounded mt-6" />
              <div className="h-3 bg-gray-200 rounded mt-3" />
              <div className="h-3 bg-gray-200 rounded mt-3" />
            </div>
          ))}

        </div>
      )}


      {/* Error */}

      {!loading && error && (
        <div className="bg-white border border-red-200 rounded-2xl p-8 text-center">

          <p className="text-red-600 font-medium">
            {error}
          </p>

          <button
            onClick={fetchEmployees}
            className="mt-4 px-5 py-2.5 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            Try Again
          </button>

        </div>
      )}


      {/* Empty */}

      {!loading &&
        !error &&
        employees.length === 0 && (
          <div className="bg-white border rounded-2xl p-12 text-center">

            <Users
              size={42}
              className="mx-auto text-gray-400"
            />

            <h3 className="mt-4 font-semibold text-gray-900">
              No employees found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              No employees have registered yet.
            </p>

          </div>
        )}


      {/* Employees */}

      {!loading &&
        !error &&
        employees.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {employees.map((employee) => (
              <div
                key={employee._id}
                className="bg-white border rounded-2xl p-6 hover:shadow-lg transition"
              >

                {/* Employee Header */}

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg">
                    {employee.name
                      ?.charAt(0)
                      .toUpperCase()}
                  </div>

                  <div className="min-w-0">

                    <h4 className="font-bold text-gray-900 truncate">
                      {employee.name}
                    </h4>

                    <span className="inline-block mt-1 text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700">
                      Employee
                    </span>

                  </div>

                </div>


                {/* Details */}

                <div className="mt-6 space-y-3">

                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Mail
                      size={17}
                      className="mt-0.5 shrink-0"
                    />

                    <span className="break-all">
                      {employee.email}
                    </span>
                  </div>


                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone size={17} />

                    {employee.phone}
                  </div>


                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Building2 size={17} />

                    {employee.department}
                  </div>


                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <BriefcaseBusiness size={17} />

                    {employee.designation}
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

    </DashboardLayout>
  );
};

export default AdminDashboard;