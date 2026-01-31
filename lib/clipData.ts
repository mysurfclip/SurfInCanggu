export interface ClipData {
  id: string;
  title: string;
  location: string;
  time: string;
  duration: string;
  thumbnail: string;
  clipdaysUrl: string;
}

export const mockClips: ClipData[] = [
  {
    id: '1',
    title: 'Morning Session',
    location: "Oldman's Beach",
    time: '06:30 AM',
    duration: '2:45',
    thumbnail: '/images/clip-1.svg',
    clipdaysUrl: 'https://clipdays.com/clip/1'
  },
  {
    id: '2',
    title: 'Perfect Barrel',
    location: "Oldman's Beach",
    time: '07:15 AM',
    duration: '1:30',
    thumbnail: '/images/clip-2.svg',
    clipdaysUrl: 'https://clipdays.com/clip/2'
  },
  {
    id: '3',
    title: 'Aerial Action',
    location: "Oldman's Beach",
    time: '08:00 AM',
    duration: '3:20',
    thumbnail: '/images/clip-3.svg',
    clipdaysUrl: 'https://clipdays.com/clip/3'
  },
  {
    id: '4',
    title: 'Sunset Rides',
    location: "Oldman's Beach",
    time: '05:45 PM',
    duration: '2:15',
    thumbnail: '/images/clip-4.svg',
    clipdaysUrl: 'https://clipdays.com/clip/4'
  }
];
