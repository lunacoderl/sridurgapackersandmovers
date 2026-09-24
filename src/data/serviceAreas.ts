export interface ServiceAreaLocation {
  name: string;
  type: 'hub' | 'local' | 'regional' | 'domestic';
  description: string;
  popularRoutes?: string[];
}

export const serviceAreas: ServiceAreaLocation[] = [
  {
    name: 'Vizianagaram (District Headquarters)',
    type: 'hub',
    description: 'Our primary operating base and fleet headquarters since 2014 with same-day shifting across all neighborhoods.',
    popularRoutes: ['Cantonment', 'Ring Road', 'Collectorate Junction', 'Phool Baugh', 'RTC Complex Area', 'Balaji Nagar', 'Kothavalasa', 'Bobbili']
  },
  {
    name: 'Visakhapatnam (Vizag Urban & Rural)',
    type: 'regional',
    description: 'Daily shuttle trips and express intercity shifting between Vizianagaram and Greater Visakhapatnam.',
    popularRoutes: ['Madhurawada', 'Gajuwaka', 'MVP Colony', 'Rushikonda', 'Pendurthi', 'Dwaraka Nagar', 'Steel Plant Township']
  },
  {
    name: 'Srikakulam & North Coastal Corridor',
    type: 'regional',
    description: 'Complete household and commercial coverage across Srikakulam town, Palasa, and Sompeta.',
    popularRoutes: ['Srikakulam Town', 'Amadalavalasa', 'Palasa', 'Rajam', 'Narasannapeta']
  },
  {
    name: 'Major Interstate & Domestic Hubs',
    type: 'domestic',
    description: 'Full-truckload (FTL) and part-load container shifting with door-to-door transit to all metropolitan centers.',
    popularRoutes: ['Hyderabad (Telangana)', 'Bengaluru (Karnataka)', 'Chennai (Tamil Nadu)', 'Bhubaneswar / Cuttack (Odisha)', 'Vijayawada (AP)', 'Pune / Mumbai (Maharashtra)']
  }
];
