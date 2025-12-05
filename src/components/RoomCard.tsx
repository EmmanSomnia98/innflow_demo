import { Room } from '../App';
import { Users, Bed } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

interface RoomCardProps {
  room: Room;
  onSelect: () => void;
}

export function RoomCard({ room, onSelect }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <ImageWithFallback
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        {room.available === false && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
            Unavailable
          </div>
        )}
        <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          Room {room.roomNumber}
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-3">
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {room.category}
          </span>
        </div>
        
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{room.capacity === 1 ? 'Single' : room.capacity === 2 ? 'Double' : 'Suite'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{room.capacity} {room.capacity === 1 ? 'Guest' : 'Guests'}</span>
          </div>
        </div>

        {room.amenities && room.amenities.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {room.amenities.slice(0, 3).map((amenity, index) => (
                <span 
                  key={index}
                  className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded"
                >
                  {amenity}
                </span>
              ))}
              {room.amenities.length > 3 && (
                <span className="text-xs text-gray-500 px-2 py-1">
                  +{room.amenities.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Starting at</p>
            <p className="text-blue-600">₱{room.price.toLocaleString()}<span className="text-sm text-gray-500">/night</span></p>
          </div>
        </div>
        
        <button
          onClick={onSelect}
          disabled={room.available === false}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {room.available === false ? 'Unavailable' : 'Book Now'}
        </button>
      </div>
    </div>
  );
}
