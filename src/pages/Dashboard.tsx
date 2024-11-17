import React from 'react';
import SensorCard from '../components/SensorCard';
import DiagnosticsList from '../components/DiagnosticsList';
import CarModel from '../components/CarModel';
import { Battery, Thermometer, Gauge, Disc } from 'lucide-react';

const mockSensors = [
  {
    id: '1',
    name: 'Engine Temperature',
    value: 92,
    unit: '°C',
    status: 'normal' as const,
    icon: Thermometer,
    description: 'Engine operating temperature within normal range',
    threshold: {
      warning: 100,
      critical: 110,
    },
  },
  {
    id: '2',
    name: 'Battery Voltage',
    value: 12.6,
    unit: 'V',
    status: 'warning' as const,
    icon: Battery,
    description: 'Battery voltage slightly below optimal level',
    threshold: {
      warning: 12.4,
      critical: 11.8,
    },
  },
  {
    id: '3',
    name: 'Engine RPM',
    value: 2500,
    unit: 'RPM',
    status: 'normal' as const,
    icon: Gauge,
    description: 'Engine speed within normal operating range',
    threshold: {
      warning: 4000,
      critical: 5000,
    },
  },
  {
    id: '4',
    name: 'Brake Pad Wear',
    value: 65,
    unit: '%',
    status: 'warning' as const,
    icon: Disc,
    description: 'Front brake pads showing moderate wear',
    threshold: {
      warning: 70,
      critical: 90,
    },
  },
];

const mockDiagnostics = [
  {
    code: 'P0300',
    description: 'Random/Multiple Cylinder Misfire Detected',
    severity: 'high' as const,
    timestamp: new Date(),
  },
  {
    code: 'P0420',
    description: 'Catalyst System Efficiency Below Threshold',
    severity: 'medium' as const,
    timestamp: new Date(),
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="hidden lg:flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Vehicle Health Dashboard</h1>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
            Connected
          </span>
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            Data Updated: Just now
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockSensors.map((sensor) => (
          <SensorCard key={sensor.id} sensor={sensor} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Vehicle Overview</h2>
          <div className="aspect-video bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg">
            <CarModel />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">Diagnostic Trouble Codes</h2>
          <DiagnosticsList diagnostics={mockDiagnostics} />
        </div>
      </div>
    </div>
  );
}