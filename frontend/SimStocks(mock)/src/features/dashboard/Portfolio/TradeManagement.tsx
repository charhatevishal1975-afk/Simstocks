import React, { useState } from "react";

interface TradeManagementProps {
  onOpenModal: () => void;
}

const TradeManagement: React.FC<TradeManagementProps> = ({ onOpenModal }) => {
  const [mode, setMode] = useState<"stops" | "close">("close");

  // State for the sliders
  const [stopLoss, setStopLoss] = useState(-10);
  const [takeProfit, setTakeProfit] = useState(20);

  return (
    <div className="mt-6 space-y-6">
      {/* Toggle Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setMode("stops")}
          className={`flex-1 py-3 rounded-xl font-bold border-2 transition ${
            mode === "stops"
              ? "bg-[#3B9DF2] text-white border-[#3B9DF2]"
              : "bg-white text-black border-black"
          }`}
        >
          ⓘ Stops
        </button>
        <button
          onClick={() => setMode("close")}
          className={`flex-1 py-3 rounded-xl font-bold border-2 transition ${
            mode === "close"
              ? "bg-[#3B9DF2] text-white border-[#3B9DF2]"
              : "bg-white text-black border-black"
          }`}
        >
          ☑ Close
        </button>
      </div>

      {/* Management Panel */}
      <div className="border-2 border-[#3B9DF2] rounded-[24px] p-8 min-h-[180px] relative overflow-hidden bg-white">
        {mode === "close" ? (
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="flex items-center gap-3">
              <button className=" text-white w-15 h-15 rounded-full flex items-center justify-center font-bold">
                <img
                  src="/bitcoin.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </button>
            </div>

            <div className="flex flex-col justify-end items-end space-y-4">
              <button
                onClick={onOpenModal}
                className="bg-[#3B9DF2] text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-blue-600 transition-all active:scale-95"
              >
                Close Trade
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-300">
            <h4 className="text-lg font-bold text-gray-800">Add Stops</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Stop Loss Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-500 uppercase">
                    Stop Loss
                  </label>
                  <span className="text-red-500 font-black text-lg">
                    {stopLoss}%
                  </span>
                </div>
                <input
                  type="range"
                  min="-50"
                  max="0"
                  step="1"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>

              {/* Take Profit Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-500 uppercase">
                    Take Profit
                  </label>
                  <span className="text-emerald-500 font-black text-lg">
                    +{takeProfit}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={takeProfit}
                  onChange={(e) => setTakeProfit(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button className="bg-emerald-500 text-white px-10 py-3 rounded-full font-bold shadow-md hover:bg-emerald-600 transition active:scale-95">
                Save Stops
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradeManagement;
