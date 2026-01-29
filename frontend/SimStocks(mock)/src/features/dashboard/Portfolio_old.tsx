import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for that 7-day portfolio growth chart
const data = [
  { day: "Day 1", value: 1000000 },
  { day: "Day 2", value: 1005000 },
  { day: "Day 3", value: 998000 },
  { day: "Day 4", value: 1012000 },
  { day: "Day 5", value: 1008000 },
  { day: "Day 6", value: 1025000 },
  { day: "Day 7", value: 1032000 },
];

const PortfolioView: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SIDE: Search and Trade List */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 pl-4 rounded-xl border-2 border-gray-200 outline-none focus:border-[#3B9DF2]"
          />
          <span className="absolute right-4 top-3 text-gray-400">🔍</span>
        </div>

        <div className="flex gap-2">
          <button className="bg-[#3B9DF2] text-white px-4 py-1.5 rounded-full text-sm font-bold">
            Open Trades
          </button>
          <button className="border-2 border-[#3B9DF2] text-[#3B9DF2] px-4 py-1.5 rounded-full text-sm font-bold">
            Closed Trades
          </button>
        </div>

        <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  ₿
                </div>
                <div>
                  <p className="font-bold leading-none">BTC</p>
                  <p className="text-xs text-gray-500 font-bold">BTC/USD</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">₹1000</p>
                <p className="text-emerald-500 font-bold text-sm">+10.11</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: Portfolio Value Chart */}
      <div className="lg:col-span-2 space-y-4">
        <div className="border-[1.5px] border-black rounded-[24px] p-6 shadow-sm min-h-[450px]">
          <h3 className="text-xl font-bold text-gray-400 mb-6">
            Portfolio Value
          </h3>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#eee"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#888", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#888", fontSize: 12 }}
                  domain={["auto", "auto"]}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B9DF2"
                  strokeWidth={4}
                  dot={{ r: 4, fill: "#3B9DF2" }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex gap-2 mt-6">
            <button className="px-4 py-1 text-[#3B9DF2] font-bold rounded-full border border-[#3B9DF2]">
              Day
            </button>
            <button className="px-4 py-1 bg-[#3B9DF2] text-white font-bold rounded-full">
              Week
            </button>
            <button className="px-4 py-1 text-[#3B9DF2] font-bold rounded-full border border-[#3B9DF2]">
              Month
            </button>
          </div>
        </div>

        <p className="text-center font-bold text-gray-800 mt-4">
          Pick a trade to view its details.
        </p>
      </div>
    </div>
  );
};

export default PortfolioView;
