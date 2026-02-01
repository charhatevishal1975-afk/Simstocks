import React, { useState } from "react";
import { MOCK_TRADES } from "../../../constants/mockData";

// Mock data representing the sorting logic (Profitability: High to Low)
const MOCK_MARKET = MOCK_TRADES;

const AssetSidebar: React.FC = () => {
  const [search, setSearch] = useState("");

  // Sorting logic based on your requirement: most profitable first
  const sortedMarket = MOCK_MARKET.sort(
    (a, b) => a.profitRank - b.profitRank,
  ).filter((stock) => stock.symbol.includes(search.toUpperCase()));

  return (
    <div className="space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Stocks"
          className="w-full p-3 pl-4 rounded-xl border-2 border-gray-200 outline-none focus:border-[#3B9DF2]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute right-4 top-3 text-gray-400">🔍</span>
      </div>

      <div className="bg-blue-500 text-white text-center py-1 rounded-t-xl font-bold text-xs uppercase tracking-widest">
        Stocks
      </div>

      <div className="space-y-3 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
        {sortedMarket.map((asset, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition cursor-pointer border-l-4 border-transparent hover:border-[#3B9DF2]"
          >
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ₿
              </div>
              <div>
                <p className="font-bold leading-none">{asset.symbol}</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase">
                  {asset.name}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">{asset.price}</p>
              <p
                className={`font-bold text-sm ${asset.change.startsWith("+") ? "text-emerald-500" : "text-red-500"}`}
              >
                {asset.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetSidebar;
