import React from "react";
const Statistics = ({ totalSales, totalRevenue, bestSellingProduct }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sales Statistics</h1>
      <div className="flex-row text-gray-800 font-bold">
        <h2>Total Penjualan : {totalSales}</h2>
        <h2>Total Pendapatan : Rp. {totalRevenue}</h2>
        <h2 className="capitalize"> Product Terlaris : {bestSellingProduct}</h2>
      </div>
    </div>
  );
};

export default Statistics;
