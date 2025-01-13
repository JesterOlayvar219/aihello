import Image from "next/image";

import { formatCurrency, formatPercentage } from "./utils/formatter";

export const columnDefs = [
  // {
  //   headerName: "Select",
  //   field: "selection",
  //   checkboxSelection: true,
  //   headerCheckboxSelection: true,
  //   width: 50,
  // },
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
];
