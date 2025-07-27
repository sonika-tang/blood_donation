import { useState } from 'react';
import { Link } from 'react-router-dom';

const Donation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    bloodType: '',
    previousDonation: '',
    medicalConditions: [],
    medications: '',
    allergies: '',
    donationCenter: '',
    appointmentDate: '',
    appointmentTime: '',
    termsAccepted: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'medicalConditions') {
      const conditions = [...formData.medicalConditions];
      if (checked) {
        conditions.push(value);
      } else {
        const index = conditions.indexOf(value);
        if (index !== -1) {
          conditions.splice(index, 1);
        }
      }
      setFormData({
        ...formData,
        medicalConditions: conditions
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleBloodTypeSelect = (type) => {
    setFormData({
      ...formData,
      bloodType: type
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const donationCenters = [
    "National Blood Transfusion Centre (NBTC)",
    "Calmette Hospital – Phnom Penh",
    "Khmer-Soviet Friendship Hospital",
    "Kantha Bopha Children's Hospital",
    "Sihanouk Hospital Center of HOPE"
  ];

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
  ];

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-green-600 mb-6">
            <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Appointment Scheduled Successfully</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your willingness to donate blood. Your donation will help save lives.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Appointment Details:</h3>
            <p><strong>Date:</strong> {formData.appointmentDate}</p>
            <p><strong>Time:</strong> {formData.appointmentTime}</p>
            <p><strong>Location:</strong> {formData.donationCenter}</p>
          </div>
          <Link to="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Donate Blood</h1>
        <p className="text-gray-600">Your donation can save up to three lives. Schedule an appointment today.</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Before You Donate</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Get plenty of sleep the night before</li>
          <li>Eat a healthy meal before donation</li>
          <li>Drink plenty of fluids</li>
          <li>Bring a valid ID</li>
          <li>Know your medications</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-6 pb-4 border-b">Personal Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              Gender <span className="text-red-600">*</span>
            </label>
            <select
              id="gender"
              name="gender"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Your Blood Type <span className="text-red-600">*</span>
            </label>
            <div className="grid grid-cols-4 gap-2">
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={`py-2 px-4 border ${formData.bloodType === type ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'} rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
                  onClick={() => handleBloodTypeSelect(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium text-gray-900 my-6 pt-4 pb-4 border-t border-b">Health Information</h2>

        <div className="mb-6">
          <label htmlFor="previousDonation" className="block text-sm font-medium text-gray-700 mb-1">
            Have you donated before? <span className="text-red-600">*</span>
          </label>
          <select
            id="previousDonation"
            name="previousDonation"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            value={formData.previousDonation}
            onChange={handleInputChange}
          >
            <option value="" disabled>Please select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you have any of these medical conditions? (Select all that apply)
          </label>
          <div className="space-y-2">
            {['Diabetes', 'Heart Disease', 'Hepatitis', 'HIV/AIDS', 'Anemia', 'Cancer', 'Hypertension'].map((condition) => (
              <div key={condition} className="flex items-start">
                <input
                  id={`condition-${condition}`}
                  name="medicalConditions"
                  type="checkbox"
                  value={condition}
                  checked={formData.medicalConditions.includes(condition)}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor={`condition-${condition}`} className="ml-2 block text-sm text-gray-700">
                  {condition}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="medications" className="block text-sm font-medium text-gray-700 mb-1">
            Are you currently taking any medications?
          </label>
          <textarea
            id="medications"
            name="medications"
            rows="2"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Please list any medications you are currently taking"
            value={formData.medications}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-1">
            Do you have any allergies?
          </label>
          <textarea
            id="allergies"
            name="allergies"
            rows="2"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Please list any allergies you have"
            value={formData.allergies}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <h2 className="text-lg font-medium text-gray-900 my-6 pt-4 pb-4 border-t border-b">Schedule Your Appointment</h2>

        <div className="mb-6">
          <label htmlFor="donationCenter" className="block text-sm font-medium text-gray-700 mb-1">
            Donation Center <span className="text-red-600">*</span>
          </label>
          <select
            id="donationCenter"
            name="donationCenter"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            value={formData.donationCenter}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select a donation center</option>
            {donationCenters.map((center) => (
              <option key={center} value={center}>{center}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              min={new Date().toISOString().split('T')[0]}
              value={formData.appointmentDate}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-1">
              Appointment Time <span className="text-red-600">*</span>
            </label>
            <select
              id="appointmentTime"
              name="appointmentTime"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              value={formData.appointmentTime}
              onChange={handleInputChange}
            >
              <option value="" disabled>Select a time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-start mb-6">
          <input
            id="terms"
            name="termsAccepted"
            type="checkbox"
            required
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
            I confirm that the information provided is accurate. I understand and agree to the <Link to="/terms" className="text-red-600 hover:text-red-500">donor eligibility criteria</Link> and consent to undergo the donation process. <span className="text-red-600">*</span>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Schedule Donation
          </button>
        </div>
      </form>
    </div>
  );
};

export default Donation;