import React, { useState } from "react";

const OrderPanel: React.FC<{ onOpenTrade: () => void }> = ({ onOpenTrade }) => {
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [amount, setAmount] = useState(1000);
  const [leverage, setLeverage] = useState(10);

  const presets = [1000, 5000, 10000, 50000];
  const leverageOptions = [1, 5, 10, 50];

  return (
    <div
      className={`border-2 rounded-[24px] p-6 transition-colors duration-300 ${side === "buy" ? "border-emerald-500" : "border-red-500"}`}
    >
      {/* Side Toggle */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSide("sell")}
          className={`flex-1 py-3 rounded-xl font-bold border-2 transition ${side === "sell" ? "bg-red-500 text-white border-red-500" : "bg-white text-red-500 border-red-500"}`}
        >
          ⬇ Sell
        </button>
        <button
          onClick={() => setSide("buy")}
          className={`flex-1 py-3 rounded-xl font-bold border-2 transition ${side === "buy" ? "bg-emerald-500 text-white border-emerald-500" : "bg-white text-emerald-500 border-emerald-500"}`}
        >
          ⬆ Buy
        </button>
      </div>

      {/* Amount and Leverage */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p}
              onClick={() => setAmount(p)}
              className={`px-4 py-2 rounded-lg font-bold text-sm border-2 ${amount === p ? "bg-[#3B9DF2] text-white border-[#3B9DF2]" : "bg-gray-50 border-gray-200"}`}
            >
              ₹{p.toLocaleString()}
            </button>
          ))}
          <input
            type="number"
            placeholder="Custom"
            className="flex-1 min-w-[100px] border-2 border-gray-200 rounded-lg px-3 outline-none focus:border-[#3B9DF2]"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold text-gray-400 uppercase">Leverage</p>
          <div className="flex gap-2">
            {leverageOptions.map((l) => (
              <button
                key={l}
                onClick={() => setLeverage(l)}
                className={`flex-1 py-2 rounded-lg font-bold ${leverage === l ? "bg-[#3B9DF2] text-white" : "bg-gray-100 text-gray-500"}`}
              >
                X{l}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-xs font-bold text-gray-500">
            Effective Position:{" "}
            <span className="text-black text-sm">
              ₹{(amount * leverage).toLocaleString()}
            </span>
          </div>
          <button
            onClick={onOpenTrade}
            className={`px-10 py-3 rounded-full text-white font-bold shadow-lg transition ${side === "buy" ? "bg-emerald-500 hover:bg-emerald-600" : "bg-red-500 hover:bg-red-600"}`}
          >
            Open Trade
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
