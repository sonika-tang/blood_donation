import { useState } from 'react';
import { Link } from 'react-router-dom';

const donationHistory = [
  {
    id: 1,
    date: "2024-01-15",
    location: "Downtown Medical Center",
    type: "Whole Blood",
    volume: "450ml",
    status: "Completed"
  },
  {
    id: 2,
    date: "2023-10-20",
    location: "Northside Community Hospital",
    type: "Plasma",
    volume: "600ml",
    status: "Completed"
  },
  {
    id: 3,
    date: "2023-07-12",
    location: "West End Clinic",
    type: "Whole Blood",
    volume: "450ml",
    status: "Completed"
  },
  {
    id: 4,
    date: "2023-04-08",
    location: "Downtown Medical Center",
    type: "Platelets",
    volume: "300ml",
    status: "Completed"
  },
  {
    id: 5,
    date: "2023-01-25",
    location: "Northside Community Hospital",
    type: "Whole Blood",
    volume: "450ml",
    status: "Deferred"
  },
  {
    id: 6,
    date: "2022-11-18",
    location: "Downtown Medical Center",
    type: "Whole Blood",
    volume: "450ml",
    status: "Completed"
  }
];

const upcomingAppointments = [
  {
    id: 1,
    date: "2024-03-25",
    time: "10:00 AM",
    type: "Whole Blood Donation",
    location: "Downtown Medical Center"
  }
];

const statusColors = {
  "Completed": "text-green-600 bg-green-100",
  "Deferred": "text-red-600 bg-red-100",
  "Scheduled": "text-blue-600 bg-blue-100"
};

const donationTypeColors = {
  "Whole Blood": "bg-red-100 text-red-800",
  "Plasma": "bg-yellow-100 text-yellow-800",
  "Platelets": "bg-blue-100 text-blue-800"
};

const History = () => {
  const [activeTab, setActiveTab] = useState('donations');
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Your Donation History</h1>
        <p className="text-gray-600">Track your life-saving contributions and see the impact you&apos;ve made.</p>
      </div>

      <div className="mb-8">
        <nav className="flex space-x-2">
          <button
            className={`px-5 py-3 rounded-lg text-sm font-medium ${activeTab === 'donations' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('donations')}
          >
            Book New Donation
          </button>
          <button
            className={`px-5 py-3 rounded-lg text-sm font-medium ${activeTab === 'appointments' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('appointments')}
          >
            Upcoming Appointments
          </button>
          <button
            className={`px-5 py-3 rounded-lg text-sm font-medium ${activeTab === 'eligibility' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            onClick={() => setActiveTab('eligibility')}
          >
            Eligibility Check
          </button>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">6</h3>
              <p className="text-sm text-gray-500">Total Donations</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-500">Last donation: January 15, 2024</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">15</h3>
              <p className="text-sm text-gray-500">Lives Helped</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            <Link to="/impact" className="text-red-600 hover:text-red-500">See your impact →</Link>
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
              <div className="h-6 w-6 text-center font-bold text-red-600">O+</div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Blood Type</h3>
              <p className="text-sm text-gray-500">Universal Donor</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-500">Your blood type is in high demand!</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Next Eligible</h3>
          <span className="text-sm font-medium text-gray-500">Whole Blood</span>
        </div>
        <div className="flex items-center">
          <svg className="h-6 w-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-lg font-medium">March 20, 2024</span>
        </div>
      </div>

      {activeTab === 'appointments' && upcomingAppointments.length > 0 && (
        <div className="bg-white rounded-lg shadow mb-10">
          <div className="p-6 border-b">
            <h3 className="text-lg font-medium text-gray-900">Upcoming Appointments</h3>
          </div>
          <div className="p-6">
            {upcomingAppointments.map(appointment => (
              <div key={appointment.id} className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b last:border-b-0 last:mb-0 last:pb-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 rounded-md p-2 mr-4">
                    <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-gray-900">{appointment.type}</h4>
                    <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
                    <p className="text-sm text-gray-500">{appointment.location}</p>
                  </div>
                </div>
                <div className="flex space-x-2 mt-3 md:mt-0">
                  <button className="px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm">
                    Reschedule
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-sm">
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">History</h3>
          <div className="flex space-x-2">
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-sm">
                <option>All Types</option>
                <option>Whole Blood</option>
                <option>Plasma</option>
                <option>Platelets</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="appearance-none pl-3 pr-8 py-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-sm">
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volume
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {donationHistory.map(donation => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(donation.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {donation.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${donationTypeColors[donation.type]}`}>
                      {donation.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {donation.volume}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[donation.status]}`}>
                      {donation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button className="text-red-600 hover:text-red-900">Certificate</button>
                    <button className="text-red-600 hover:text-red-900">Location</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t flex justify-center space-x-4">
          <button className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Schedule Next Donation
          </button>
          <button className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Report Issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;