import { STOCK_GRAPHS } from './mockData';

export const apiService = {
  // Use a synchronous helper for immediate mock data access
  getStockData: (symbol: string) => {
    return STOCK_GRAPHS[symbol] || STOCK_GRAPHS['BTC'];
  },

  // Keep your existing async placeholder for the future Django API
  getStockGraph: async (symbol: string) => {
    return STOCK_GRAPHS[symbol] || STOCK_GRAPHS['BTC'];
  },

  getUserProfile: async () => { /* Future fetch('/api/profile') */ },
  getTrendingStocks: async () => { /* Future fetch('/api/trending') */ },
};