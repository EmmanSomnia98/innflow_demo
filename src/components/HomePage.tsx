import { ArrowRight, Star, MapPin, Phone, Mail } from 'lucide-react';
import { Room } from '../App';
import { featuredRooms } from '../data/rooms';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

interface HomePageProps {
  onNavigate: (page: 'rooms') => void;
  onRoomSelect: (room: Room) => void;
}

export function HomePage({ onNavigate, onRoomSelect }: HomePageProps) {
  const heroImage = 'https://images.unsplash.com/photo-1759462692354-404b2c995c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQ3NjI5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <ImageWithFallback
          src={heroImage}
          alt="InnFlow Hotel"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="mb-4 text-white drop-shadow-lg">Welcome to InnFlow</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience Filipino hospitality at its finest. Your home away from home in the heart of the city.
            </p>
            <button
              onClick={() => onNavigate('rooms')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              View All Rooms
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Room Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed rooms, each offering comfort and modern amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => onRoomSelect(room)}
              >
                <div className="relative h-56 bg-gray-200">
                  <ImageWithFallback
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    ₱{room.price.toLocaleString()}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{room.category}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {room.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Up to {room.capacity} {room.capacity === 1 ? 'guest' : 'guests'}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('rooms')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Browse All Rooms
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Why Choose InnFlow?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the best of Filipino hospitality with world-class amenities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Premium Comfort</h3>
              <p className="text-gray-600 text-sm">
                Experience luxury with our well-appointed rooms featuring modern amenities and Filipino touches
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Prime Location</h3>
              <p className="text-gray-600 text-sm">
                Strategically located in the city center, with easy access to major attractions and business districts
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-gray-900 mb-3">Exceptional Service</h3>
              <p className="text-gray-600 text-sm">
                Our dedicated staff ensures your stay is comfortable with genuine Filipino warmth and hospitality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-gray-900 mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900">+63 2 1234 5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-900">reservations@innflow.ph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
