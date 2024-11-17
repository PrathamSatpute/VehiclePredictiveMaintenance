export interface User {
  email: string;
  name?: string;
}

export interface SensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  icon: string;
  description?: string;
  threshold?: {
    warning: number;
    critical: number;
  };
}

export interface ServiceCenter {
  id: string;
  name: string;
  distance: string;
  address: string;
  phone: string;
  rating: number;
  coordinates: [number, number];
}

export interface CarSpecification {
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface DiagnosticCode {
  code: string;
  description: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: Date;
}