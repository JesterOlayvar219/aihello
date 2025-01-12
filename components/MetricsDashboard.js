"use client";

import MetricCard from "./MetricCard";

const MetricsDashboard = () => {
  const metrics = [
    {
      title: "SPEND",
      value: "$1,087.54",
      change: -4.05,
      chartData: [
        { date: "2024-01", value: 1000 },
        { date: "2024-02", value: 1200 },
        // Add more data points
      ],
    },
    // Add other metrics
  ];

  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};

export default MetricsDashboard;
