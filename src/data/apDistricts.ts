export interface APDistrict {
  id: string;
  name: string;
  region: 'North Coastal' | 'Coastal Andhra' | 'Rayalaseema';
  hub: string;
  cities: string[];
  pickupTime: string;
  available: boolean;
  coordinates: { lat: number; lng: number };
}

export const apDistricts: APDistrict[] = [
  {
    id: 'vzm',
    name: 'Vizianagaram',
    region: 'North Coastal',
    hub: 'District Headquarters (Primary Fleet Base)',
    cities: [
      'Vizianagaram Town',
      'Cantonment',
      'Ring Road',
      'Collectorate Junction',
      'Phool Baugh',
      'Balaji Nagar',
      'Kothavalasa',
      'Bobbili',
      'Nellimarla',
      'Rajam',
      'Cheepurupalli',
      'Gajapathinagaram',
      'S.Kota (Srungavarapukota)',
      'Bhogapuram',
      'Pusapatirega'
    ],
    pickupTime: '30 - 60 Mins',
    available: true,
    coordinates: { lat: 18.105076, lng: 83.3949883 }
  },
  {
    id: 'vskp',
    name: 'Visakhapatnam (Vizag)',
    region: 'North Coastal',
    hub: 'Greater Visakhapatnam & Coastal Belt',
    cities: [
      'Vizag City Center',
      'Dwaraka Nagar',
      'MVP Colony',
      'Madhurawada',
      'Gajuwaka',
      'Rushikonda',
      'Pendurthi',
      'Seethammadhara',
      'Jagadamba Junction',
      'Kurmannapalem',
      'Steel Plant Township',
      'Gopalapatnam',
      'Simhachalam',
      'Bheemunipatnam (Bheemili)'
    ],
    pickupTime: '1 - 2 Hours',
    available: true,
    coordinates: { lat: 17.6868, lng: 83.2185 }
  },
  {
    id: 'sklm',
    name: 'Srikakulam',
    region: 'North Coastal',
    hub: 'North Coastal Border Corridor',
    cities: [
      'Srikakulam Town',
      'Amadalavalasa',
      'Narasannapeta',
      'Palasa-Kasibugga',
      'Sompeta',
      'Tekkali',
      'Itchapuram',
      'Ponduru',
      'Rajam'
    ],
    pickupTime: '2 - 3 Hours',
    available: true,
    coordinates: { lat: 18.2969, lng: 83.8968 }
  },
  {
    id: 'pvm',
    name: 'Parvathipuram Manyam',
    region: 'North Coastal',
    hub: 'Manyam Agency & Valley Hub',
    cities: [
      'Parvathipuram',
      'Salur',
      'Palakonda',
      'Kurupam',
      'Gummalaxmipuram',
      'Makkuva',
      'Seethanagaram',
      'Komarada'
    ],
    pickupTime: '1 - 2 Hours',
    available: true,
    coordinates: { lat: 18.7758, lng: 83.4286 }
  },
  {
    id: 'akp',
    name: 'Anakapalli',
    region: 'North Coastal',
    hub: 'Industrial & Jaggery Corridor',
    cities: [
      'Anakapalli Town',
      'Chodavaram',
      'Yelamanchili',
      'Narsipatnam',
      'Payakaraopeta',
      'Kasimkota',
      'Atchutapuram SEZ',
      'Parawada'
    ],
    pickupTime: '2 - 3 Hours',
    available: true,
    coordinates: { lat: 17.6913, lng: 83.0039 }
  },
  {
    id: 'asr',
    name: 'Alluri Sitharama Raju (ASR)',
    region: 'North Coastal',
    hub: 'Ghats & Tribal Agency Belt',
    cities: [
      'Paderu',
      'Araku Valley',
      'Rampachodavaram',
      'Chintapalle',
      'Maredumilli',
      'Ananthagiri',
      'Addateegala'
    ],
    pickupTime: '3 - 4 Hours',
    available: true,
    coordinates: { lat: 18.0833, lng: 82.6667 }
  },
  {
    id: 'kkd',
    name: 'Kakinada',
    region: 'Coastal Andhra',
    hub: 'Port City & Fertilizer Hub',
    cities: [
      'Kakinada Smart City',
      'Samalkota',
      'Pithapuram',
      'Peddapuram',
      'Tuni',
      'Annavaram',
      'Karapa',
      'Thallarevu',
      'Gollaprolu'
    ],
    pickupTime: '3 - 4 Hours',
    available: true,
    coordinates: { lat: 16.9891, lng: 82.2475 }
  },
  {
    id: 'eg',
    name: 'East Godavari',
    region: 'Coastal Andhra',
    hub: 'Cultural Capital of Andhra',
    cities: [
      'Rajahmundry (Rajamahendravaram)',
      'Kovvur',
      'Nidadavole',
      'Anaparthi',
      'Korukonda',
      'Devarapalle',
      'Gokavaram'
    ],
    pickupTime: '4 - 5 Hours',
    available: true,
    coordinates: { lat: 17.0005, lng: 81.8040 }
  },
  {
    id: 'knm',
    name: 'Dr. B.R. Ambedkar Konaseema',
    region: 'Coastal Andhra',
    hub: 'Delta & River Basin Belt',
    cities: [
      'Amalapuram',
      'Ravulapalem',
      'Razole',
      'Ramachandrapuram',
      'Mandapeta',
      'Mummidivaram',
      'Kothapeta',
      'Allavaram'
    ],
    pickupTime: '4 - 5 Hours',
    available: true,
    coordinates: { lat: 16.5787, lng: 82.0061 }
  },
  {
    id: 'wg',
    name: 'West Godavari',
    region: 'Coastal Andhra',
    hub: 'Aqua & Rice Bowl Hub',
    cities: [
      'Bhimavaram',
      'Tadepalligudem',
      'Tanuku',
      'Palakollu',
      'Narasapuram',
      'Akividu',
      'Undi',
      'Penumantra'
    ],
    pickupTime: '5 - 6 Hours',
    available: true,
    coordinates: { lat: 16.5449, lng: 81.5212 }
  },
  {
    id: 'elr',
    name: 'Eluru',
    region: 'Coastal Andhra',
    hub: 'Carpet & Kolleru Lake Hub',
    cities: [
      'Eluru City',
      'Jangareddygudem',
      'Nuzvid',
      'Chintalapudi',
      'Kaikaluru',
      'Denduluru',
      'Kamavarapukota',
      'Polavaram'
    ],
    pickupTime: '5 - 6 Hours',
    available: true,
    coordinates: { lat: 16.7107, lng: 81.0952 }
  },
  {
    id: 'krishna',
    name: 'Krishna',
    region: 'Coastal Andhra',
    hub: 'Historic Port & Temple City',
    cities: [
      'Machilipatnam (Bandar)',
      'Gudivada',
      'Vuyyuru',
      'Avanigadda',
      'Pamarru',
      'Pedana',
      'Challapalli',
      'Bantumilli'
    ],
    pickupTime: '6 - 7 Hours',
    available: true,
    coordinates: { lat: 16.1875, lng: 81.1389 }
  },
  {
    id: 'ntr',
    name: 'NTR District (Vijayawada)',
    region: 'Coastal Andhra',
    hub: 'Commercial Capital & Rail Crossroads',
    cities: [
      'Vijayawada Urban',
      'Benz Circle',
      'Ibrahimpatnam',
      'Mylavaram',
      'Jaggaiahpet',
      'Nandigama',
      'Tiruvuru',
      'Kondapalli Industrial'
    ],
    pickupTime: '6 - 7 Hours',
    available: true,
    coordinates: { lat: 16.5062, lng: 80.6480 }
  },
  {
    id: 'gnt',
    name: 'Guntur',
    region: 'Coastal Andhra',
    hub: 'Education, Chilli & Capital Corridor',
    cities: [
      'Guntur City',
      'Tenali',
      'Mangalagiri',
      'Tadepalli',
      'Ponnur',
      'Tadikonda',
      'Chebrolu',
      'Amaravati'
    ],
    pickupTime: '7 - 8 Hours',
    available: true,
    coordinates: { lat: 16.3067, lng: 80.4365 }
  },
  {
    id: 'bpt',
    name: 'Bapatla',
    region: 'Coastal Andhra',
    hub: 'Coastal Weaving & Beach Corridor',
    cities: [
      'Bapatla Town',
      'Chirala',
      'Repalle',
      'Addanki',
      'Parchur',
      'Vetapalem',
      'Karamchedu'
    ],
    pickupTime: '8 - 9 Hours',
    available: true,
    coordinates: { lat: 15.9042, lng: 80.4674 }
  },
  {
    id: 'pln',
    name: 'Palnadu',
    region: 'Coastal Andhra',
    hub: 'Historic Palnadu & Cement Corridor',
    cities: [
      'Narasaraopet',
      'Sattenapalle',
      'Vinukonda',
      'Piduguralla',
      'Chilakaluripet',
      'Macherla',
      'Gurazala'
    ],
    pickupTime: '8 - 9 Hours',
    available: true,
    coordinates: { lat: 16.2361, lng: 80.0499 }
  },
  {
    id: 'pkm',
    name: 'Prakasam',
    region: 'Coastal Andhra',
    hub: 'Granite & Tobacco Corridor',
    cities: [
      'Ongole City',
      'Markapur',
      'Giddalur',
      'Kanigiri',
      'Podili',
      'Kandukur',
      'Chimakurthy',
      'Cumbum'
    ],
    pickupTime: '9 - 10 Hours',
    available: true,
    coordinates: { lat: 15.5057, lng: 80.0499 }
  },
  {
    id: 'nlr',
    name: 'SPSR Nellore',
    region: 'Coastal Andhra',
    hub: 'Southern Gateway & Space Corridor',
    cities: [
      'Nellore City',
      'Kavali',
      'Gudur',
      'Venkatagiri',
      'Kovur',
      'Atmakur',
      'Sullurpeta',
      'Naidupeta'
    ],
    pickupTime: '10 - 12 Hours',
    available: true,
    coordinates: { lat: 14.4426, lng: 79.9865 }
  },
  {
    id: 'tpt',
    name: 'Tirupati',
    region: 'Rayalaseema',
    hub: 'Spiritual Capital & Aerospace Hub',
    cities: [
      'Tirupati Urban',
      'Tirumala',
      'Srikalahasti',
      'Chandragiri',
      'Puttur',
      'Renigunta',
      'Nagari',
      'Venkatagiri',
      'Sri City SEZ'
    ],
    pickupTime: '12 - 14 Hours',
    available: true,
    coordinates: { lat: 13.6288, lng: 79.4192 }
  },
  {
    id: 'ctr',
    name: 'Chittoor',
    region: 'Rayalaseema',
    hub: 'Mango & Dairy Border Hub',
    cities: [
      'Chittoor Town',
      'Palamaner',
      'Kuppam',
      'Punganur',
      'Bangarupalem',
      'Nagari',
      'Kanipakam'
    ],
    pickupTime: '14 - 16 Hours',
    available: true,
    coordinates: { lat: 13.2172, lng: 79.1003 }
  },
  {
    id: 'anm',
    name: 'Annamayya',
    region: 'Rayalaseema',
    hub: 'Tomato & Silk Basin',
    cities: [
      'Rayachoti',
      'Madanapalle',
      'Rajampet',
      'Railway Kodur',
      'Pileru',
      'Valmikipuram',
      'B.Kothakota'
    ],
    pickupTime: '14 - 16 Hours',
    available: true,
    coordinates: { lat: 14.0560, lng: 78.7520 }
  },
  {
    id: 'kdp',
    name: 'YSR Kadapa',
    region: 'Rayalaseema',
    hub: 'Mining & Heritage City',
    cities: [
      'Kadapa City',
      'Proddatur',
      'Pulivendula',
      'Jammalamadugu',
      'Badvel',
      'Kamalapuram',
      'Mydukur',
      'Rayachoty Road'
    ],
    pickupTime: '12 - 14 Hours',
    available: true,
    coordinates: { lat: 14.4673, lng: 78.8242 }
  },
  {
    id: 'knl',
    name: 'Kurnool',
    region: 'Rayalaseema',
    hub: 'Gateway to Rayalaseema',
    cities: [
      'Kurnool City',
      'Adoni',
      'Yemmiganur',
      'Kodumur',
      'Alur',
      'Pattikonda',
      'Gudur'
    ],
    pickupTime: '14 - 16 Hours',
    available: true,
    coordinates: { lat: 15.8281, lng: 78.0373 }
  },
  {
    id: 'ndl',
    name: 'Nandyal',
    region: 'Rayalaseema',
    hub: 'Nallamala & Temple Corridor',
    cities: [
      'Nandyal Town',
      'Allagadda',
      'Banaganapalle',
      'Dhone',
      'Nandikotkur',
      'Atmakur',
      'Srisailam Devasthanam',
      'Koilkuntla'
    ],
    pickupTime: '14 - 16 Hours',
    available: true,
    coordinates: { lat: 15.4770, lng: 78.4836 }
  },
  {
    id: 'atp',
    name: 'Ananthapuramu',
    region: 'Rayalaseema',
    hub: 'Groundnut & Solar Energy Hub',
    cities: [
      'Anantapur City',
      'Guntakal Junction',
      'Tadipatri',
      'Dharmavaram',
      'Uravakonda',
      'Rayadurg',
      'Singanamala'
    ],
    pickupTime: '16 - 18 Hours',
    available: true,
    coordinates: { lat: 14.6819, lng: 77.6006 }
  },
  {
    id: 'sss',
    name: 'Sri Sathya Sai',
    region: 'Rayalaseema',
    hub: 'Spiritual & Automotive Corridor (KIA Belt)',
    cities: [
      'Puttaparthi',
      'Hindupur',
      'Kadiri',
      'Penukonda (KIA City)',
      'Madakasira',
      'Bukkapatnam',
      'Gorantla'
    ],
    pickupTime: '16 - 18 Hours',
    available: true,
    coordinates: { lat: 14.1652, lng: 77.8105 }
  }
];

export const majorInterstateCorridors = [
  { name: 'Hyderabad (Telangana)', transitTime: '24 - 48 Hours', regularTrips: 'Daily' },
  { name: 'Bengaluru (Karnataka)', transitTime: '48 - 72 Hours', regularTrips: 'Daily' },
  { name: 'Chennai (Tamil Nadu)', transitTime: '36 - 48 Hours', regularTrips: 'Daily' },
  { name: 'Bhubaneswar / Cuttack (Odisha)', transitTime: '24 Hours', regularTrips: 'Daily' },
  { name: 'Vijayawada (AP Central)', transitTime: 'Same Day / 12 Hours', regularTrips: 'Multiple Daily' },
  { name: 'Pune & Mumbai (Maharashtra)', transitTime: '3 - 5 Days', regularTrips: 'Weekly 3x' },
  { name: 'Kolkata (West Bengal)', transitTime: '48 - 72 Hours', regularTrips: 'Weekly 4x' },
  { name: 'Delhi NCR (North India)', transitTime: '4 - 6 Days', regularTrips: 'Scheduled FTL' }
];
