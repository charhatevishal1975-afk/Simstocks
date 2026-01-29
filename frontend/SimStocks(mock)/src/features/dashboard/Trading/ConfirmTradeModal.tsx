import React from "react";

interface ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  details: {
    symbol: string;
    amount: number;
    leverage: number;
    side: "buy" | "sell";
  };
}

const ConfirmTradeModal: React.FC<ConfirmProps> = ({
  isOpen,
  onClose,
  onConfirm,
  details,
}) => {
  if (!isOpen) return null;

  const totalPosition = details.amount * details.leverage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-[32px] p-8 w-full max-w-md border-[1.5px] border-black shadow-2xl">
        <h2 className="text-xl font-bold mb-6">Confirm your trade</h2>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl">
            <span className="font-bold text-gray-500">Total Position</span>
            <span className="text-2xl font-black text-[#3B9DF2]">
              ₹{totalPosition.toLocaleString()}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm font-bold">
            <div className="p-3 bg-gray-50 rounded-xl">
              <p className="text-gray-400">Order Type</p>
              <p
                className={
                  details.side === "buy" ? "text-emerald-500" : "text-red-500"
                }
              >
                {details.side.toUpperCase()}
              </p>
            </div>
            <div className="p-3 bg-gray-50 rounded-xl">
              <p className="text-gray-400">Leverage</p>
              <p>X{details.leverage}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-full border-2 border-black font-bold hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-full bg-[#3B9DF2] text-white font-bold hover:bg-blue-600 shadow-lg transition"
          >
            Open Trade
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTradeModal;
