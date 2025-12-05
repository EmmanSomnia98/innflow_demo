import { useState, useEffect } from 'react';
import { Room } from '../App';
import { RoomCard } from './RoomCard';
import { mockRooms } from '../data/rooms';
import { Filter, Loader2 } from 'lucide-react';
import React from 'react';

interface RoomsPageProps {
  onRoomSelect: (room: Room) => void;
}

const API_BASE_URL = 'https://innflow.vercel.app/api';

export function RoomsPage({ onRoomSelect }: RoomsPageProps) {
  const [rooms, setRooms] = useState<Room[]>(mockRooms);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Standard Solo', 'Deluxe Solo', 'Deluxe Double', 'Double Suite', 'Suite Premier'];

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${API_BASE_URL}/rooms`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch rooms: ${response.status}`);
      }
      
      const data = await response.json();
      
      // If API returns valid room data with our expected structure, use it
      // Otherwise, keep using mock rooms
      if (Array.isArray(data) && data.length > 0 && data[0].category) {
        setRooms(data);
      }
    } catch (err) {
      console.error('Error fetching rooms:', err);
      setError('Unable to connect to server. Displaying local room data.');
      // Keep using mockRooms that were set in initial state
    } finally {
      setLoading(false);
    }
  };

  const filteredRooms = selectedCategory === 'All' 
    ? rooms 
    : rooms.filter(room => room.category === selectedCategory);

  const groupedRooms = categories.slice(1).reduce((acc, category) => {
    acc[category] = rooms.filter(room => room.category === category);
    return acc;
  }, {} as Record<string, Room[]>);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Our Rooms</h1>
        <p className="text-gray-600">
          Browse through our {rooms.length} available rooms across 5 categories
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">{error}</p>
        </div>
      )}

      {/* Category Filter */}
      <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center gap-3 mb-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <h3 className="text-gray-900">Filter by Category</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      ) : selectedCategory === 'All' ? (
        // Show grouped by category
        <div className="space-y-12">
          {categories.slice(1).map((category) => {
            const categoryRooms = groupedRooms[category];
            if (!categoryRooms || categoryRooms.length === 0) return null;

            return (
              <div key={category}>
                <div className="mb-6">
                  <h2 className="text-gray-900 mb-2">{category}</h2>
                  <p className="text-gray-600">
                    {categoryRooms[0].description}
                  </p>
                  <p className="text-blue-600 mt-2">
                    Starting at ₱{categoryRooms[0].price.toLocaleString()}/night
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryRooms.map((room) => (
                    <RoomCard 
                      key={room.id || `room-${room.roomNumber}`}
                      room={room} 
                      onSelect={() => onRoomSelect(room)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Show filtered rooms
        <div>
          {filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRooms.map((room) => (
                <RoomCard 
                  key={room.id || `room-${room.roomNumber}`}
                  room={room} 
                  onSelect={() => onRoomSelect(room)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500">No rooms available in this category.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}