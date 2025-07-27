export interface BloodRequest {
  id: string;
  patientName: string;
  bloodType: string;
  unitsNeeded: number;
  urgency: 'Low' | 'Medium' | 'High' | 'Critical';
  hospital: string;
  contactNumber: string;
  requestDate: string;
  status: 'Pending' | 'Fulfilled' | 'Cancelled';
}

export interface BloodInventory {
  id: string;
  bloodType: string;
  unitsAvailable: number;
  expiryDate: string;
  donationDate: string;
  status: 'Available' | 'Reserved' | 'Expired';
}

export interface DonationHistory {
  id: string;
  donorName: string;
  bloodType: string;
  unitsdonated: number;
  donationDate: string;
  location: string;
  nextEligibleDate: string;
  status: 'Completed' | 'Scheduled' | 'Cancelled';
}

export interface EducationalResource {
  id: string;
  title: string;
  category: 'Benefits' | 'Process' | 'Eligibility' | 'Safety' | 'FAQ';
  content: string;
  imageUrl?: string;
  readTime: string;
}