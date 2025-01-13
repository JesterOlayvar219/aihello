"use client";
import { useEffect, useRef } from "react";
import EChartsReact from "echarts-for-react";
import ReactECharts from "echarts-for-react";
import Image from "next/image";

const MetricCard = ({
  title,
  value,
  change,
  chartData,
  chartType,
  iconcolor,
  iconSrc,
  textcolor,
  linecolor,
  gradientcolor,
  backgroundcolor,
}) => {
  const chartRef = useRef(null);

  const option = {
    grid: {
      top: "15%",
      right: "4%",
      left: "3%",
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
        // itemStyle: {
        //   color: change >= 0 ? linecolor : gradientcolor,
        // },
        itemStyle: {
          color: linecolor,
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };

  return (
    <div
      className={`${backgroundcolor} rounded-lg border border-light_gray_medium_2 p-[6.99px] shadow w-[188px] h-[114px]`}
    >
      <div className="flex flex-row space-x-2">
        <div
          className={`rounded-full w-6 h-6 ${iconcolor} flex items-center justify-center`}
        >
          <Image src={iconSrc} alt="spend" width={12} height={12} />
        </div>
        <div className="flex flex-col space-y-1">
          <div
            className={`${textcolor || "text-black"} text-[15.64px] font-bold`}
          >
            {title}
          </div>
          <div className="flex flex-row items-center pr-3">
            <div className={`${textcolor || "text-black"} text-sm  mr-7`}>
              {value}
            </div>
            <div
              className={`text-xs ${
                change >= 0
                  ? textcolor || "text-green-500"
                  : textcolor || "text-red-500"
              }`}
            >
              {change > 0 ? "+" : ""}
              {change}%
            </div>
            <Image
              src={`/images/metricscard/${
                change >= 0 ? (textcolor ? "upW" : "up") : "down"
              }.png`}
              alt="arrow"
              width={11.47}
              height={11.47}
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <ReactECharts
          ref={chartRef}
          option={option}
          style={{ height: "68px", width: "228px" }}
          className="absolute -left-[45px]"
        />
      </div>
    </div>
  );
};

export default MetricCard;
