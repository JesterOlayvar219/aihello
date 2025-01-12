'use client';

import Sidebar from "../components/sidebar";
import Header from "../components/header";
import DataGrid from "../components/data-grid";
import MetricsDashboard from "../components/MetricsDashboard";  

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <DataGrid />
          <MetricsDashboard />
        </main>
      </div>
    </div>
  );
}
