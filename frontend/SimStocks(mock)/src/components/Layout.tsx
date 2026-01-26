import React from "react";
import { useNavigate, Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-emerald-400">SimStocks</h2>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <Link
            to="/dashboard"
            className="block p-3 rounded-lg hover:bg-slate-700 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/market"
            className="block p-3 rounded-lg hover:bg-slate-700 transition"
          >
            Market
          </Link>
          <Link
            to="/portfolio"
            className="block p-3 rounded-lg hover:bg-slate-700 transition"
          >
            Portfolio
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button
            onClick={() => navigate("/login")}
            className="w-full text-left p-3 text-slate-400 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
};

export default Layout;
