import React from "react";
import { MOCK_TRADES } from "../../constants/mockData";
const TRENDING_STOCKS = MOCK_TRADES;
// Define the interface for props
interface HomeViewProps {
  onStockSelect: (symbol: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onStockSelect }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in duration-500">
      <div className="lg:col-span-2 space-y-6">
        <div className="border-[1.5px] border-black rounded-[32px] p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-4">
            The market is open, let's trade!
          </h2>
          <p className="text-gray-500 font-medium">Account Value</p>
          <p className="text-6xl font-black my-2">₹10,00,000</p>
          <div className="flex justify-between mt-10">
            <div>
              <p className="text-[#3B9DF2] text-sm font-bold uppercase">
                Today's Change
              </p>
              <p className="text-2xl font-bold">+-₹1000</p>
            </div>
            <div className="text-right">
              <p className="text-[#3B9DF2] text-sm font-bold uppercase">
                Annual Return
              </p>
              <p className="text-2xl font-bold">+-0.00%</p>
            </div>
          </div>
        </div>
        <p className="text-xl text-gray-700 leading-relaxed font-medium px-2">
          Welcome to SimStocks. Trade real-time market trends with zero risk and
          master your strategy using virtual currency.
        </p>  
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-2">Trending Stocks</h3>
        <div className="space-y-3">
          {TRENDING_STOCKS.map((stock, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-2xl hover:bg-gray-100 transition cursor-pointer"
              onClick={() => onStockSelect(stock.symbol)}
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
                  ₿
                </div>
                <div>
                  <p className="font-bold text-lg leading-none">
                    {stock.symbol}
                  </p>
                  <p className="text-xs text-gray-500 font-bold">
                    {stock.name}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">{stock.price}</p>
                <p
                  className={`${stock.change.startsWith("+") ? "text-emerald-500" : "text-red-500"} font-bold text-xl`}
                >
                  {stock.change}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
