import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Sensor Data Trends',
    },
  },
};

const labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'];
const data = {
  labels,
  datasets: [
    {
      label: 'Engine Temperature (°C)',
      data: [85, 87, 88, 90, 92, 91, 89],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Battery Voltage (V)',
      data: [12.6, 12.5, 12.4, 12.3, 12.2, 12.1, 12.0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Monitoring() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Real-Time Monitoring</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}