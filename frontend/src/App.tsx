import React from 'react';
import { useState } from 'react';
import Header from './components/Layout/Header';
import BloodDonation from './components/BloodDonation/BloodDonation';
import BloodRequests from './components/BloodRequests/BloodRequests';
import BloodInventory from './components/BloodInventory/BloodInventory';
import DonationHistory from './components/DonationHistory/DonationHistory';
import EducationalResources from './components/EducationalResources/EducationalResources';

function App() {
  const [activeTab, setActiveTab] = useState('donation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'donation':
        return <BloodDonation />;
      case 'requests':
        return <BloodRequests />;
      case 'inventory':
        return <BloodInventory />;
      case 'history':
        return <DonationHistory />;
      case 'education':
        return <EducationalResources />;
      default:
        return <BloodDonation />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="py-8">
        {renderActiveComponent()}
      </main>
    </div>
  );
}

export default App;
