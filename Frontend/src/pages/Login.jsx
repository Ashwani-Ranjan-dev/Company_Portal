import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../services/authService.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setLoading(true);

        try {
            const data = await loginUser(formData);

            login(data.user);

            if (data.user.role === "ADMIN") {
                navigate("/admin/dashboard");
            } else {
                navigate("/employee/dashboard");
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-green-600">
                        Nexora Technologies
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Employee & Admin Management Portal
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

                    <h2 className="text-2xl font-bold text-gray-900">
                        Welcome Back
                    </h2>

                    <p className="text-gray-500 mt-1 mb-6">
                        Login to your account
                    </p>

                    {error && (
                        <div className="mb-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-red-700">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-60"
                        >
                            {loading
                                ? "Logging in..."
                                : "Login"}
                        </button>

                    </form>

                    <p className="text-center text-gray-600 mt-6">
                        Don't have an account?{" "}

                        <Link
                            to="/register"
                            className="font-semibold text-green-600 hover:text-green-700"
                        >
                            Register
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;