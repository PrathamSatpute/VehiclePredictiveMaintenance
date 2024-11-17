import React from 'react';
import type { CarSpecification } from '../types';
import { Car, Gauge, Cog, Ruler, Battery, Fuel } from 'lucide-react';

export const specifications: CarSpecification[] = [
  {
    category: 'Engine',
    specs: [
      { label: 'Type', value: '2.0L Turbocharged Inline-4' },
      { label: 'Horsepower', value: '248 hp @ 5,200 rpm' },
      { label: 'Torque', value: '258 lb-ft @ 1,450 rpm' },
      { label: 'Compression Ratio', value: '10.2:1' },
      { label: 'Fuel System', value: 'Direct Injection' },
      { label: 'Engine Oil Capacity', value: '5.7 quarts' },
    ],
  },
  {
    category: 'Transmission',
    specs: [
      { label: 'Type', value: '8-Speed Automatic' },
      { label: 'Drive Type', value: 'All-Wheel Drive' },
      { label: 'Gear Ratios - 1st', value: '5.25:1' },
      { label: 'Final Drive Ratio', value: '3.73:1' },
    ],
  },
  {
    category: 'Performance',
    specs: [
      { label: '0-60 mph', value: '5.8 seconds' },
      { label: 'Top Speed', value: '155 mph (limited)' },
      { label: 'Braking 60-0 mph', value: '112 ft' },
      { label: 'Quarter Mile', value: '14.1 sec @ 98.5 mph' },
    ],
  },
  {
    category: 'Dimensions',
    specs: [
      { label: 'Wheelbase', value: '112.8 inches' },
      { label: 'Length', value: '185.7 inches' },
      { label: 'Width', value: '74.4 inches' },
      { label: 'Height', value: '56.3 inches' },
      { label: 'Curb Weight', value: '3,627 lbs' },
    ],
  },
  {
    category: 'Fuel Economy',
    specs: [
      { label: 'City', value: '25 mpg' },
      { label: 'Highway', value: '33 mpg' },
      { label: 'Combined', value: '28 mpg' },
      { label: 'Fuel Tank Capacity', value: '15.6 gallons' },
    ],
  },
  {
    category: 'Electrical System',
    specs: [
      { label: 'Battery Type', value: 'AGM' },
      { label: 'Battery Capacity', value: '80 Ah' },
      { label: 'Alternator Output', value: '180 A' },
      { label: 'System Voltage', value: '12V' },
    ],
  },
];

export default function CarSpecs() {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Engine':
        return <Car className="w-6 h-6" />;
      case 'Performance':
        return <Gauge className="w-6 h-6" />;
      case 'Transmission':
        return <Cog className="w-6 h-6" />;
      case 'Dimensions':
        return <Ruler className="w-6 h-6" />;
      case 'Electrical System':
        return <Battery className="w-6 h-6" />;
      case 'Fuel Economy':
        return <Fuel className="w-6 h-6" />;
      default:
        return <Car className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Vehicle Specifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specifications.map((category) => (
          <div key={category.category} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                {getIcon(category.category)}
              </div>
              <h2 className="text-xl font-semibold text-slate-800">{category.category}</h2>
            </div>
            <div className="space-y-3">
              {category.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between border-b border-slate-100 pb-2 last:border-0">
                  <span className="text-slate-600">{spec.label}</span>
                  <span className="font-medium text-slate-800">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}