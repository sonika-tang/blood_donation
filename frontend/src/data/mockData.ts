import { BloodRequest, BloodInventory, DonationHistory, EducationalResource } from '../types';

export const bloodRequests: BloodRequest[] = [
  {
    id: '1',
    patientName: 'John Smith',
    bloodType: 'O+',
    unitsNeeded: 2,
    urgency: 'Critical',
    hospital: 'City General Hospital',
    contactNumber: '+1-555-0123',
    requestDate: '2024-01-15',
    status: 'Pending'
  },
  {
    id: '2',
    patientName: 'Sarah Johnson',
    bloodType: 'A-',
    unitsNeeded: 1,
    urgency: 'High',
    hospital: 'Memorial Medical Center',
    contactNumber: '+1-555-0456',
    requestDate: '2024-01-14',
    status: 'Pending'
  },
  {
    id: '3',
    patientName: 'Michael Brown',
    bloodType: 'B+',
    unitsNeeded: 3,
    urgency: 'Medium',
    hospital: 'St. Mary\'s Hospital',
    contactNumber: '+1-555-0789',
    requestDate: '2024-01-13',
    status: 'Fulfilled'
  }
];

export const bloodInventory: BloodInventory[] = [
  {
    id: '1',
    bloodType: 'O+',
    unitsAvailable: 15,
    expiryDate: '2024-02-15',
    donationDate: '2024-01-10',
    status: 'Available'
  },
  {
    id: '2',
    bloodType: 'A+',
    unitsAvailable: 8,
    expiryDate: '2024-02-20',
    donationDate: '2024-01-12',
    status: 'Available'
  },
  {
    id: '3',
    bloodType: 'B-',
    unitsAvailable: 3,
    expiryDate: '2024-01-25',
    donationDate: '2024-01-05',
    status: 'Reserved'
  },
  {
    id: '4',
    bloodType: 'AB+',
    unitsAvailable: 12,
    expiryDate: '2024-02-10',
    donationDate: '2024-01-08',
    status: 'Available'
  }
];

export const donationHistory: DonationHistory[] = [
  {
    id: '1',
    donorName: 'Emily Davis',
    bloodType: 'O+',
    unitsdonated: 1,
    donationDate: '2024-01-10',
    location: 'Downtown Blood Center',
    nextEligibleDate: '2024-03-10',
    status: 'Completed'
  },
  {
    id: '2',
    donorName: 'Robert Wilson',
    bloodType: 'A+',
    unitsdonated: 1,
    donationDate: '2024-01-12',
    location: 'Community Health Center',
    nextEligibleDate: '2024-03-12',
    status: 'Completed'
  },
  {
    id: '3',
    donorName: 'Lisa Anderson',
    bloodType: 'B+',
    unitsdonated: 1,
    donationDate: '2024-01-20',
    location: 'Mobile Blood Drive',
    nextEligibleDate: '2024-03-20',
    status: 'Scheduled'
  }
];

export const educationalResources: EducationalResource[] = [
  {
    id: '1',
    title: 'Benefits of Blood Donation',
    category: 'Benefits',
    content: 'Blood donation provides numerous health benefits including reduced risk of heart disease, improved cardiovascular health, and the satisfaction of saving lives.',
    readTime: '3 min read'
  },
  {
    id: '2',
    title: 'The Donation Process',
    category: 'Process',
    content: 'Learn about the step-by-step process of blood donation, from registration to post-donation care.',
    readTime: '5 min read'
  },
  {
    id: '3',
    title: 'Eligibility Requirements',
    category: 'Eligibility',
    content: 'Understand the basic requirements for blood donation including age, weight, and health criteria.',
    readTime: '4 min read'
  },
  {
    id: '4',
    title: 'Safety Measures',
    category: 'Safety',
    content: 'All blood donations follow strict safety protocols to ensure donor and recipient safety.',
    readTime: '3 min read'
  }
];