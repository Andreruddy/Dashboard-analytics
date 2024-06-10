import React from "react";
import { Line, Bar } from "react-chartjs-2";
import "chart.js/auto";

export const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((sale) => sale.date),
    datasets: [
      {
        label: "Daily Sales",
        data: data.map((sale) => sale.sales),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };
  return <Line data={chartData} />;
};

export const BarChart = ({ data }) => {
  const productSales = data.reduce((acc, sale) => {
    acc[sale.product] = acc[sale.product] ? acc[sale.product] : sale.revenue;
    return acc;
  }, {});

  const grafikChart = {
    labels: Object.keys(productSales),
    datasets: [
      {
        label: "Sales Amount",
        data: Object.values(productSales),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  return <Bar data={grafikChart} />;
};
