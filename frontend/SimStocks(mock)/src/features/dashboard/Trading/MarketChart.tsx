import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Mock data for technical analysis
const data = [
  { time: "10:00", open: 980, close: 1010, high: 1020, low: 970, volume: 400 },
  { time: "11:00", open: 1010, close: 990, high: 1015, low: 985, volume: 600 },
  { time: "12:00", open: 990, close: 1050, high: 1060, low: 980, volume: 500 },
  {
    time: "13:00",
    open: 1050,
    close: 1030,
    high: 1055,
    low: 1025,
    volume: 800,
  },
  {
    time: "14:00",
    open: 1030,
    close: 1100,
    high: 1110,
    low: 1020,
    volume: 700,
  },
  {
    time: "15:00",
    open: 1100,
    close: 1150,
    high: 1160,
    low: 1090,
    volume: 900,
  },
];

const MarketChart: React.FC = () => {
  return (
    <div className="border-[1.5px] border-black rounded-[24px] p-6 bg-white shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-gray-400">BTC/USD</h3>
        <div className="flex gap-2">
          {["Day", "Week", "Month"].map((t) => (
            <button
              key={t}
              className={`px-4 py-1 rounded-full text-xs font-bold transition ${t === "Week" ? "bg-[#3B9DF2] text-white" : "text-[#3B9DF2] border border-[#3B9DF2]"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="time"
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
            <Tooltip
              contentStyle={{ borderRadius: "12px", border: "1px solid #eee" }}
              cursor={{ fill: "#f9f9f9" }}
            />
            {/* Volume Bars (Background) */}
            <Bar dataKey="volume" fill="#F3F4F6" barSize={40} />
            {/* Price Action (The "Candle" simulation) */}
            <Bar
              dataKey="close"
              barSize={20}
              shape={(props: any) => {
                const { x, y, width, height, payload } = props;
                const isGreen = payload.close >= payload.open;
                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={isGreen ? "#10B981" : "#EF4444"}
                    rx={4}
                  />
                );
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketChart;
