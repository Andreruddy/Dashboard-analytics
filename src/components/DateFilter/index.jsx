import React, { useState } from "react";

const DateFilter = (props) => {
  const { startDate, endDate, onChangeStartDate, onChangeEndDate } = props;
  return (
    <>
      <input
        type="date"
        value={startDate}
        onChange={onChangeStartDate}
        placeholder="Filter by product..."
        className="bg-gray-800 p-2 rounded"
      />
      <input
        type="date"
        value={endDate}
        onChange={onChangeEndDate}
        placeholder="Filter by product..."
        className="bg-gray-800 p-2 rounded"
      />
    </>
  );
};

export default DateFilter;
