import { useState } from 'react';

const inventoryData = [
  {
    id: 1,
    name: "National Blood Transfusion Centre (NBTC)",
    location: "Street 271, next to Khmer-Soviet Friendship Hospital, Phnom Penh",
    bloodTypes: [
      { type: "A+", units: "08", status: "Safe" },
      { type: "A-", units: "03", status: "Low" },
      { type: "B+", units: "12", status: "Safe" },
      { type: "B-", units: "02", status: "Critical Need" },
      { type: "AB+", units: "05", status: "Low" },
      { type: "AB-", units: "01", status: "Critical Need" },
      { type: "O+", units: "15", status: "Safe" },
      { type: "O-", units: "03", status: "Low" }
    ]
  },
  {
    id: 2,
    name: "Kantha Bopha Children's Hospital",
    location: "Near Wat Phnom, Phnom Penh",
    bloodTypes: [
      { type: "A+", units: "04", status: "Low" },
      { type: "A-", units: "01", status: "Critical Need" },
      { type: "B+", units: "06", status: "Safe" },
      { type: "B-", units: "01", status: "Critical Need" },
      { type: "AB+", units: "02", status: "Critical Need" },
      { type: "AB-", units: "00", status: "Critical Need" },
      { type: "O+", units: "07", status: "Safe" },
      { type: "O-", units: "01", status: "Critical Need" }
    ]
  },
  {
    id: 3,
    name: "Calmette Hospital – Phnom Penh",
    location: "Samdach Pan Ave (Street 51), Phnom Penh",
    bloodTypes: [
      { type: "A+", units: "06", status: "Safe" },
      { type: "A-", units: "02", status: "Critical Need" },
      { type: "B+", units: "08", status: "Safe" },
      { type: "B-", units: "02", status: "Critical Need" },
      { type: "AB+", units: "04", status: "Low" },
      { type: "AB-", units: "01", status: "Critical Need" },
      { type: "O+", units: "11", status: "Safe" },
      { type: "O-", units: "02", status: "Critical Need" }
    ]
  },
  {
    id: 4,
    name: "Khmer-Soviet Friendship Hospital",
    location: "Street 271, Phnom Penh",
    bloodTypes: [
      { type: "A+", units: "05", status: "Low" },
      { type: "A-", units: "02", status: "Critical Need" },
      { type: "B+", units: "07", status: "Safe" },
      { type: "B-", units: "01", status: "Critical Need" },
      { type: "AB+", units: "03", status: "Low" },
      { type: "AB-", units: "01", status: "Critical Need" },
      { type: "O+", units: "09", status: "Safe" },
      { type: "O-", units: "02", status: "Critical Need" }
    ]
  }
];

const bloodStatusColors = {
  "Safe": "text-green-600",
  "Low": "text-yellow-500",
  "Critical Need": "text-red-600"
};

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredInventory = inventoryData.filter(hospital => 
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const urgentlyNeededTypes = ["A-", "AB+", "O-"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Blood Inventory</h1>
        <p className="text-gray-600">When levels get low, lives are at risk. Check current needs and act now.</p>
      </div>

      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-64 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-red-500 focus:border-red-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <button
            className="bg-white border border-gray-300 rounded-md px-4 py-2 inline-flex items-center text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <span>Sort By</span>
            <svg className="ml-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Urgently Needed Types */}
      <div className="bg-white rounded-lg shadow mb-8 p-6">
        <div className="flex items-center text-red-600 mb-4">
          <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-xl font-semibold">Urgently Needed Types</h2>
        </div>
        
        <div className="bg-red-50 rounded-md p-4 border border-red-100">
          <div className="flex items-center">
            <svg className="h-6 w-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Blood Type:</span>
            <span className="ml-2 font-bold">{urgentlyNeededTypes.join(", ")}</span>
          </div>
          <p className="mt-2 text-sm text-gray-700">
            These types are running low — your donation can make a life-saving difference.
          </p>
        </div>
      </div>

      {/* Hospital Inventory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {filteredInventory.map(hospital => (
          <div key={hospital.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{hospital.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{hospital.location}</p>
              
              <div className="grid grid-cols-4 gap-2">
                {hospital.bloodTypes.map((blood, index) => (
                  <div key={index} className="text-center border rounded-md p-2">
                    <div className="text-red-600 font-bold mb-1">{blood.type}</div>
                    <div className="text-sm font-medium mb-1">{blood.units} units</div>
                    <div className={`text-xs font-semibold ${bloodStatusColors[blood.status]}`}>
                      {blood.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center">
        <button className="inline-flex items-center text-red-600 hover:text-red-800">
          <span>See More</span>
          <svg className="ml-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Inventory;