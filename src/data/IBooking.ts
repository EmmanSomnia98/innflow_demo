export interface IBooking {
    _id: string;
    hotel: {
      name: string;
      location: string;
    };
    roomType: string;
    checkInDate: string;
    checkOutDate: string;
    totalPrice: number;
    status: 'Confirmed' | 'Canceled' | 'Completed'; // Define possible statuses
  }