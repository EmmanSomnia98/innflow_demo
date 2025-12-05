import { Room } from '../App';

const roomImages = {
  standardSolo: 'https://images.unsplash.com/photo-1648766378129-11c3d8d0da05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZGFyZCUyMGhvdGVsJTIwcm9vbSUyMHNpbmdsZSUyMGJlZHxlbnwxfHx8fDE3NjQ4MDc2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  deluxeSolo: 'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWx1eGUlMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ4MDc2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  deluxeDouble: 'https://images.unsplash.com/photo-1744534637336-6110864236fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRvdWJsZSUyMGJlZCUyMHJvb218ZW58MXx8fHwxNzY0ODA3NjU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  doubleSuite: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwYmVkcm9vbSUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ4MDc2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  suitePremier: 'https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzaWRlbnRpYWwlMjBzdWl0ZSUyMGhvdGVsfGVufDF8fHx8MTc2NDY5MjkxN3ww&ixlib=rb-4.1.0&q=80&w=1080'
};

export const mockRooms: Room[] = [
  // Standard Solo (Rooms 101-110)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 101 + i,
    roomNumber: `${101 + i}`,
    name: `Standard Solo Room ${101 + i}`,
    category: 'Standard Solo' as const,
    description: 'Cozy single room perfect for solo travelers. Features a comfortable single bed, work desk, and essential amenities.',
    capacity: 1,
    price: 700,
    image: roomImages.standardSolo,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Cable TV', 'Hot Shower', 'Work Desk'],
    available: true
  })),
  
  // Deluxe Solo (Rooms 201-210)
  ...Array.from({ length: 10 }, (_, i) => ({
    id: 201 + i,
    roomNumber: `${201 + i}`,
    name: `Deluxe Solo Room ${201 + i}`,
    category: 'Deluxe Solo' as const,
    description: 'Upgraded single room with premium amenities. Spacious layout with a queen-sized bed and modern furnishings.',
    capacity: 1,
    price: 1000,
    image: roomImages.deluxeSolo,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Smart TV', 'Premium Bedding', 'Mini Bar', 'Hot Shower', 'Work Desk'],
    available: true
  })),
  
  // Deluxe Double (Rooms 301-305)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 301 + i,
    roomNumber: `${301 + i}`,
    name: `Deluxe Double Room ${301 + i}`,
    category: 'Deluxe Double' as const,
    description: 'Spacious room with a luxurious double bed. Perfect for couples seeking comfort and style.',
    capacity: 2,
    price: 1500,
    image: roomImages.deluxeDouble,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Smart TV', 'Premium Bedding', 'Mini Bar', 'Hot Shower', 'Bathtub', 'City View'],
    available: true
  })),
  
  // Double Suite (Rooms 306-310)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 306 + i,
    roomNumber: `${306 + i}`,
    name: `Double Suite ${306 + i}`,
    category: 'Double Suite' as const,
    description: 'Elegant suite with separate living area and bedroom. Features a king-sized bed and premium amenities.',
    capacity: 2,
    price: 5000,
    image: roomImages.doubleSuite,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Smart TV', 'Premium Bedding', 'Mini Bar', 'Coffee Maker', 'Hot Shower', 'Bathtub', 'Living Area', 'City View'],
    available: true
  })),
  
  // Suite Premier (Rooms 401-405)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: 401 + i,
    roomNumber: `${401 + i}`,
    name: `Suite Premier ${401 + i}`,
    category: 'Suite Premier' as const,
    description: 'Our most luxurious accommodation. Expansive suite with separate bedroom, living room, and panoramic city views.',
    capacity: 3,
    price: 8000,
    image: roomImages.suitePremier,
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Smart TV', 'Premium Bedding', 'Mini Bar', 'Coffee Maker', 'Hot Shower', 'Jacuzzi', 'Living Area', 'Dining Area', 'Panoramic View', 'VIP Service'],
    available: true
  }))
];

export const featuredRooms = [
  mockRooms.find(r => r.category === 'Standard Solo'),
  mockRooms.find(r => r.category === 'Deluxe Solo'),
  mockRooms.find(r => r.category === 'Deluxe Double'),
  mockRooms.find(r => r.category === 'Double Suite'),
  mockRooms.find(r => r.category === 'Suite Premier')
].filter(Boolean) as Room[];
