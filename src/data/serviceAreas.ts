export interface ServiceAreaLocation {
  name: string;
  type: 'hub' | 'local' | 'regional' | 'domestic';
  description: string;
  popularRoutes?: string[];
}

export interface MainServicingLocation {
  name: string;
  displayName: string;
  tagline: string;
  corridor: string;
  distanceKm: number;
  pickupTime: string;
  highlights: string[];
}

export const mainServicingLocations: MainServicingLocation[] = [
  {
    name: 'Parvathipuram',
    displayName: 'Parvathipuram (Manyam Hub)',
    tagline: 'Manyam district headquarters & valley relocation',
    corridor: 'Vizianagaram - Parvathipuram Highway',
    distanceKm: 65,
    pickupTime: '1 - 2 Hours',
    highlights: ['Daily Scheduled Trucks', 'Full Household Relocation', 'Zero-Damage Crating']
  },
  {
    name: 'Salur',
    displayName: 'Salur',
    tagline: 'Commercial gateway & agency highway corridor',
    corridor: 'Salur NH Radial Route',
    distanceKm: 48,
    pickupTime: '1 - 2 Hours',
    highlights: ['Same-Day Local Moving', 'Heavy Appliance Hoisting', 'Dedicated Mini-Containers']
  },
  {
    name: 'Bobbili',
    displayName: 'Bobbili',
    tagline: 'Historic commercial & growth center',
    corridor: 'Vizianagaram - Bobbili Radial Express',
    distanceKm: 55,
    pickupTime: '1 - 2 Hours',
    highlights: ['Complete Home & Shop Shifting', 'Industrial Machinery Moves', 'Weatherproof Trucks']
  },
  {
    name: 'Cheepurupalli',
    displayName: 'Cheepurupalli',
    tagline: 'Major junction & regional business belt',
    corridor: 'North-East Express Corridor',
    distanceKm: 32,
    pickupTime: '45 - 60 Mins',
    highlights: ['Quick Doorstep Survey', 'Electronics Safe Handling', 'Fixed Upfront Rates']
  },
  {
    name: 'Garividi',
    displayName: 'Garividi',
    tagline: 'Industrial & ferro-alloys residential corridor',
    corridor: 'Cheepurupalli-Garividi Sector',
    distanceKm: 35,
    pickupTime: '45 - 60 Mins',
    highlights: ['Town & Factory Staff Moves', 'Multi-Layer Packing', 'Trained Handling Crew']
  },
  {
    name: 'Rajam',
    displayName: 'Rajam',
    tagline: 'Educational & industrial manufacturing corridor',
    corridor: 'State Highway Direct Corridor',
    distanceKm: 42,
    pickupTime: '1 Hour',
    highlights: ['Campus & Family Shifting', 'Furniture Assembly/Disassembly', 'Closed Container Fleet']
  },
  {
    name: 'S Kota',
    displayName: 'S Kota (Srungavarapukota)',
    tagline: 'Gateway to Agency & hill corridor',
    corridor: 'Vizianagaram - Araku Highway Link',
    distanceKm: 30,
    pickupTime: '45 Mins',
    highlights: ['Hill Road Trained Drivers', 'Waterproof Packing Layers', '24/7 Dispatch Availability']
  },
  {
    name: 'Bhogapuram',
    displayName: 'Bhogapuram',
    tagline: 'International Airport corridor & coastal belt',
    corridor: 'NH16 Coastal Express Corridor',
    distanceKm: 22,
    pickupTime: '30 - 45 Mins',
    highlights: ['Airport Zone Gated Moves', 'Express Shifting Dispatches', 'Insured Transit Options']
  },
  {
    name: 'Thagarapuvalasa',
    displayName: 'Thagarapuvalasa',
    tagline: 'Vizag-Vizianagaram twin metro highway hub',
    corridor: 'NH16 Metro Link Corridor',
    distanceKm: 25,
    pickupTime: '30 - 45 Mins',
    highlights: ['Intercity Commuter Shifting', 'Apartment & Office Moves', 'Rapid Doorstep Loading']
  }
];

export const serviceAreas: ServiceAreaLocation[] = [
  {
    name: 'Vizianagaram (District Headquarters)',
    type: 'hub',
    description: 'Our primary operating base and fleet headquarters since 2014 with same-day shifting across all neighborhoods and satellite towns.',
    popularRoutes: ['Cantonment', 'Ring Road', 'Collectorate Junction', 'Phool Baugh', 'RTC Complex Area', 'Balaji Nagar', 'Bobbili', 'Cheepurupalli', 'Garividi', 'S Kota', 'Bhogapuram']
  },
  {
    name: 'Visakhapatnam (Vizag Urban & Rural)',
    type: 'regional',
    description: 'Daily shuttle trips and express intercity shifting between Vizianagaram, Thagarapuvalasa, and Greater Visakhapatnam.',
    popularRoutes: ['Thagarapuvalasa', 'Madhurawada', 'Gajuwaka', 'MVP Colony', 'Rushikonda', 'Pendurthi', 'Dwaraka Nagar', 'Steel Plant Township']
  },
  {
    name: 'North Coastal Towns (Manyam & Srikakulam)',
    type: 'regional',
    description: 'Complete household and commercial coverage across Parvathipuram, Salur, Rajam, and Srikakulam corridor.',
    popularRoutes: ['Parvathipuram', 'Salur', 'Rajam', 'Srikakulam Town', 'Amadalavalasa', 'Palasa', 'Narasannapeta']
  },
  {
    name: 'Major Interstate & Domestic Hubs',
    type: 'domestic',
    description: 'Full-truckload (FTL) and part-load container shifting with door-to-door transit to all metropolitan centers.',
    popularRoutes: ['Hyderabad (Telangana)', 'Bengaluru (Karnataka)', 'Chennai (Tamil Nadu)', 'Bhubaneswar / Cuttack (Odisha)', 'Vijayawada (AP)', 'Pune / Mumbai (Maharashtra)']
  }
];
