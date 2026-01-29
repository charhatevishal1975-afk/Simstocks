import React, { useState } from "react";

// Mock data structure mimicking an API response
const MOCK_TRADES = [
  {
    id: 1,
    symbol: "BTC",
    name: "BTC/USD",
    price: 1000,
    change: "+10.11",
    type: "open",
  },
  {
    id: 2,
    symbol: "ETH",
    name: "ETH/USD",
    price: 2500,
    change: "+5.24",
    type: "open",
  },
  {
    id: 3,
    symbol: "SOL",
    name: "SOL/USD",
    price: 120,
    change: "-2.10",
    type: "closed",
  },
  {
    id: 4,
    symbol: "SOL",
    name: "SOL/USD",
    price: 120,
    change: "-2.10",
    type: "closed",
  },
];

const TradeSidebar: React.FC = () => {
  const [filter, setFilter] = useState<"open" | "closed">("open");
  const [search, setSearch] = useState("");

  const filteredTrades = MOCK_TRADES.filter(
    (t) => t.type === filter && t.symbol.includes(search.toUpperCase()),
  );

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-3 pl-4 rounded-xl border-2 border-gray-200 outline-none focus:border-[#3B9DF2]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute right-4 top-3 text-gray-400">🔍</span>
      </div>

      {/* Toggle Buttons */}
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

      {/* Trade List */}
      <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
        {filteredTrades.map((trade) => (
          <div
            key={trade.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-2xl hover:bg-gray-200 transition cursor-pointer border-l-4 border-transparent hover:border-[#3B9DF2]"
          >
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ₿
              </div>
              <div>
                <p className="font-bold leading-none">{trade.symbol}</p>
                <p className="text-xs text-gray-500 font-bold">{trade.name}</p>
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
        ))}
      </div>
    </div>
  );
};

export default TradeSidebar;
