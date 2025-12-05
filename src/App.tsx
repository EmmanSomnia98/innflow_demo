import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { RoomsPage } from './components/RoomsPage';
import { BookingModal } from './components/BookingModal';
import { BookingConfirmation } from './components/BookingConfirmation';
import React from 'react';
import MyBookingsPage from './components/MyBookings';

export interface Room {
  id: number;
  roomNumber: string;
  name: string;
  category: 'Standard Solo' | 'Deluxe Solo' | 'Deluxe Double' | 'Double Suite' | 'Suite Premier';
  description: string;
  capacity: number;
  price: number;
  image: string;
  amenities: string[];
  available: boolean;
}

export interface Guest {
  id?: number;
  name: string;
  email: string;
  phone?: string;
}

export interface Booking {
  id?: number;
  guestId?: number;
  roomId: number;
  checkIn: string;
  checkOut: string;
  guests?: number;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'rooms' | 'bookings'>('home');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any>(null);

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleCloseModal = () => {
    setSelectedRoom(null);
  };

  const handleBookingComplete = (bookingData: any) => {
    setConfirmedBooking(bookingData);
    setBookingConfirmed(true);
    setSelectedRoom(null);
  };

  const handleCloseConfirmation = () => {
    setBookingConfirmed(false);
    setConfirmedBooking(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={setCurrentPage}
            onRoomSelect={handleRoomSelect}
          />
        )}
        {currentPage === 'rooms' && (
          <RoomsPage onRoomSelect={handleRoomSelect} />
        )}
        {currentPage === 'bookings' && (
          <MyBookingsPage />
        )}
      </main>

      {selectedRoom && (
        <BookingModal
          room={selectedRoom}
          onClose={handleCloseModal}
          onBookingComplete={handleBookingComplete}
        />
      )}

      {bookingConfirmed && confirmedBooking && (
        <BookingConfirmation
          booking={confirmedBooking}
          onClose={handleCloseConfirmation}
        />
      )}
    </div>
  );
}

export default App;
