import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  tradeInfo: { symbol: string; profit: string };
}

const CloseTradeModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  tradeInfo,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-[32px] p-8 w-full max-w-md border-[1.5px] border-black shadow-2xl scale-in-center">
        <h2 className="text-xl font-bold mb-4">The trade will close at</h2>

        <div className="bg-gray-50 p-6 rounded-2xl mb-8">
          <p className="text-[#3B9DF2] font-black text-3xl">
            +{tradeInfo.profit}
          </p>
          <p className="text-gray-500 font-bold">
            which is for {tradeInfo.symbol}
          </p>
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
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseTradeModal;
