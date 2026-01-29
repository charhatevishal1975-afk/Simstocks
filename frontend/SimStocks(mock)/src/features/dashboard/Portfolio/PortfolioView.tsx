import React, { useState } from "react";
import TradeSidebar from "./TradeSidebar";
import TradeChart from "./TradeChart";
import TradeManagement from "./TradeManagement";
import CloseTradeModal from "./CloseTradeModal";

const PortfolioView: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in duration-700">
      <div className="lg:col-span-1">
        <TradeSidebar />
      </div>

      <div className="lg:col-span-2 flex flex-col gap-4">
        <TradeChart />
        <TradeManagement onOpenModal={() => setIsModalOpen(true)} />
        <p className="text-center font-bold text-gray-800 mt-2">
          Pick a trade to view its details.
        </p>
      </div>

      <CloseTradeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          console.log("Trade Closed");
          setIsModalOpen(false);
        }}
        tradeInfo={{ symbol: "BTC", profit: "₹1000" }}
      />
    </div>
  );
};

export default PortfolioView;
