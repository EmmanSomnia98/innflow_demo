import { CheckCircle, X, Calendar, User, Mail, Home, Phone } from 'lucide-react';
import React from 'react';

interface BookingConfirmationProps {
  booking: any;
  onClose: () => void;
}

export function BookingConfirmation({ booking, onClose }: BookingConfirmationProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateNights = () => {
    if (!booking.booking?.checkIn || !booking.booking?.checkOut) return 0;
    const nights = Math.ceil(
      (new Date(booking.booking.checkOut).getTime() - new Date(booking.booking.checkIn).getTime()) / 
      (1000 * 60 * 60 * 24)
    );
    return nights > 0 ? nights : 0;
  };

  const calculateTotal = () => {
    return (booking.room?.price || 0) * calculateNights();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-gray-900">Booking Confirmed!</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Salamat po sa pag-book with InnFlow!</h3>
            <p className="text-sm text-gray-600 text-center">
              Your booking has been confirmed. A confirmation email has been sent to {booking.guest?.email}
            </p>
          </div>

          <div className="space-y-4 bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Home className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Room Details</p>
                <p className="text-gray-900">Room {booking.room?.roomNumber}</p>
                <p className="text-sm text-gray-600">{booking.room?.category}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Guest Name</p>
                <p className="text-gray-900">{booking.guest?.name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-900">{booking.guest?.email}</p>
              </div>
            </div>

            {booking.guest?.phone && (
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-900">{booking.guest.phone}</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Check-in</p>
                <p className="text-gray-900">{formatDate(booking.booking?.checkIn)}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Check-out</p>
                <p className="text-gray-900">{formatDate(booking.booking?.checkOut)}</p>
              </div>
            </div>

            {booking.booking?.id && (
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">Booking Reference</p>
                <p className="text-gray-900 font-mono">#{booking.booking.id}</p>
              </div>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Price per night:</span>
              <span className="text-gray-900">₱{booking.room?.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Number of nights:</span>
              <span className="text-gray-900">{calculateNights()}</span>
            </div>
            <div className="border-t border-blue-200 pt-2 mt-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-900">Total Amount:</span>
                <span className="text-blue-600">
                  ₱{calculateTotal().toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Important:</strong> Please present this booking reference at the front desk during check-in. For inquiries, call +63 2 1234 5678.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
