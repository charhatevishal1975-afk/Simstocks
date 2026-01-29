import React, { useState } from "react";

const ProfileView: React.FC = () => {
  // 1. Initial State from Mock Data
  const [formData, setFormData] = useState({
    fullName: "Sample Name",
    email: "sample@email.com",
    password: "pass12",
  });

  const [hasChanges, setHasChanges] = useState(false);

  // 2. Handle Input Changes with Validation Trigger
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setHasChanges(true); // Enables the Save button
  };

  const handleLogout = () => {
    // Recommendation: Clear localStorage.removeItem('token') here
    console.log("User Logged Out");
    window.location.href = "/login";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in duration-700 max-w-[1400px] mx-auto pb-10">
      {/* LEFT COLUMN: Your Details */}
      <div className="border-[1.5px] border-black rounded-[32px] p-8 space-y-6 bg-white shadow-sm">
        <h2 className="text-2xl font-bold text-center">Your Details</h2>

        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <div className="flex gap-2">
            <button className="bg-[#3B9DF2] text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-md">
              Upload New
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-bold">
              Delete Photo
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-[#3B9DF2] outline-none font-medium"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">
              Email Address/Phone Number
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-[#3B9DF2] outline-none font-medium"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-bold text-gray-700">
              Set Password
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border-2 border-[#3B9DF2] rounded-xl outline-none font-medium"
            />
          </div>
        </div>

        <button
          disabled={!hasChanges}
          className={`w-full py-4 rounded-full font-bold text-lg border-2 transition-all ${hasChanges ? "border-[#3B9DF2] text-[#3B9DF2] hover:bg-[#3B9DF2] hover:text-white" : "border-gray-200 text-gray-300 cursor-not-allowed"}`}
        >
          Save Details
        </button>

        <button
          onClick={handleLogout}
          className="w-full py-4 rounded-full bg-gray-300 text-gray-600 font-bold text-lg hover:bg-red-500 hover:text-white transition-colors"
        >
          Log Out
        </button>
      </div>

      {/* RIGHT COLUMN: Account & Performance */}
      <div className="space-y-6">
        {/* About Account Card */}
        <div className="border-[1.5px] border-black rounded-[32px] p-8 bg-white shadow-sm">
          <h2 className="text-2xl font-bold mb-6">About account</h2>
          <div className="space-y-3 text-lg">
            <p className="flex justify-between">
              <span className="text-gray-500 font-medium">Joined on:</span>{" "}
              <span className="font-bold">21 January, 2025</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500 font-medium">Account ID:</span>{" "}
              <span className="font-bold">SIM123</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500 font-medium">Account Type:</span>{" "}
              <span className="font-bold">Private</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500 font-medium">Trading Level:</span>{" "}
              <span className="font-bold">Beginner</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-500 font-medium">Risk Appetite:</span>{" "}
              <span className="font-bold">Low</span>
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4">
          <StatCard label="Portfolio Value" value="₹10,00,000" icon="💳" />
          <StatCard label="Available Cash" value="₹9,00,000" icon="💳" />
          <StatCard label="Open Positions" value="+₹1234" icon="💳" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Weekly Performance" value="+₹120" icon="📊" />
          <StatCard label="Lifetime Performance" value="+₹12000" icon="📊" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <StatCard label="Total Trades" value="24" icon="💼" />
          <StatCard label="Profitable Trades" value="14" icon="💼" />
          <StatCard label="Losing Trades" value="10" icon="💼" />
        </div>
      </div>
    </div>
  );
};

// Sub-component for small stat cards
const StatCard = ({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) => (
  <div className="bg-gray-100 p-4 rounded-2xl flex items-center gap-3">
    <div className="text-xl bg-white p-2 rounded-lg shadow-sm">{icon}</div>
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">
        {label}
      </p>
      <p className="text-sm font-black text-gray-800">{value}</p>
    </div>
  </div>
);

export default ProfileView;
