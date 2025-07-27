import React, { useState } from 'react';
import { Calendar, MapPin, User, Clock, Search, Download } from 'lucide-react';
import { DonationHistory as DonationHistoryType } from '../../types';
import { donationHistory as initialHistory } from '../../data/mockData';

const DonationHistory: React.FC = () => {
  const [history, setHistory] = useState<DonationHistoryType[]>(initialHistory);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterBloodType, setFilterBloodType] = useState('');

  const statusColors = {
    Completed: 'bg-green-100 text-green-800',
    Scheduled: 'bg-blue-100 text-blue-800',
    Cancelled: 'bg-red-100 text-red-800'
  };

  const filteredHistory = history.filter(donation => {
    const matchesSearch = donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !filterStatus || donation.status === filterStatus;
    const matchesBloodType = !filterBloodType || donation.bloodType === filterBloodType;
    
    return matchesSearch && matchesStatus && matchesBloodType;
  });

  const getTotalDonations = () => {
    return history.filter(donation => donation.status === 'Completed').length;
  };

  const getTotalUnits = () => {
    return history
      .filter(donation => donation.status === 'Completed')
      .reduce((total, donation) => total + donation.unitsdonated, 0);
  };

  const getUpcomingDonations = () => {
    return history.filter(donation => donation.status === 'Scheduled').length;
  };

  const isEligibleSoon = (nextEligibleDate: string) => {
    const oneWeekFromNow = new Date();
    oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
    return new Date(nextEligibleDate) <= oneWeekFromNow;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Donations</p>
              <p className="text-3xl font-bold text-gray-900">{getTotalDonations()}</p>
            </div>
            <Calendar className="h-12 w-12 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Units Donated</p>
              <p className="text-3xl font-bold text-red-600">{getTotalUnits()}</p>
            </div>
            <User className="h-12 w-12 text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Upcoming</p>
              <p className="text-3xl font-bold text-blue-600">{getUpcomingDonations()}</p>
            </div>
            <Clock className="h-12 w-12 text-blue-500" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg">
        <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Donation History</h2>
              <p className="text-green-100">Track your donation journey and impact</p>
            </div>
            <button className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-50 transition-colors font-medium flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Filters */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by donor or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Cancelled">Cancelled</option>
            </select>

            <select
              value={filterBloodType}
              onChange={(e) => setFilterBloodType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">All Blood Types</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* History Cards */}
          <div className="space-y-4">
            {filteredHistory.map((donation) => (
              <div key={donation.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{donation.donorName}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xl font-bold text-red-600">{donation.bloodType}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-600">{donation.unitsdonated} unit{donation.unitsdonated > 1 ? 's' : ''}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>Donated: {new Date(donation.donationDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{donation.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span className={isEligibleSoon(donation.nextEligibleDate) ? 'text-green-600 font-medium' : ''}>
                          Next eligible: {new Date(donation.nextEligibleDate).toLocaleDateString()}
                          {isEligibleSoon(donation.nextEligibleDate) && (
                            <span className="ml-1 text-xs">(Soon!)</span>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-6 flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[donation.status]}`}>
                      {donation.status}
                    </span>
                    {donation.status === 'Scheduled' && (
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Reschedule
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredHistory.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No donation history found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;