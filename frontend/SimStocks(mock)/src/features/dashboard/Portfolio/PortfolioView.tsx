import React, { useState } from "react";
import TradeSidebar from "./TradeSidebar";
import TradeChart from "./TradeChart";
import TradeManagement from "./TradeManagement";
import CloseTradeModal from "./CloseTradeModal";
// import { STOCK_GRAPHS, MOCK_TRADES } from "../mockData_old";

const PortfolioView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Fixed the 'selectedSymbols' not found error
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>(["BTC"]);

  // 2. Logic to handle selecting up to 3 stocks
  const handleToggleStock = (symbol: string) => {
    setSelectedSymbols((prev) => {
      if (prev.includes(symbol)) {
        return prev.length > 1 ? prev.filter((s) => s !== symbol) : prev;
      }
      return prev.length < 3 ? [...prev, symbol] : prev;
    });
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-700 max-w-[1400px] mx-auto pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          {/* Pass the selection logic to the sidebar */}
          <TradeSidebar
            selectedSymbols={selectedSymbols}
            onToggleStock={handleToggleStock}
          />
        </div>

        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Correctly passing the array to TradeChart */}
          <TradeChart selectedSymbols={selectedSymbols} />

          {/* Show management only if a single stock is focused for action */}
          {selectedSymbols.length === 1 && (
            <TradeManagement onOpenModal={() => setIsModalOpen(true)} />
          )}
        </div>
      </div>

      {/* 3. Side-by-Side Trade Cards from Closed3.png */}
      <div className="flex gap-4 overflow-x-auto py-4 custom-scrollbar">
        {selectedSymbols.map((sym) => (
          <div
            key={sym}
            className="flex-1 min-w-[320px] bg-white border-2 border-[#3B9DF2] rounded-[24px] p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                ₿
              </div>
              <div>
                <p className="font-bold text-lg leading-none">{sym}</p>
                <p className="text-xs text-gray-500 font-bold uppercase">
                  {sym}/USD
                </p>
              </div>
            </div>

            <div className="text-center py-4">
              <p className="text-gray-400 font-bold text-xs uppercase">
                Profit
              </p>
              <p className="text-3xl font-black text-emerald-500">+₹10.00</p>
              <p className="text-emerald-500 font-bold text-sm">+10.00%</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-gray-500 mt-2">
              <p>
                Open Price: <span className="text-black">₹100</span>
              </p>
              <p className="text-right">
                Closed Price: <span className="text-black">₹110</span>
              </p>
              <p>
                Commission: <span className="text-black">-₹0.10</span>
              </p>
              <button className="bg-[#3B9DF2] text-white px-3 py-1 rounded-lg ml-auto text-[10px]">
                Go to Stock
              </button>
            </div>
          </div>
        ))}
      </div>

      <CloseTradeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => setIsModalOpen(false)}
        tradeInfo={{ symbol: selectedSymbols[0], profit: "₹10.00" }}
      />
    </div>
  );
};

export default PortfolioView;
