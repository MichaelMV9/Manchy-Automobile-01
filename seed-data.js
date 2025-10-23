import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://0ec90b57d6e95fcbda19832f.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJib2x0IiwicmVmIjoiMGVjOTBiNTdkNmU5NWZjYmRhMTk4MzJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4ODE1NzQsImV4cCI6MTc1ODg4MTU3NH0.9I8-U0x86Ak8t2DGaIk0HfvTSLsAyzdnz-Nw00mMkKw';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const staffData = [
  {
    full_name: 'Emmanuel Adeyemi',
    position: 'Chief Executive Officer',
    email: 'ceo@manchyauto.com',
    photo_url: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    display_order: 1
  },
  {
    full_name: 'Oluwaseun Oladipo',
    position: 'Operational Manager',
    email: 'operations@manchyauto.com',
    photo_url: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    display_order: 2
  },
  {
    full_name: 'Chioma Nwosu',
    position: 'Sales Manager',
    email: 'sales@manchyauto.com',
    photo_url: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    display_order: 3
  },
  {
    full_name: 'Taiwo Johnson',
    position: 'Accountant',
    email: 'accounts@manchyauto.com',
    photo_url: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
    display_order: 4
  },
  {
    full_name: 'Blessing Okafor',
    position: 'Personal Assistant',
    email: 'pa@manchyauto.com',
    photo_url: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=400',
    display_order: 5
  }
];

