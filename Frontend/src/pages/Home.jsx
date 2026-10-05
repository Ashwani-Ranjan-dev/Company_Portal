import {
  ShieldCheck,
  Users,
  LockKeyhole,
  ArrowRight,
  UserPlus,
} from "lucide-react";

import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <ShieldCheck size={16} />
              Secure Company Portal
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
              Connect.
              <span className="text-green-600">
                {" "}Collaborate.
              </span>
              <br />
              Grow Together.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Nexora Technologies provides a secure platform
              for employees and administrators to connect,
              access company information, and collaborate
              efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/register"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition"
              >
                <UserPlus size={20} />
                Create Account
              </Link>

              <Link
                to="/login"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
              >
                Login
                <ArrowRight size={20} />
              </Link>

            </div>

          </div>


          {/* Right */}

          <div className="relative">

            <div className="bg-green-600 rounded-3xl p-8 shadow-xl">

              <div className="bg-white rounded-2xl p-6">

                <div className="flex items-center gap-4 mb-6">

                  <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Users
                      size={28}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Company Portal
                    </h3>

                    <p className="text-gray-500">
                      One secure workspace
                    </p>
                  </div>

                </div>


                <div className="space-y-4">

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                    <ShieldCheck
                      className="text-green-600"
                    />

                    <div>
                      <p className="font-semibold">
                        Role-Based Access
                      </p>

                      <p className="text-sm text-gray-500">
                        Secure access for every user
                      </p>
                    </div>
                  </div>


                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                    <LockKeyhole
                      className="text-green-600"
                    />

                    <div>
                      <p className="font-semibold">
                        Protected Data
                      </p>

                      <p className="text-sm text-gray-500">
                        JWT authentication
                      </p>
                    </div>
                  </div>


                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                    <Users
                      className="text-green-600"
                    />

                    <div>
                      <p className="font-semibold">
                        Employee & Admin
                      </p>

                      <p className="text-sm text-gray-500">
                        Separate dashboards
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Features */}

      <section className="bg-white border-t">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-900">
              Built for Secure Collaboration
            </h2>

            <p className="mt-3 text-gray-600">
              Simple access, clear roles, and protected information.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border bg-gray-50">
              <ShieldCheck
                size={28}
                className="text-green-600"
              />

              <h3 className="mt-4 font-bold text-lg">
                Secure Authentication
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                User accounts are protected using JWT-based
                authentication and HTTP-only cookies.
              </p>
            </div>


            <div className="p-6 rounded-2xl border bg-gray-50">
              <Users
                size={28}
                className="text-green-600"
              />

              <h3 className="mt-4 font-bold text-lg">
                Role-Based Access
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Administrators and employees receive access
                to the information relevant to their roles.
              </p>
            </div>


            <div className="p-6 rounded-2xl border bg-gray-50">
              <LockKeyhole
                size={28}
                className="text-green-600"
              />

              <h3 className="mt-4 font-bold text-lg">
                Protected Information
              </h3>

              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Sensitive authentication data is never exposed
                through the application interface.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;