import React from "react";

const SalesTable = ({ data }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead className="bg-slate-200">
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
            ID
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
            Product
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
            Date
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
            Revenue
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-700 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
            Sales
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-5 py-5 border-b border-gray-200 bg-gray-800 text-sm">
              {item.id}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-gray-800 text-sm capitalize">
              {item.product}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-gray-800 text-sm">
              {item.date}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-gray-800 text-sm">
              {item.revenue}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-gray-800 text-sm">
              {item.sales}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
