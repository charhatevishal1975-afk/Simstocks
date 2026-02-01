import React, { useState } from "react";
import { MOCK_TRADES } from "../mockData_old";

// 1. THIS INTERFACE FIXES THE ERROR: It tells TypeScript what props to expect
interface TradeSidebarProps {
  selectedSymbols: string[];
  onToggleStock: (symbol: string) => void;
}

// Mock data for your trades

const TradeSidebar: React.FC<TradeSidebarProps> = ({
  selectedSymbols,
  onToggleStock,
}) => {
  const [filter, setFilter] = useState<"open" | "closed">("open");
  const [search, setSearch] = useState("");

  const filteredTrades = MOCK_TRADES.filter(
    (t) => t.type === filter && t.symbol.includes(search.toUpperCase()),
  );

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 rounded-xl border-2 border-gray-200 outline-none focus:border-[#3B9DF2]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute right-4 top-3 text-gray-400">🔍</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setFilter("open")}
          className={`px-4 py-1.5 rounded-full text-sm font-bold transition ${filter === "open" ? "bg-[#3B9DF2] text-white" : "border-2 border-[#3B9DF2] text-[#3B9DF2]"}`}
        >
          Open Trades
        </button>
        <button
          onClick={() => setFilter("closed")}
          className={`px-4 py-1.5 rounded-full text-sm font-bold transition ${filter === "closed" ? "bg-[#3B9DF2] text-white" : "border-2 border-[#3B9DF2] text-[#3B9DF2]"}`}
        >
          Closed Trades
        </button>
      </div>

      <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
        {filteredTrades.map((trade) => {
          // Check if this specific stock is currently selected for comparison
          const isSelected = selectedSymbols.includes(trade.symbol);

          return (
            <div
              key={trade.id}
              onClick={() => onToggleStock(trade.symbol)}
              className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border-2 ${
                isSelected
                  ? "bg-blue-50 border-[#3B9DF2] shadow-md"
                  : "bg-gray-100 border-transparent hover:bg-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold relative">
                  ₿{/* Small blue checkmark if selected */}
                  {isSelected && (
                    <div className="absolute -top-1 -right-1 bg-[#3B9DF2] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-bold leading-none">{trade.symbol}</p>
                  <p className="text-xs text-gray-500 font-bold">
                    {trade.name}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">₹{trade.price}</p>
                <p
                  className={`font-bold text-sm ${trade.change.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}
                >
                  {trade.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TradeSidebar;
