"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";

export default function DataGrid() {
  const [columnDefs] = useState([
    {
      headerName: "",
      field: "selection",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
    },
    {
      headerName: "Marketplace",
      field: "marketplace",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Short Name",
      field: "shortName",
      sortable: true,
      filter: true,
    },
    {
      headerName: "AutoPilot",
      field: "autoPilot",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Spend",
      field: "spend",
      sortable: true,
      filter: true,
      cellRenderer: (params) => {
        const value = params.value;
        const change = params.data.spendChange;
        return (
          <div className="flex items-center">
            <span>${value}</span>
            <span
              className={`ml-2 ${
                change > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {change > 0 ? "+" : ""}
              {change}%
            </span>
          </div>
        );
      },
    },
    // Add other columns following similar pattern
  ]);

  const [rowData] = useState([
    {
      marketplace: "USA",
      shortName: "NaturalThings Main",
      autoPilot: 369,
      spend: 1087.54,
      spendChange: 20.34,
      // Add other fields
    },
    // Add other rows
  ]);

  return (
    <div className="ag-theme-alpine w-full h-[600px]">
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
}
