import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or use native fetch
import { IBooking } from '../data/IBooking';

const MyBookingsPage: React.FC = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // 1. Call the new backend endpoint
        const response = await axios.get('https://innflow.onrender.com/api/bookings/me', {
          // 2. Include the Auth Token (e.g., from localStorage)
          headers: {
            'x-auth-token': localStorage.getItem('token'), 
          },
        });
        
        setBookings(response.data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError('Could not load your bookings. Please ensure you are logged in.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <h3>Loading your bookings...</h3>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (bookings.length === 0) return <p>You have no active or past bookings to review.</p>;

  return (
    <div className="my-bookings-container">
      <h2>My Booking History 📅</h2>
      {bookings.map((booking) => (
        <div key={booking._id} className="booking-card">
          <h3>{booking.hotel.name}</h3>
          <p>Location: {booking.hotel.location}</p>
          <p>Room: **{booking.roomType}** | Status: **{booking.status}**</p>
          <p>Check-in: {new Date(booking.checkInDate).toLocaleDateString()}</p>
          <p>Total Paid: **${booking.totalPrice.toFixed(2)}**</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookingsPage;