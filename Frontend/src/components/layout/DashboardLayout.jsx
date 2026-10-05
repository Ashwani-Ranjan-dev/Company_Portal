import {
    Building2,
    LayoutDashboard,
    LogOut,
    UserCircle,
    UserRound,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const DashboardLayout = ({ children, title, description }) => {
    const { user, logout } = useAuth();

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
        <div className="min-h-screen bg-gray-50 flex">

            {/* Sidebar */}

            <aside className="hidden md:flex w-64 bg-white border-r flex-col">

                {/* Logo */}

                <div className="p-6 border-b">

                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center">
                            <Building2
                                size={22}
                                className="text-white"
                            />
                        </div>

                        <div>
                            <h1 className="font-bold text-lg text-gray-900">
                                Nexora
                            </h1>

                            <p className="text-xs text-gray-500">
                                Technologies
                            </p>
                        </div>

                    </div>

                </div>


                {/* Navigation */}

                <nav className="flex-1 p-4 space-y-2">
                    {/* Dashboard */}
                    <button
                        onClick={() => navigate(dashboardPath)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 text-green-700 font-medium"
                    >
                        <LayoutDashboard size={20} />

                        Dashboard
                    </button>

                    {/* Profile */}
                    <button
                        onClick={() => navigate("/profile")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition"
                    >
                        <UserRound size={20} />

                        Profile
                    </button>
                </nav>


                {/* User */}

                <div className="p-4 border-t">

                    <div className="flex items-center gap-3 p-3">

                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <UserCircle
                                size={22}
                                className="text-green-600"
                            />
                        </div>

                        <div className="min-w-0">

                            <p className="font-semibold text-sm text-gray-900 truncate">
                                {user?.name}
                            </p>

                            <p className="text-xs text-green-600">
                                {user?.role}
                            </p>

                        </div>

                    </div>


                    <button
                        onClick={handleLogout}
                        className="w-full mt-2 flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
                    >
                        <LogOut size={20} />

                        Logout
                    </button>

                </div>

            </aside>


            {/* Main Area */}

            <div className="flex-1 min-w-0">

                {/* Mobile / Desktop Header */}

                <header className="bg-white border-b">

                    <div className="px-6 py-5">

                        <div className="max-w-7xl mx-auto">

                            <h2 className="text-2xl font-bold text-gray-900">
                                {title}
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                {description}
                            </p>

                        </div>

                    </div>

                </header>


                {/* Page Content */}

                <main className="p-6">

                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>

                </main>

            </div>

        </div>
    );
};

export default DashboardLayout;