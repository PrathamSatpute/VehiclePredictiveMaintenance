import React from 'react';
import { MapPin, Phone, Star, Navigation } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { ServiceCenter } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const serviceCenters: ServiceCenter[] = [
  {
    id: '1',
    name: 'AutoCare Premium Service',
    distance: '2.5 miles',
    address: '123 Main St, Anytown, ST 12345',
    phone: '(555) 123-4567',
    rating: 4.8,
    coordinates: [40.7128, -74.0060], // New York coordinates
  },
  {
    id: '2',
    name: 'Elite Auto Workshop',
    distance: '3.8 miles',
    address: '456 Oak Ave, Anytown, ST 12345',
    phone: '(555) 987-6543',
    rating: 4.5,
    coordinates: [40.7282, -73.9942],
  },
];

export default function ServiceCenters() {
  const handleNavigate = (coordinates: [number, number]) => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${coordinates[0]},${coordinates[1]}`,
      '_blank'
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="hidden lg:block text-2xl font-bold text-gray-900">Service Centers</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative">
          <div className="bg-white rounded-lg shadow p-4 h-[500px] z-0">
            <MapContainer
              center={[40.7128, -74.0060]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {serviceCenters.map((center) => (
                <Marker key={center.id} position={center.coordinates}>
                  <Popup>
                    <div className="font-semibold">{center.name}</div>
                    <div className="text-sm">{center.address}</div>
                    <div className="text-sm">{center.phone}</div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        <div className="space-y-6">
          {serviceCenters.map((center) => (
            <div key={center.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{center.name}</h2>
                <span className="flex items-center text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-1">{center.rating}</span>
                </span>
              </div>
              <p className="text-blue-600 mt-1">{center.distance}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  {center.address}
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2" />
                  {center.phone}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors">
                  Schedule Service
                </button>
                <button
                  onClick={() => handleNavigate(center.coordinates)}
                  className="w-full bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Navigate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}