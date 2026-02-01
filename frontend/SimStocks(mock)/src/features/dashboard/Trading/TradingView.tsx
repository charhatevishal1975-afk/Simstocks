import React, { useState } from "react";
import AssetSidebar from "./AssetSidebar";
import MarketChart from "./MarketChart";
import OrderPanel from "./OrderPanel";
import ConfirmTradeModal from "./ConfirmTradeModal";

interface TradingViewProps {
  symbol: string;
}

const TradingView: React.FC<TradingViewProps> = ({ symbol }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // In a real app, these would be updated by the OrderPanel
  const [tradeDetails] = useState({
    symbol: symbol,
    amount: 5000,
    leverage: 10,
    side: "buy" as const,
  });

  const handleExecuteTrade = () => {
    console.log("Trade executed and sent to Django API");
    setIsConfirmOpen(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in duration-700 max-w-[1400px] mx-auto pb-10">
      <div className="lg:col-span-1">
        <AssetSidebar />
      </div>

      <div className="lg:col-span-2 space-y-4">
        <MarketChart symbol={symbol} />
        <OrderPanel onOpenTrade={() => setIsConfirmOpen(true)} />
      </div>

      <ConfirmTradeModal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={handleExecuteTrade}
        details={tradeDetails}
      />
    </div>
  );
};

export default TradingView;
