import React from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Graph = () => {
  const data = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Machine Learning Score",
        data: [61, 72.3, 83, 80.8, 82.1, 92.3, 90.9],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Cardiovascular Machine Learning Score (Last 7 Weeks)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Years)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Machine Learning Score (Out of 100)",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <Box width={"70%"} mb={"45px"}>
      <Line data={data} options={options} />;
    </Box>
  );
};
