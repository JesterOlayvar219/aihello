'use client';

import Sidebar from "../components/sidebar";
import Header from "../components/header";
import DataGrid from "../components/data-grid";
import MetricsDashboard from "../components/MetricsDashboard";  
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-profile">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-[16px]">
          <div className="flex flex-col space-y-[19px]">
            <div className="flex items-center space-x-[25px]">
              <Link href="/" className="text-data_grid_link">Campaigns</Link>
              <Image src="/images/dataGrid/arrow-right.png" alt="avatar" width={12} height={12} />
              <span className="text-black text-data_grid_link">Campaigns</span>
            </div>
            <DataGrid />
            <MetricsDashboard />
          </div>
        </main>
      </div>
    </div>
  );
}
