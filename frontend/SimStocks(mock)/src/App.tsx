import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";
import Layout from "./components/Layout";

const Dashboard = () => (
  <div>
    <h1 className="text-3xl font-bold mb-6">Market Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
        <p className="text-slate-400">Total Balance</p>
        <p className="text-2xl font-bold text-emerald-400">$10,000.00</p>
      </div>
      {/* Add more cards here later */}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* All routes inside here will have the Sidebar */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
