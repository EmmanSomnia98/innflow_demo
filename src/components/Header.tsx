import { Hotel } from 'lucide-react';
import React from 'react';
import { Button } from 'react-day-picker';

interface HeaderProps {
  currentPage: 'home' | 'rooms' | 'bookings';
  onNavigate: (page: 'home' | 'rooms' | 'bookings') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-blue-600 p-2 rounded-lg">
              <Hotel className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-gray-900">InnFlow</h2>
              <p className="text-sm text-gray-500">Go INN style!</p>
            </div>
          </div>
          
          <nav className="flex gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'home' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('rooms')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'rooms' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Rooms
            </button>
            <button
              onClick={() => onNavigate('bookings')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'bookings' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              My Bookings
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
