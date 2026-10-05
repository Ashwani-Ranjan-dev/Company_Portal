import {
  BriefcaseBusiness,
  Building2,
  Mail,
  Phone,
  ShieldCheck,
  UserCircle,
} from "lucide-react";

import DashboardLayout from "../components/layout/DashboardLayout";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout
      title="My Profile"
      description="View your personal and professional information"
    >
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="h-32 bg-green-600" />

          <div className="px-6 pb-6">
            <div className="-mt-12 flex flex-col sm:flex-row sm:items-end gap-4">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-2xl bg-white border-4 border-white shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-green-100 flex items-center justify-center">
                  <UserCircle
                    size={52}
                    className="text-green-600"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="pb-1">
                <h2 className="text-2xl font-bold text-gray-900">
                  {user?.name}
                </h2>

                <div className="flex items-center gap-2 mt-1">
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    {user?.role}
                  </span>

                  <span className="text-sm text-gray-500">
                    Nexora Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mt-6 bg-white rounded-2xl border shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <UserCircle
                size={21}
                className="text-green-600"
              />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Personal Information
              </h3>

              <p className="text-sm text-gray-500">
                Your basic account information
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Full Name
              </p>

              <div className="flex items-center gap-3 mt-2">
                <UserCircle
                  size={18}
                  className="text-gray-400"
                />

                <p className="font-medium text-gray-900">
                  {user?.name}
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Email Address
              </p>

              <div className="flex items-center gap-3 mt-2">
                <Mail
                  size={18}
                  className="text-gray-400"
                />

                <p className="font-medium text-gray-900 break-all">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Phone Number
              </p>

              <div className="flex items-center gap-3 mt-2">
                <Phone
                  size={18}
                  className="text-gray-400"
                />

                <p className="font-medium text-gray-900">
                  {user?.phone}
                </p>
              </div>
            </div>

            {/* Role */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Account Role
              </p>

              <div className="flex items-center gap-3 mt-2">
                <ShieldCheck
                  size={18}
                  className="text-gray-400"
                />

                <p className="font-medium text-gray-900">
                  {user?.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div className="mt-6 bg-white rounded-2xl border shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <BriefcaseBusiness
                size={21}
                className="text-green-600"
              />
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Professional Information
              </h3>

              <p className="text-sm text-gray-500">
                Your company-related information
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Department */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Department
              </p>

              <div className="flex items-center gap-3 mt-2">
                <Building2
                  size={18}
                  className="text-gray-400"
                />

                <p className="font-medium text-gray-900">
                  {user?.department}
                </p>
              </div>
            </div>

            {/* Designation */}
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Designation
              </p>

              <div className="flex items-center gap-3 mt-2">
                <BriefcaseBusiness
                  size={18}
                  className="text-gray-400"
                />

                <p className="font-medium text-gray-900">
                  {user?.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;