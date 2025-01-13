import React, { useCallback, useMemo } from "react";

import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ClientSideRowModelModule,
  ModuleRegistry,
  ValidationModule,
  GridStateModule,
  NumberFilterModule,
  TextFilterModule,
} from "ag-grid-community";

ModuleRegistry.registerModules([
  TextFilterModule,
  NumberFilterModule,
  GridStateModule,
  ClientSideRowModelModule,
  ValidationModule /* Development Only */,
]);
import { columnDefs } from "./columnDefs";
import { rowData } from "./rowData";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function GridComponent() {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);

  const rowSelection = useMemo(() => {
    return {
      mode: "multiRow",
    };
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      filter: true,
    };
  }, []);

  const initialState = useMemo(() => {
    return {
      filter: {
        filterModel: {
          country: {
            filterType: "text",
            type: "contains",
            filter: "us",
          },
        },
      },
    };
  }, []);

  const onGridReady = useCallback(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <div className="ag-theme-alpine w-full h-[414px]">
      <div style={containerStyle}>
        <div style={gridStyle}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            initialState={initialState}
            onGridReady={onGridReady}
            rowSelection={rowSelection}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 25, 50]}
            modules={[ClientSideRowModelModule, ValidationModule]}
            getRowHeight={() => 50.36}
            headerHeight={50.17}
          />
        </div>
      </div>
    </div>
  );
}
