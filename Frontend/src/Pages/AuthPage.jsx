import { useState } from "react";

import { Toaster } from "react-hot-toast";
import LoginForm from "../Components/AuthComponents/LoginForm";
import SignupForm from "../Components/AuthComponents/SignupForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-6xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <h1 className="text-5xl font-bold text-white">ADON</h1>

          <p className="mt-4 text-slate-300 text-lg">Build. Grow. Scale.</p>

          <p className="mt-6 text-slate-400">
            Manage your projects and digital presence from one powerful
            dashboard.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12">
          <div className="flex mb-8 bg-slate-800 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-lg ${
                isLogin ? "bg-amber-500 text-black" : "text-white"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-lg ${
                !isLogin ? "bg-amber-500 text-black" : "text-white"
              }`}
            >
              Sign Up
            </button>
          </div>
          <Toaster position="top-right" />

          {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
