import React from 'react';
import { AlertTriangle, AlertCircle, AlertOctagon } from 'lucide-react';
import type { DiagnosticCode } from '../types';

interface DiagnosticsListProps {
  diagnostics: DiagnosticCode[];
}

export default function DiagnosticsList({ diagnostics }: DiagnosticsListProps) {
  const getSeverityIcon = (severity: DiagnosticCode['severity']) => {
    switch (severity) {
      case 'high':
        return <AlertOctagon className="w-5 h-5 text-red-500" />;
      case 'medium':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
    }
  };

  const getSeverityClass = (severity: DiagnosticCode['severity']) => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-100';
      case 'medium':
        return 'bg-yellow-50 border-yellow-100';
      default:
        return 'bg-blue-50 border-blue-100';
    }
  };

  return (
    <div className="space-y-4">
      {diagnostics.map((diagnostic) => (
        <div
          key={diagnostic.code}
          className={`p-4 rounded-lg border ${getSeverityClass(diagnostic.severity)}`}
        >
          <div className="flex items-start space-x-3">
            {getSeverityIcon(diagnostic.severity)}
            <div>
              <div className="font-semibold">{diagnostic.code}</div>
              <div className="text-sm text-gray-600">{diagnostic.description}</div>
              <div className="text-xs text-gray-500 mt-1">
                {diagnostic.timestamp.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}