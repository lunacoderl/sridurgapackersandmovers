export interface CompanyProfile {
  name: string;
  tagline: string;
  establishedYear: number;
  rating: number;
  reviewCount: number;
  phone: string;
  phoneRaw: string;
  phone2: string;
  phone2Raw: string;
  phones: string[];
  phonesRaw: string[];
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  googleMapsUrl: string;
  workingHours: string;
  serviceHub: string;
  servicingLocations: string[];
}
