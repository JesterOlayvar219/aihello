"use client";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from "react";
import { ClientSideRowModelModule, ValidationModule } from "ag-grid-community";
import Link from "next/link";
import Image from "next/image";

export default function DataGrid() {
  const formatCurrency = (value) => {
    if (value === 0) return "$0";
    return value ? `$${value.toFixed(2)}` : "$0";
  };

  const formatPercentage = (value) => {
    if (value === 0) return "0%";
    return value ? `${value.toFixed(2)}%` : "0%";
  };

  const [columnDefs] = useState([
    {
      headerName: "",
      field: "selection",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
      headerComponentFramework: (params) => (
        <div className="flex items-center justify-center">
          <Image
            src="/images/dataGrid/checkbox.png"
            alt="checkbox"
            width={20}
            height={20}
          />
        </div>
      ),
    },
    {
      headerName: "Marketplace",
      field: "marketplace",
      sortable: true,
      filter: true,

      cellRenderer: (params) => {
        return (
          <div className="w-full h-full flex items-center">
            <span className="text-light_blue_medium">{params.value}</span>
          </div>
        );
      },
    },
    {
      headerName: "Short Name",
      field: "shortName",
      sortable: true,
      filter: true,
      cellRenderer: (params) => {
        return (
          <div className="w-full h-full flex items-center space-x-2">
            <Image
              src={"/images/dataGrid/pen.png"}
              alt="pen"
              width={12.7}
              height={12.7}
            />
            <span className="text-light_gray_medium">{params.value}</span>
          </div>
        );
      },
    },
    {
      headerName: "AutoPilot",
      field: "autoPilot",
      sortable: true,
      filter: true,
      cellRenderer: (params) => {
        return (
          <div className="w-full h-full flex items-center">
            <span className="text-light_gray_medium">{params.value}</span>
          </div>
        );
      },
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
          <div className="w-full h-full flex items-center space-x-2">
            <div className="w-4 h-4 flex items-center justify-center">
              {(change > 0 || change !== 0) && (
                <Image
                  src={
                    change > 0
                      ? "/images/dataGrid/arrow-up.png"
                      : "/images/dataGrid/arrow-down.png"
                  }
                  alt={change > 0 ? "arrowup" : "arrowdown"}
                  width={14}
                  height={14}
                />
              )}
            </div>
            <span className="text-light_gray_medium">
              {formatCurrency(value)}
            </span>
            {change !== 0 && (
              <span className="text-light_gray_medium text-[9px]">
                {change > 0 ? "+" : ""}
                {change}%
              </span>
            )}
          </div>
        );
      },
    },
    {
      headerName: "Sales",
      field: "sales",
      sortable: "true",
      filter: "true",
      cellRenderer: (params) => {
        const value = params.value;
        const change = params.data.salesChange;
        return (
          <div className="w-full h-full flex items-center space-x-2">
            <div className="w-4 h-4 flex items-center justify-center">
              {(change > 0 || change !== 0) && (
                <Image
                  src={
                    change > 0
                      ? "/images/dataGrid/arrow-up.png"
                      : "/images/dataGrid/arrow-down.png"
                  }
                  alt={change > 0 ? "arrowup" : "arrowdown"}
                  width={14}
                  height={14}
                />
              )}
            </div>
            <span className="text-light_gray_medium">
              {formatCurrency(value)}
            </span>
            {change !== 0 && (
              <span className="text-light_gray_medium text-[9px]">
                {change > 0 ? "+" : ""}
                {change}%
              </span>
            )}
          </div>
        );
      },
    },
    {
      headerName: "ACoS",
      field: "acos",
      sortable: "true",
      filter: "true",
      cellRenderer: (params) => {
        const value = params.value;
        const change = params.data.acosChange;
        return (
          <div className="w-full h-full flex items-center space-x-2">
            <div className="w-4 h-4 flex items-center justify-center">
              {(change > 0 || change !== 0) && (
                <Image
                  src={
                    change > 0
                      ? "/images/dataGrid/arrow-up.png"
                      : "/images/dataGrid/arrow-down.png"
                  }
                  alt={change > 0 ? "arrowup" : "arrowdown"}
                  width={14}
                  height={14}
                />
              )}
            </div>
            <span className="text-light_gray_medium">
              {formatPercentage(value)}
            </span>
            {change !== 0 && (
              <span className="text-light_gray_medium text-[9px]">
                {change > 0 ? "+" : ""}
                {change}%
              </span>
            )}
          </div>
        );
      },
    },
    {
      headerName: "Units",
      field: "units",
      sortable: "true",
      filter: "true",
      cellRenderer: (params) => {
        const value = params.value;
        const change = params.data.unitsChange;
        console.log("unitsChange:", change);
        return (
          <div className="w-full h-full flex items-center space-x-2">
            <div className="w-4 h-4 flex items-center justify-center">
              {(change > 0 || change !== 0) && (
                <Image
                  src={
                    change > 0
                      ? "/images/dataGrid/arrow-up.png"
                      : "/images/dataGrid/arrow-down.png"
                  }
                  alt={change > 0 ? "arrowup" : "arrowdown"}
                  width={14}
                  height={14}
                />
              )}
            </div>
            <span className="text-light_gray_medium">{value}</span>
            {change !== 0 && (
              <span className="text-light_gray_medium text-[9px]">
                {change > 0 ? "+" : ""}
                {change}%
              </span>
            )}
          </div>
        );
      },
    },
    {
      headerName: "Clicks",
      field: "clicks",
      sortable: "true",
      filter: "true",
      cellRenderer: (params) => {
        const value = params.value;
        const change = params.data.clicksChange;
        return (
          <div className="w-full h-full flex items-center space-x-2">
            <div className="w-4 h-4 flex items-center justify-center">
              {(change > 0 || change !== 0) && (
                <Image
                  src={
                    change > 0
                      ? "/images/dataGrid/arrow-up.png"
                      : "/images/dataGrid/arrow-down.png"
                  }
                  alt={change > 0 ? "arrowup" : "arrowdown"}
                  width={14}
                  height={14}
                />
              )}
            </div>
            <span className="text-light_gray_medium">{value}</span>
            {change !== 0 && (
              <span className="text-light_gray_medium text-[9px]">
                {change > 0 ? "+" : ""}
                {change}%
              </span>
            )}
          </div>
        );
      },
    },
  ]);

  const [rowData] = useState([
    {
      marketplace: "USA",
      shortName: "NaturalThings Main",
      autoPilot: 369,
      spend: 1087.54,
      spendChange: 20.34,
      sales: 1087.54,
      salesChange: 20.34,
      acos: 70.32,
      acosChange: 20.34,
      units: 94,
      unitsChange: -20.34,
      clicks: 122,
      clicksChange: 29.34,
    },
    {
      marketplace: "Canada",
      shortName: "NaturalThings",
      autoPilot: 74,
      spend: 1087.54,
      spendChange: 20.34,
      sales: 1087.54,
      salesChange: -20.34,
      acos: 10.32,
      acosChange: -29.34,
      units: 65,
      unitsChange: 29.34,
      clicks: 122,
      clicksChange: -29.34,
    },
    {
      marketplace: "Germany",
      shortName: "NaturalThings Europe",
      autoPilot: 0,
      spend: 1087.54,
      spendChange: 20.34,
      sales: 0,
      salesChange: 0,
      acos: 70.32,
      acosChange: -20.34,
      units: 75,
      unitsChange: 55.34,
      clicks: 122,
      clicksChange: 29.34,
    },
    {
      marketplace: "India",
      shortName: "Natural Things",
      autoPilot: 3,
      spend: 0,
      spendChange: 0,
      sales: 0,
      salesChange: 0,
      acos: 0,
      acosChange: 0,
      units: 0,
      unitsChange: 0,
      clicks: 0,
      clicksChange: 0,
    },
    {
      marketplace: "Netherlands",
      shortName: "NaturalThings Europe",
      autoPilot: 0,
      spend: 0,
      spendChange: 0,
      sales: 0,
      salesChange: 0,
      acos: 0,
      acosChange: 0,
      units: 0,
      unitsChange: 0,
      clicks: 0,
      clicksChange: 0,
    },
    {
      marketplace: "Germany",
      shortName: "Natural Things",
      autoPilot: 0,
      spend: 1087.54,
      spendChange: 20.34,
      sales: 0,
      salesChange: 0,
      acos: 0,
      acosChange: 0,
      units: 0,
      unitsChange: 0,
      clicks: 0,
      clicksChange: 0,
    },
    {
      marketplace: "Italy",
      shortName: "NaturalThings Main",
      autoPilot: 1,
      spend: 0,
      spendChange: 20.34,
      sales: 0,
      salesChange: 0,
      acos: 0,
      acosChange: 0,
      units: 0,
      unitsChange: 0,
      clicks: 0,
      clicksChange: 0,
    },
  ]);

  return (
    <div className="bg-white border rounded-lg space-y-[12.85px]">
      <div className="text-sm text-center font-bold border-b-2 border-header_filter_border">
        <ul className="flex flex-wrap -mb-px text-profile_tab space-x-[25.39px]">
          <li className="me-2">
            <Link
              href="#"
              className="inline-block p-[20.32px] text-light_blue_medium border-b-2 border-light_blue_medium rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              Profile
            </Link>
          </li>
          <li className="me-2 relative">
            <Link
              href="#"
              className="inline-block p-[20.32px] text-profile_tab_inactive border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Campaigns
            </Link>
            <span className="bg-header_button px-[7.11px] py-[2.03px] text-profile_tab_index rounded-md absolute -right-4 top-5">
              120
            </span>
          </li>
          <li className="me-2 relative">
            <Link
              href="#"
              className="inline-block p-[20.32px] text-profile_tab_inactive border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Ad Groups
            </Link>
            <span className="bg-header_button px-[7.11px] py-[2.03px] text-profile_tab_index rounded-md absolute -right-4 top-5">
              12
            </span>
          </li>
          <li className="me-2 relative">
            <a
              href="#"
              className="inline-block p-[20.32px] text-profile_tab_inactive border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Targeting
            </a>
            <span className="bg-header_button px-[7.11px] py-[2.03px] text-profile_tab_index rounded-md absolute -right-4 top-5">
              5
            </span>
          </li>
        </ul>
      </div>
      <div className="mx-[16px] border rounded-md">
        <div className="flex flex-row h-[104.03px] pt-[22.8px] pl-[27.36px] pr-6 items-center justify-between">
          <div className="flex flex-col">
            <div className="flex flex-row items-center space-x-[18.24px]">
              <h1 className="text-dark_blue_medium text-[20.52px]">Profile</h1>
              <span className="text-light_blue_medium text-[13.68px]">
                Label text or value
              </span>
            </div>
            <div>
              <span className="text-[15.96px] text-light_gray_medium">
                A descriptive body text comes here
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <div className="flex flex-row items-center border h-[47.18px] rounded-md">
              <button className="flex flex-row items-center space-x-2 px-4">
                <Image
                  src="/images/dataGrid/table.png"
                  alt="Table"
                  width={24.38}
                  height={24.38}
                />
                <span className="text-black text-[15px]">
                  27 Columns Selected
                </span>
                <Image
                  src="/images/dataGrid/angle-down-0.png"
                  alt="arrowDown"
                  width={24.38}
                  height={24.38}
                />
              </button>
              <button className="flex flex-row items-center space-x-2 px-4">
                <Image
                  src="/images/dataGrid/user.png"
                  alt="user"
                  width={21}
                  height={21}
                />
                <span className="text-black text-[15px]">Active</span>
                <Image
                  src="/images/dataGrid/angle-down-0.png"
                  alt="arrowDown"
                  width={24.38}
                  height={24.38}
                />
              </button>
              <button className="flex flex-row items-center space-x-2 px-3">
                <Image
                  src="/images/dataGrid/bars.png"
                  alt="bar"
                  width={24.38}
                  height={24.38}
                />
                <span className="text-black text-[15px]">
                  Select a Portfolio
                </span>
                <Image
                  src="/images/dataGrid/angle-down-0.png"
                  alt="arrowDown"
                  width={24.38}
                  height={24.38}
                />
              </button>
            </div>
            <button className="bg-light_blue_medium text-white text-[15px] h-[47.18px] w-[124.99px] border rounded-md">
              Actions
            </button>
          </div>
        </div>
        <div className="ag-theme-alpine w-full h-[414px]">
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            pagination={true}
            paginationPageSize={7}
            modules={[ClientSideRowModelModule, ValidationModule]}
            getRowHeight={() => 50.36}
            headerHeight={50.17}
            defaultColDef={{
              flex: 1,
              minWidth: 100,
              resizable: true,
            }}
            // Optional: Customize pagination controls
            paginationAutoPageSize={false} // Disable auto page size
            suppressPaginationPanel={false} // Ensure pagination panel is shown
          />
        </div>
      </div>
    </div>
  );
}
