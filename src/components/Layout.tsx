import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Car, BarChart2, MessageSquare, Map, Settings, LogOut, FileText, Menu } from 'lucide-react';
import NotificationCenter from './NotificationCenter';

const navItems = [
  { path: '/dashboard', icon: Car, label: 'Dashboard' },
  { path: '/monitoring', icon: BarChart2, label: 'Monitoring' },
  { path: '/chatbot', icon: MessageSquare, label: 'AI Assistant' },
  { path: '/service', icon: Map, label: 'Service Centers' },
  { path: '/specs', icon: FileText, label: 'Car Specs' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={`
        fixed lg:static w-64 h-full bg-white shadow-xl border-r border-slate-200 z-50
        transform transition-transform duration-200 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            CarPulse AI
          </h1>
        </div>
        <div className="mt-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-6 py-3.5 text-slate-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all ${
                  isActive ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 border-r-4 border-blue-600' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="absolute bottom-0 w-64 p-4 border-t border-slate-200">
          <button className="flex items-center text-slate-600 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto relative bg-slate-50 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden h-16 bg-white shadow-sm flex items-center justify-center px-16">
          <h1 className="text-lg font-semibold text-gray-900 truncate">
            {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
          </h1>
        </div>

        <div className="absolute top-4 right-4 z-30">
          <NotificationCenter />
        </div>
        
        {/* Adjust padding for mobile header */}
        <div className="p-4 lg:p-8 mt-0 lg:mt-0">{children}</div>
      </main>
    </div>
  );
}