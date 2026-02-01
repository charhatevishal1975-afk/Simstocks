// Mock data for stock coordinates
export const STOCK_GRAPHS: Record<string, any[]> = {
  BTC: [
    {
      time: "10:00",
      price: 1000,
      open: 980,
      close: 1010,
      high: 1020,
      low: 970,
      volume: 400,
    },
    {
      time: "11:00",
      price: 1050,
      open: 1010,
      close: 990,
      high: 1015,
      low: 985,
      volume: 600,
    },
    // ... add more points
  ],
  ETH: [
    {
      time: "10:00",
      price: 2500,
      open: 2450,
      close: 2550,
      high: 2600,
      low: 2400,
      volume: 300,
    },
    {
      time: "11:00",
      price: 2520,
      open: 2550,
      close: 2510,
      high: 2580,
      low: 2490,
      volume: 450,
    },
  ],
  // Add SOL, AAPL, etc.
};

export const MOCK_TRADES = [
  {
    id: 1,
    symbol: "BTC",
    name: "BTC/USD",
    price: 1000,
    change: "+10.11",
    type: "open",
    profitRank: 1,
  },
  {
    id: 2,
    symbol: "ETH",
    name: "ETH/USD",
    price: 2500,
    change: "+5.24",
    type: "open",
    profitRank: 2,
  },
  {
    id: 3,
    symbol: "SOL",
    name: "SOL/USD",
    price: 120,
    change: "-2.10",
    type: "closed",
    profitRank: 3,
  },
  {
    id: 4,
    symbol: "SOL",
    name: "SOL/USD",
    price: 120,
    change: "-2.10",
    type: "closed",
    profitRank: 4,
  },
];