const carsData = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 15500000,
    mileage: 45000,
    condition: 'Foreign Used',
    description: 'Well-maintained Toyota Camry with excellent fuel efficiency. Perfect for city and highway driving. Complete service history available.',
    features: ['Leather Seats', 'Sunroof', 'Backup Camera', 'Bluetooth', 'Cruise Control', 'Alloy Wheels'],
    images: ['https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Mercedes-Benz',
    model: 'GLE 350',
    year: 2019,
    price: 35000000,
    mileage: 38000,
    condition: 'Foreign Used',
    description: 'Luxury SUV with premium features and exceptional performance. Meticulously maintained with full service records.',
    features: ['Premium Sound System', 'Panoramic Sunroof', '360 Camera', 'Heated Seats', 'Navigation System', 'LED Headlights'],
    images: ['https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Lexus',
    model: 'RX 350',
    year: 2021,
    price: 38500000,
    mileage: 25000,
    condition: 'Foreign Used',
    description: 'Premium luxury crossover with advanced safety features and superior comfort. Like new condition.',
    features: ['Adaptive Cruise Control', 'Lane Departure Warning', 'Premium Audio', 'Power Liftgate', 'Wireless Charging'],
    images: ['https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Honda',
    model: 'Accord',
    year: 2019,
    price: 12800000,
    mileage: 52000,
    condition: 'Foreign Used',
    description: 'Reliable and efficient sedan with spacious interior. Excellent condition with regular maintenance.',
    features: ['Apple CarPlay', 'Android Auto', 'Lane Keep Assist', 'Adaptive Cruise Control', 'Power Seats'],
    images: ['https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Toyota',
    model: 'Highlander',
    year: 2020,
    price: 28500000,
    mileage: 35000,
    condition: 'Foreign Used',
    description: 'Spacious 7-seater SUV perfect for families. Excellent safety ratings and reliability.',
    features: ['Third Row Seating', 'Power Tailgate', 'Blind Spot Monitor', 'Rear Cross Traffic Alert', 'Push Start'],
    images: ['https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'BMW',
    model: 'X5',
    year: 2018,
    price: 32000000,
    mileage: 48000,
    condition: 'Foreign Used',
    description: 'Powerful luxury SUV with sporty handling and premium amenities. Well-maintained and pristine condition.',
    features: ['Sport Package', 'Premium Wheels', 'Harman Kardon Sound', 'Gesture Control', 'Heads-Up Display'],
    images: ['https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    price: 11500000,
    mileage: 18000,
    condition: 'Foreign Used',
    description: 'Nearly new compact sedan with excellent fuel economy. Perfect first car or daily commuter.',
    features: ['Lane Tracing Assist', 'Pre-Collision System', 'Automatic High Beams', 'Wireless Charging', 'Smart Entry'],
    images: ['https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2020,
    price: 27500000,
    mileage: 30000,
    condition: 'Foreign Used',
    description: 'Elegant luxury sedan with cutting-edge technology. Impeccably maintained with full service history.',
    features: ['MBUX Infotainment', 'Burmester Sound', 'Active Brake Assist', 'Keyless Go', 'LED Interior Lighting'],
    images: ['https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Lexus',
    model: 'ES 350',
    year: 2019,
    price: 24000000,
    mileage: 42000,
    condition: 'Foreign Used',
    description: 'Refined luxury sedan known for reliability and comfort. Exceptionally smooth and quiet ride.',
    features: ['Mark Levinson Audio', 'Triple-Beam LED Headlamps', 'Memory Seats', 'Power Moonroof', 'Smart Key'],
    images: ['https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Honda',
    model: 'CR-V',
    year: 2020,
    price: 16500000,
    mileage: 38000,
    condition: 'Foreign Used',
    description: 'Versatile compact SUV with ample cargo space and advanced safety features. Great family vehicle.',
    features: ['Honda Sensing', 'Power Moonroof', 'Hands-Free Liftgate', 'Remote Start', 'Dual-Zone Climate'],
    images: ['https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Toyota',
    model: 'RAV4',
    year: 2021,
    price: 21500000,
    mileage: 22000,
    condition: 'Foreign Used',
    description: 'Popular compact SUV with excellent resale value. Great combination of efficiency and capability.',
    features: ['All-Wheel Drive', 'Power Liftgate', 'Dynamic Radar Cruise', 'Bird\'s Eye View Camera', 'Wireless CarPlay'],
    images: ['https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Audi',
    model: 'Q7',
    year: 2019,
    price: 36500000,
    mileage: 45000,
    condition: 'Foreign Used',
    description: 'Sophisticated three-row luxury SUV with advanced technology and refined interior. Premium driving experience.',
    features: ['Virtual Cockpit', 'Bang & Olufsen Audio', 'Adaptive Air Suspension', 'Matrix LED Headlights', 'Massage Seats'],
    images: ['https://images.pexels.com/photos/1209999/pexels-photo-1209999.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Toyota',
    model: 'Venza',
    year: 2021,
    price: 25500000,
    mileage: 15000,
    condition: 'Foreign Used',
    description: 'Modern hybrid SUV with stunning design and fuel efficiency. Almost brand new condition.',
    features: ['Hybrid Engine', 'Star Gaze Roof', 'JBL Premium Audio', 'Digital Rearview Mirror', 'Qi Wireless Charging'],
    images: ['https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2020,
    price: 42000000,
    mileage: 28000,
    condition: 'Foreign Used',
    description: 'Executive luxury sedan with state-of-the-art technology. The epitome of Mercedes-Benz engineering.',
    features: ['MBUX AR Navigation', 'Energizing Comfort Control', 'Multibeam LED', 'Air Balance Package', '64-Color Ambient'],
    images: ['https://images.pexels.com/photos/3874419/pexels-photo-3874419.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Lexus',
    model: 'GX 460',
    year: 2018,
    price: 33500000,
    mileage: 55000,
    condition: 'Foreign Used',
    description: 'Rugged luxury SUV built for both city streets and off-road adventures. Legendary reliability.',
    features: ['Off-Road Package', 'Crawl Control', 'Multi-Terrain Select', 'Premium Audio', 'Third Row Seating'],
    images: ['https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Honda',
    model: 'Pilot',
    year: 2020,
    price: 23500000,
    mileage: 32000,
    condition: 'Foreign Used',
    description: 'Spacious three-row SUV with excellent versatility. Perfect for large families and road trips.',
    features: ['8-Passenger Seating', 'Honda Sensing Suite', 'Tri-Zone Climate', 'Cabin Watch', 'CabinTalk'],
    images: ['https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Toyota',
    model: 'Sienna',
    year: 2021,
    price: 27000000,
    mileage: 12000,
    condition: 'Foreign Used',
    description: 'Premium hybrid minivan with all-wheel drive. Ultimate family vehicle with exceptional fuel economy.',
    features: ['Hybrid AWD', '8-Passenger', 'Power Sliding Doors', 'Entertainment System', 'Super Long Slide Seats'],
    images: ['https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'BMW',
    model: '3 Series',
    year: 2019,
    price: 22000000,
    mileage: 40000,
    condition: 'Foreign Used',
    description: 'Sport luxury sedan with dynamic handling. The ultimate driving machine for enthusiasts.',
    features: ['M Sport Package', 'Driver Assistance Plus', 'Harman Kardon', 'Adaptive M Suspension', 'Shadowline Trim'],
    images: ['https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Mercedes-Benz',
    model: 'GLC 300',
    year: 2021,
    price: 38000000,
    mileage: 18000,
    condition: 'Foreign Used',
    description: 'Compact luxury SUV with elegant design and advanced features. Nearly new with low mileage.',
    features: ['AMG Line', 'Premium Package', 'Panorama Roof', 'Keyless Go', 'Parking Pilot'],
    images: ['https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  },
  {
    make: 'Lexus',
    model: 'NX 300',
    year: 2020,
    price: 26500000,
    mileage: 28000,
    condition: 'Foreign Used',
    description: 'Compact luxury crossover with bold styling and refined interior. Excellent reliability record.',
    features: ['F Sport Package', 'Mark Levinson Audio', 'Navigation', 'Power Moonroof', 'Blind Spot Monitor'],
    images: ['https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800'],
    available: true
  }
];

async function seedDatabase() {
  console.log('Starting database seeding...');

  console.log('Inserting staff data...');
  const { data: staffResult, error: staffError } = await supabase
    .from('staff')
    .insert(staffData)
    .select();

  if (staffError) {
    console.error('Error inserting staff:', staffError);
  } else {
    console.log(`Successfully inserted ${staffResult.length} staff members`);
  }

  console.log('Inserting car data...');
  const { data: carsResult, error: carsError } = await supabase
    .from('cars')
    .insert(carsData)
    .select();

  if (carsError) {
    console.error('Error inserting cars:', carsError);
  } else {
    console.log(`Successfully inserted ${carsResult.length} cars`);
  }

  console.log('Database seeding completed!');
}

seedDatabase();
