"use client";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const MetricCard = ({ title, value, change, chartData, chartType }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      grid: {
        top: "15%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        show: false,
        data: chartData.map((d) => d.date),
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: chartData.map((d) => d.value),
          type: chartType || "line",
          smooth: true,
          areaStyle: {
            opacity: 0.2,
          },
          itemStyle: {
            color: change >= 0 ? "#4CAF50" : "#f44336",
          },
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    };

    chart.setOption(option);

    return () => chart.dispose();
  }, [chartData, chartType, change]);

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <div className="flex justify-between mb-4">
        <div className="text-gray-600">{title}</div>
        <div
          className={`text-sm ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {change > 0 ? "+" : ""}
          {change}%
        </div>
      </div>
      <div className="text-2xl font-bold mb-4">{value}</div>
      <div ref={chartRef} style={{ height: "100px" }} />
    </div>
  );
};

export default MetricCard;
