import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { apiService } from "../../../constants/apiService"; // Ensure this path is correct
// import { STOCK_GRAPHS, MOCK_TRADES } from '../../../constants/mockData';

interface MarketChartProps {
  symbol: string; // The selected stock symbol passed from TradingView
}

const MarketChart: React.FC<MarketChartProps> = ({ symbol }) => {
  // UseMemo prevents re-calculating the data unless the symbol changes
  const chartData = useMemo(() => apiService.getStockData(symbol), [symbol]);

  return (
    <div className="border-[1.5px] border-black rounded-[24px] p-6 bg-white shadow-sm h-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-black text-black">{symbol}/USD</h3>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Real-time Market Data
          </p>
        </div>

        <div className="flex gap-2">
          {["Day", "Week", "Month"].map((t) => (
            <button
              key={t}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${
                t === "Day"
                  ? "bg-[#3B9DF2] text-white shadow-md"
                  : "text-[#3B9DF2] border border-[#3B9DF2] hover:bg-blue-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData}>
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
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              cursor={{ fill: "#f9f9f9" }}
            />

            {/* Volume Bars */}
            <Bar dataKey="volume" fill="#F3F4F6" barSize={40} />

            {/* Price Action (Candlestick Simulation) */}
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
