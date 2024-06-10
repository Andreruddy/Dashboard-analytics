import React, { useState, useEffect } from "react";
import axios from "axios";
import "chart.js/auto";
import SalesTable from "./components/SalesTable";
import { BarChart, LineChart } from "./components/SalesChart";
import SearchBar from "./components/SearchBar";
import DateFilter from "./components/DateFilter";
import Statistics from "./components/Statistics";
const App = () => {
  const [product, setProduct] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalSales, setTotalSales] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [bestSellingProduct, setBestSellingProduct] = useState("");

  const fetchSales = async () => {
    setLoading(true);
    let query = `http://localhost:3000/sales?`;

    if (startDate) {
      query += `start_date=${startDate}&`;
    }
    if (endDate) {
      query += `end_date=${endDate}&`;
    }
    if (product) {
      query += `product=${product}`;
    }
    try {
      const response = await axios.get(query);
      const { data } = response;
      const totalSalesCount = data.length;
      const totalRevenueAmount = data.reduce(
        (acc, sale) => acc + sale.sales,
        0
      );
      const productSales = data.reduce((acc, sale) => {
        acc[sale.product] = acc[sale.product] ? acc[sale.product] + 1 : 1;
        return acc;
      }, {});

      const bestProduct = Object.keys(productSales).reduce((a, b) =>
        productSales[a] > productSales[b] ? a : b
      );
      setSales(data);
      setTotalSales(totalSalesCount);
      setTotalRevenue(totalRevenueAmount);
      setBestSellingProduct(bestProduct);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSales();
  }, [product, startDate, endDate]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-end mb-4 gap-3">
          <SearchBar
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <DateFilter
            startDate={startDate}
            onChangeStartDate={(e) => setStartDate(e.target.value)}
            endDate={endDate}
            onChangeEndDate={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="bg-gray-800 p-6 gap-3 rounded-lg mb-4">
          <h2 className="text-center">
            Grafik penjualan dan statistik penjualan
          </h2>
          <div className="grid grid-cols-q lg:grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded">
              <LineChart data={sales} />
            </div>
            <div className="bg-white p-4 rounded">
              <BarChart data={sales} />
            </div>
            <div className="bg-white p-4 rounded">
              <Statistics
                totalSales={totalSales}
                totalRevenue={totalRevenue}
                bestSellingProduct={bestSellingProduct}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          {loading ? <p>Loading...</p> : <SalesTable data={sales} />}
        </div>
      </div>
    </div>
  );
};

export default App;
