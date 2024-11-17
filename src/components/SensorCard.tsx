import React from 'react';
import { SensorData } from '../types';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface SensorCardProps {
  sensor: SensorData;
  onClick?: () => void;
}

export default function SensorCard({ sensor, onClick }: SensorCardProps) {
  const getStatusColor = (status: SensorData['status']) => {
    switch (status) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-green-100 text-green-800 border-green-200';
    }
  };

  const StatusIcon = sensor.status === 'normal' ? CheckCircle : AlertTriangle;

  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-lg border ${getStatusColor(
        sensor.status
      )} cursor-pointer transition-transform hover:scale-105`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{sensor.name}</h3>
        <StatusIcon className="w-5 h-5" />
      </div>
      <div className="text-2xl font-bold">
        {sensor.value}
        <span className="text-sm ml-1">{sensor.unit}</span>
      </div>
    </div>
  );
}