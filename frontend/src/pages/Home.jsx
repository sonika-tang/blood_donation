import { Link } from 'react-router-dom';

const bloodCenters = [
  {
    name: "National Blood Transfusion Centre (NBTC)",
    location: "Street 271, next to Khmer-Soviet Friendship Hospital, Phnom Penh",
    bloodType: "A+",
    units: "08",
    status: "Safe"
  },
  {
    name: "Kantha Bopha Children's Hospital",
    location: "Near Wat Phnom, Phnom Penh",
    bloodType: "A-",
    units: "01",
    status: "Critical Need"
  },
  {
    name: "Calmette Hospital – Phnom Penh",
    location: "Samdach Pan Ave (Street 51), Phnom Penh",
    bloodType: "AB+",
    units: "04",
    status: "Low"
  },
  {
    name: "National Blood Transfusion Centre (NBTC)",
    location: "Street 271, next to Khmer-Soviet Friendship Hospital, Phnom Penh",
    bloodType: "AB+",
    units: "09",
    status: "Safe"
  }
];

const Home = () => {
  return (
    <div className="space-y-16 pb-10">
      {/* Hero Section */}
      <section className="relative bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-28">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Your donation can save lives
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
                Every 2 seconds, someone needs blood. Join thousands of donors and help save lives through blood donation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/donation" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Donate Blood
                </Link>
                <Link to="/inventory" className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Check Inventory
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,160L1360,160C1280,160,1120,160,960,160C800,160,640,160,480,160C320,160,160,160,80,160L0,160Z"></path>
          </svg>
        </div>
      </section>

      {/* Blood Types Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Urgently Needed Blood Types</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Some blood types are in critical need. Check if your blood type is among those urgently needed.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4 text-red-600">
            <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 19C9.24 19 7 16.76 7 14C7 10.67 12 4 12 4C12 4 17 10.67 17 14C17 16.76 14.76 19 12 19Z"></path>
            </svg>
            <h3 className="text-lg font-bold">Blood Type:</h3>
            <span className="ml-2 text-lg font-semibold">A-, AB+, O-</span>
          </div>
          <p className="text-gray-700">
            These types are running low — your donation can make a life-saving difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bloodCenters.map((center, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{center.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{center.location}</p>
                
                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                  <div>
                    <div className="text-red-600 mb-1">
                      <svg className="h-6 w-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 19C9.24 19 7 16.76 7 14C7 10.67 12 4 12 4C12 4 17 10.67 17 14C17 16.76 14.76 19 12 19Z"></path>
                      </svg>
                    </div>
                    <div className="text-xs font-medium text-gray-500">Blood Type</div>
                    <div className="font-bold">{center.bloodType}</div>
                  </div>
                  
                  <div>
                    <div className="text-green-600 mb-1">
                      <svg className="h-6 w-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="text-xs font-medium text-gray-500">Unit Available</div>
                    <div className="font-bold">{center.units}</div>
                  </div>
                  
                  <div>
                    <div className={`${center.status === 'Safe' ? 'text-green-600' : center.status === 'Low' ? 'text-yellow-500' : 'text-red-600'} mb-1`}>
                      <svg className="h-6 w-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="text-xs font-medium text-gray-500">Status</div>
                    <div className={`font-bold ${center.status === 'Safe' ? 'text-green-600' : center.status === 'Low' ? 'text-yellow-500' : 'text-red-600'}`}>
                      {center.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/inventory" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            View All Inventory
          </Link>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Donate Blood?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your donation makes a real difference in the lives of others.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-red-600 text-white font-bold text-sm">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Save Lives</h3>
                <p className="mt-1 text-gray-600">One donation can save up to 3 lives</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-red-600 text-white font-bold text-sm">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Health Benefits</h3>
                <p className="mt-1 text-gray-600">Regular donation can improve your health</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-red-100 rounded-full p-3">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-red-600 text-white font-bold text-sm">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Community Impact</h3>
                <p className="mt-1 text-gray-600">Help your local hospitals and patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Requirements</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check if you&apos;re eligible to donate blood and help save lives.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700">Age: 17-65 years old</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700">Weight at least 110 lbs</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700">Good general health</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-red-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="ml-3 text-gray-700">No recent travel restrictions</span>
            </li>
          </ul>
          <div className="mt-6">
            <Link to="/education" className="text-red-600 font-medium hover:text-red-500">
              View full guidelines →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Join our community of donors today and help save lives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Sign Up Now
              </Link>
              <Link to="/education" className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;