import { LucideIcon } from 'lucide-react';

export interface SensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  icon: LucideIcon;
  description: string;
  threshold: {
    warning: number;
    critical: number;
  };
} 