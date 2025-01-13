import React from "react";
import Image from "next/image";

// Custom header component for AG-Grid
export const CustomHeader = (props) => {
  const { displayName, column } = props;

  // Get sort state
  const sorted = column.isSorted();
  const sortDirection = column.isSortAsc() ? "asc" : "desc";

  // Handle sort clicks
  const onSortClicked = (e) => {
    e.preventDefault();
    props.setSort();
  };

  return (
    <div
      className="flex items-center justify-between px-[27.36px] py-[14.58px] h-full"
      onClick={onSortClicked}
    >
      <div className="flex items-center space-x-2">
        {/* Filter icon */}
        <Image
          src="/images/dataGrid/table.png"
          alt="Filter"
          width={14}
          height={14}
          className="cursor-pointer"
        />
        <span className="text-sm font-medium">{displayName}</span>
      </div>

      <div className="flex items-center">
        {/* Sort icon */}
        {sorted && (
          <Image
            src={
              sortDirection === "asc"
                ? "/images/dataGrid/angle-down-0.png"
                : "/images/dataGrid/angle-down-0.png"
            }
            alt={sortDirection === "asc" ? "Sort ascending" : "Sort descending"}
            width={14}
            height={14}
            className={`transform ${
              sortDirection === "desc" ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
    </div>
  );
};
