import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { STOCK_GRAPHS } from "../mockData_old";
import selectedSymbols from "./TradeSidebar";

interface TradeChartProps {
  selectedSymbols: string[]; // The '[]' is crucial here
}

const data = [
  { name: "10:30", price: 1000, volume: 400 },
  { name: "11:00", price: 1100, volume: 700 },
  { name: "11:30", price: 1050, volume: 500 },
  { name: "12:00", price: 1200, volume: 900 },
  { name: "12:30", price: 1150, volume: 600 },
];

const TradeChart: React.FC<TradeChartProps> = ({ selectedSymbols }) => {
  return (
    <div className="border-[1.5px] border-black rounded-[24px] p-6 shadow-sm bg-white">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-400">Portfolio Value (₹)</h3>
        <div className="flex gap-2">
          {["Day", "Week", "Month"].map((t) => (
            <button
              key={t}
              className={`px-4 py-1 rounded-full text-xs font-bold ${t === "Day" ? "bg-[#3B9DF2] text-white" : "text-[#3B9DF2] border border-[#3B9DF2]"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#999" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#999" }}
              domain={["auto", "auto"]}
            />
            <Tooltip />
            <Bar
              dataKey="volume"
              fill="#E5E7EB"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#3B9DF2"
              strokeWidth={4}
              dot={{ r: 4, fill: "#3B9DF2" }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm font-bold text-gray-400 mt-4">Date</p>
    </div>
  );
};

export default TradeChart;
