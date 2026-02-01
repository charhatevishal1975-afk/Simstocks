import React, { useState } from "react";
import HomeView from "../HomeView";
import PortfolioView from "../Portfolio/PortfolioView";
import TradingView from "../Trading/TradingView";
import ProfileView from "../ProfileView";


const DashboardPage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<
    "home" | "portfolio" | "trading" | "profile"
  >("home");

  const [selectedStock, setSelectedStock] = useState<string>("BTC");

  // Add a function to handle the cross-tab redirection
  const handleStockSelect = (symbol: string) => {
    setSelectedStock(symbol);
    setCurrentTab("trading"); // Redirects to Trading tab
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans pb-10">
      <header className="bg-[#3B9DF2] p-8 flex items-center text-white shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16">
            <img
              src="/Logo 1.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-6xl px-6 font-bold tracking-tight">SimStocks</h1>
        </div>
      </header>

      <nav className="flex items-center justify-between p-6 max-w-[1400px] mx-auto">
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentTab("home")}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition duration-300 ${currentTab === "home" ? "bg-[#3B9DF2] text-white shadow-lg" : "bg-white text-black border-2 border-black"}`}
          >
            🏠︎ Home
          </button>
          <button
            onClick={() => setCurrentTab("portfolio")}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition duration-300 ${currentTab === "portfolio" ? "bg-[#3B9DF2] text-white shadow-lg" : "bg-white text-black border-2 border-black"}`}
          >
            💼︎ Portfolio
          </button>
          <button
            onClick={() => setCurrentTab("trading")}
            className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition duration-300 ${currentTab === "trading" ? "bg-[#3B9DF2] text-white shadow-lg" : "bg-white text-black border-2 border-black"}`}
          >
            ⇅ Trading
          </button>
        </div>

        <button
          onClick={() => setCurrentTab("profile")}
          className={`flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition duration-300 ${currentTab === "profile" ? "bg-[#3B9DF2] text-white shadow-lg" : "bg-white text-black border-2 border-black"}`}
        >
          <span className="text-xl">👤</span> Profile
        </button>
      </nav>

      <main className="px-6 max-w-[1400px] mx-auto">
        {currentTab === "home" && <HomeView onStockSelect={handleStockSelect}/>}
        {currentTab === "portfolio" && <PortfolioView />}
        {currentTab === "trading" && <TradingView symbol={selectedStock}/>}
        {currentTab === "profile" && <ProfileView />}
      </main>
    </div>
  );
};

export default DashboardPage;
