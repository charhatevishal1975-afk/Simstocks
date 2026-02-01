import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const LoginPage: React.FC = () => {
  // 'login' or 'signup' determines which box is expanded
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-black">
      {/* LEFT PANEL - Brand Section */}
      <div className="hidden lg:flex w-[35%] bg-[#3B9DF2] flex-col justify-center relative overflow-hidden">
        <div className="z-10">
          <h2 className="text-white text-5xl px-12 font-bold mb-2">
            Welcome to
          </h2>
          <h1 className="text-white text-7xl px-12 font-bold tracking-tight">
            SimStocks
          </h1>
        </div>
        <div className="w-190 h-110 ">
          <img
            src="/Logo 1.png"
            alt="Logo"
            className="w-160 h-160 object-contain"
          />
        </div>
      </div>

      {/* RIGHT PANEL - Accordion Forms */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-125 space-y-4">
          {/* LOGIN BOX (The "Drop-down") */}
          <div
            className={`border-[1.5px] border-black rounded-4xl overflow-hidden transition-all duration-500 ease-in-out ${activeTab === "login" ? "pb-10" : "pb-0"}`}
          >
            <button
              onClick={() => setActiveTab("login")}
              className="w-full py-6 text-2xl font-bold text-center block outline-none"
            >
              Log in to your trading account
            </button>

            <div
              className={`px-10 space-y-6 transition-all duration-500 overflow-hidden ${activeTab === "login" ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <form onSubmit={handleAuth} className="space-y-6">
                <div>
                  <label className="block text-[16px] font-medium mb-2">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    // type={isPhone(value) ? "tel": "email"}
                    required
                    // value={value}
                    placeholder="Type here"
                    className="w-full p-4 rounded-xl border border-gray-300 focus:border-[#3B9DF2] outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label className="text-[16px] font-medium mb-2 block">
                    Your Password
                  </label>

                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Type here"
                    className="w-full p-4 pr-12 rounded-xl border border-gray-300 focus:border-[#3B9DF2] outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-[52px] text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-[#3B9DF2]"
                    />
                    <span className="text-gray-700">Keep me logged in</span>
                  </label>
                  <button type="button" className="font-semibold underline">
                    Forgot password?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white border-3 border-[#3B9DF2] text-[#3B9DF2] hover:bg-[#3B9DF2] hover:text-white font-bold py-5 rounded-full text-2xl shadow-lg transition-all duration-300 transform active:scale-[0.98]"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>

          {/* DIVIDER LINE (Visible when both are visible) */}
          <div className="relative flex py-2 items-center">
            <div className="grow border-t border-gray-300"></div>
            <span className="shrink mx-4 text-gray-500 font-medium text-sm text-center">
              New to trading?
            </span>
            <div className="grow border-t border-gray-300"></div>
          </div>

          {/* CREATE ACCOUNT BOX (The Second "Drop-down") */}
          <div
            className={`border-[1.5px] border-[#3B9DF2] rounded-4xl overflow-hidden transition-all duration-500 ease-in-out ${activeTab === "signup" ? "pb-10" : "pb-0"}`}
          >
            <button
              onClick={() => setActiveTab("signup")}
              className={`w-full py-6 text-xl font-bold text-center block outline-none transition-colors ${activeTab === "signup" ? "text-black" : "text-[#3B9DF2]"}`}
            >
              Create an account
            </button>

            <div
              className={`px-10 space-y-6 transition-all  duration-500 overflow-hidden ${activeTab === "signup" ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <form onSubmit={handleAuth} className="space-y-6">
                <div>
                  <label className="block text-[16px] font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Type here"
                    className="w-full p-4 rounded-xl border border-gray-300 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-medium mb-2">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Type here"
                    className="w-full p-4 rounded-xl border border-gray-300 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-medium mb-2">
                    Choose Password
                  </label>
                  <input
                    required
                    type="password"
                    placeholder="Type here"
                    className="w-full p-4 rounded-xl border border-gray-300 outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white border-3 border-[#3B9DF2] text-[#3B9DF2] hover:bg-[#3B9DF2] hover:text-white font-bold py-5 rounded-full text-2xl shadow-lg transition-all duration-300 transform active:scale-[0.98]"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
