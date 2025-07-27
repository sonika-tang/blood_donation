import { useState } from 'react';
import { Link } from 'react-router-dom';

const Request = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    bloodType: '',
    units: '',
    urgencyLevel: '',
    hospitalName: '',
    dateNeeded: '',
    note: '',
    termsAccepted: false,
    privacyAccepted: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
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

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-green-600 mb-6">
            <svg className="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted Successfully</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your blood request. Our team will review your request and contact you shortly.
          </p>
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
        <h1 className="text-3xl font-bold text-red-600 mb-2">Request For Blood</h1>
        <p className="text-gray-600">In the hardest moments, help is closer than you think. Ask, and we&apos;ll reach out.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
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

        <div className="mb-6">
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

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Blood Type Needed <span className="text-red-600">*</span>
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

        <div className="mb-6">
          <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">
            Units Needed <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            id="units"
            name="units"
            min="1"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Enter number of units needed"
            value={formData.units}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Urgency Level <span className="text-red-600">*</span>
          </label>
          <div className="space-y-2">
            <div className={`border rounded-md p-3 ${formData.urgencyLevel === 'emergency' ? 'bg-red-50 border-red-300' : 'hover:bg-gray-50'}`}>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="urgencyLevel"
                  value="emergency"
                  checked={formData.urgencyLevel === 'emergency'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Emergency</span>
              </label>
            </div>
            
            <div className={`border rounded-md p-3 ${formData.urgencyLevel === 'within24h' ? 'bg-red-50 border-red-300' : 'hover:bg-gray-50'}`}>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="urgencyLevel"
                  value="within24h"
                  checked={formData.urgencyLevel === 'within24h'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Within 24h</span>
              </label>
            </div>
            
            <div className={`border rounded-md p-3 ${formData.urgencyLevel === 'within3days' ? 'bg-red-50 border-red-300' : 'hover:bg-gray-50'}`}>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="urgencyLevel"
                  value="within3days"
                  checked={formData.urgencyLevel === 'within3days'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Within 3 days</span>
              </label>
            </div>
            
            <div className={`border rounded-md p-3 ${formData.urgencyLevel === 'notUrgent' ? 'bg-red-50 border-red-300' : 'hover:bg-gray-50'}`}>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="urgencyLevel"
                  value="notUrgent"
                  checked={formData.urgencyLevel === 'notUrgent'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Not urgent</span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 mb-1">
              Hospital Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="hospitalName"
              name="hospitalName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Enter the name of your hospital"
              value={formData.hospitalName}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label htmlFor="dateNeeded" className="block text-sm font-medium text-gray-700 mb-1">
              Date Needed <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="dateNeeded"
              name="dateNeeded"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              value={formData.dateNeeded}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
            Additional Note
          </label>
          <textarea
            id="note"
            name="note"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
            placeholder="Enter your note"
            value={formData.note}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start">
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
              I agree to the <Link to="/terms" className="text-red-600 hover:text-red-500">Terms and Conditions</Link> <span className="text-red-600">*</span>
            </label>
          </div>
          
          <div className="flex items-start">
            <input
              id="privacy"
              name="privacyAccepted"
              type="checkbox"
              required
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
              checked={formData.privacyAccepted}
              onChange={handleInputChange}
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
              I acknowledge the <Link to="/privacy" className="text-red-600 hover:text-red-500">Privacy Policy</Link> <span className="text-red-600">*</span>
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Request;