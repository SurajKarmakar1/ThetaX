"use client";

import React, { useState } from "react";

interface UptimeData {
  day: string;
  percentage: number;
  status: "up" | "down";
}

const UptimeStatus: React.FC = () => {
  // Mock data this would come from  backend/API
  const [uptimeData] = useState<UptimeData[]>([
    { day: "Day 1", percentage: 98.5, status: "up" },
    { day: "Day 2", percentage: 96.2, status: "up" },
    { day: "Day 3", percentage: 94.8, status: "up" },
    { day: "Day 4", percentage: 99.1, status: "up" },
    { day: "Day 5", percentage: 92.3, status: "down" },
    { day: "Day 6", percentage: 97.7, status: "up" },
    { day: "Day 7", percentage: 95.4, status: "up" },
    { day: "Day 8", percentage: 98.1, status: "up" },
    { day: "Day 9", percentage: 96.8, status: "up" },
    { day: "Day 10", percentage: 94.5, status: "up" },
    { day: "Day 11", percentage: 99.2, status: "up" },
    { day: "Day 12", percentage: 97.3, status: "up" },
    { day: "Day 13", percentage: 95.9, status: "up" },
    { day: "Day 14", percentage: 98.7, status: "up" },
    { day: "Day 15", percentage: 94.2, status: "up" },
    { day: "Day 16", percentage: 96.5, status: "up" },
    { day: "Day 17", percentage: 97.8, status: "up" },
    { day: "Day 18", percentage: 95.3, status: "up" },
    { day: "Day 19", percentage: 98.9, status: "up" },
    { day: "Day 20", percentage: 96.7, status: "up" },
    { day: "Day 21", percentage: 94.6, status: "up" },
    { day: "Day 22", percentage: 97.4, status: "up" },
    { day: "Day 23", percentage: 95.8, status: "up" },
    { day: "Day 24", percentage: 98.2, status: "up" },
    { day: "Day 25", percentage: 96.9, status: "up" },
    { day: "Day 26", percentage: 94.5, status: "up" },
    { day: "Day 27", percentage: 92.6, status: "up" },
    { day: "Day 28", percentage: 95.5, status: "up" },
    { day: "Day 29", percentage: 98.3, status: "up" },
    { day: "Day 30", percentage: 96.4, status: "up" },
  ]);

  const averageUptime =
    uptimeData.reduce((sum, day) => sum + day.percentage, 0) /
    uptimeData.length;

  const uptimeStatus =
    averageUptime >= 99.9
      ? "operational"
      : averageUptime >= 95
      ? "degraded"
      : "down";

  return (
    <div className="font-sans antialiased w-full max-w-4xl mx-auto p-6 bg-transparent   m-3 mt-5">
      <div className="relative">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Service Status
            </h2>
            <div className="flex items-center mt-1">
              <div
                className={`w-3 h-3 mr-2 ${
                  uptimeStatus === "operational"
                    ? "bg-green-500"
                    : uptimeStatus === "degraded"
                    ? "bg-yellow-500"
                    : uptimeStatus === "down"
                    ? "bg-red-500"
                    : ""
                }`}
              ></div>
              <span className="text-sm font-medium capitalize text-gray-700 dark:text-gray-300">
                {uptimeStatus} • Last 30 days
              </span>
            </div>
          </div>
          <div className="flex items-center rounded-lg px-3 py-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
              Avg. Uptime:
            </span>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              {averageUptime.toFixed(2)}%
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="h-fit border border-dashed border-neutral-300   p-3 relative flex justify-center items-center ">
          <div className="flex justify-center items-center h-full gap-1 flex-1 w-full">
            {" "}
            {uptimeData.map((day, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-end relative group cursor-pointer w-2"
              >
                <div
                  className={`w-full transition-all duration-300 ${
                    day.status === "up" ? "bg-green-500" : "bg-red-500"
                  }`}
                  style={{
                    height: `${Math.max(day.percentage, 10)}%`,
                    minHeight: "50px",
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center bg-gray-800 text-white text-xs rounded py-1.5 px-2.5 z-10 min-w-20">
                    <span className="font-medium">{day.day}</span>
                    <span className="text-xs">{day.percentage}%</span>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-dashed border-neutral-300  p-4 ">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Current Status
          </div>
          <div className="flex items-center">
            <div
              className={`w-2.5 h-2.5 rounded-full mr-2 ${
                uptimeStatus === "operational"
                  ? "bg-green-500"
                  : uptimeStatus === "degraded"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
            ></div>
            <span className="font-medium capitalize text-gray-900 dark:text-white">
              {uptimeStatus}
            </span>
          </div>
        </div>

        <div className="border  border-dashed border-neutral-300 p-4 ">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Uptime
          </div>
          <div className="font-medium text-gray-900 dark:text-white">
            {averageUptime.toFixed(2)}%
          </div>
        </div>

        <div className="border border-dashed border-neutral-300 p-4 ">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            Incidents
          </div>
          <div className="font-medium text-gray-900 dark:text-white">
            {uptimeData.filter((d) => d.status === "down").length}
          </div>
        </div>
      </div>
    </div>
  );
};

export { UptimeStatus };
