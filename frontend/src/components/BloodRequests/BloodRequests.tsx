import React, { useState } from 'react';
import { AlertCircle, Phone, MapPin, Calendar, Plus, Search, Filter } from 'lucide-react';
import { BloodRequest } from '../../types';
import { bloodRequests as initialRequests } from '../../data/mockData';

const BloodRequests: React.FC = () => {
  const [requests, setRequests] = useState<BloodRequest[]>(initialRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUrgency, setFilterUrgency] = useState('');
  const [filterBloodType, setFilterBloodType] = useState('');
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);

  const [newRequest, setNewRequest] = useState({
    patientName: '',
    bloodType: '',
    unitsNeeded: '',
    urgency: '',
    hospital: '',
    contactNumber: ''
  });

  const urgencyColors = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-orange-100 text-orange-800',
    Critical: 'bg-red-100 text-red-800'
  };

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUrgency = !filterUrgency || request.urgency === filterUrgency;
    const matchesBloodType = !filterBloodType || request.bloodType === filterBloodType;
    
    return matchesSearch && matchesUrgency && matchesBloodType;
  });

  const handleNewRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const request: BloodRequest = {
      id: Date.now().toString(),
      patientName: newRequest.patientName,
      bloodType: newRequest.bloodType,
      unitsNeeded: parseInt(newRequest.unitsNeeded),
      urgency: newRequest.urgency as BloodRequest['urgency'],
      hospital: newRequest.hospital,
      contactNumber: newRequest.contactNumber,
      requestDate: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };

    setRequests([request, ...requests]);
    setNewRequest({
      patientName: '',
      bloodType: '',
      unitsNeeded: '',
      urgency: '',
      hospital: '',
      contactNumber: ''
    });
    setShowNewRequestForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-8 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Blood Requests</h2>
              <p className="text-red-100">Help save lives by fulfilling urgent blood requests</p>
            </div>
            <button
              onClick={() => setShowNewRequestForm(true)}
              className="bg-white text-red-600 px-4 py-2 rounded-md hover:bg-red-50 transition-colors font-medium flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>New Request</span>
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
                placeholder="Search by patient or hospital..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <select
              value={filterUrgency}
              onChange={(e) => setFilterUrgency(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">All Urgency Levels</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <select
              value={filterBloodType}
              onChange={(e) => setFilterBloodType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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

          {/* Requests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequests.map((request) => (
              <div key={request.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{request.patientName}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold text-red-600">{request.bloodType}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-600">{request.unitsNeeded} units</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${urgencyColors[request.urgency]}`}>
                    {request.urgency}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{request.hospital}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{request.contactNumber}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Requested: {new Date(request.requestDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      request.status === 'Fulfilled' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {request.status}
                    </span>
                    {request.status === 'Pending' && (
                      <button className="bg-red-600 text-white px-3 py-1 rounded-md text-sm hover:bg-red-700 transition-colors">
                        Fulfill Request
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No blood requests found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* New Request Modal */}
      {showNewRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Submit New Blood Request</h3>
            <form onSubmit={handleNewRequestSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Patient Name"
                value={newRequest.patientName}
                onChange={(e) => setNewRequest({...newRequest, patientName: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <select
                value={newRequest.bloodType}
                onChange={(e) => setNewRequest({...newRequest, bloodType: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              <input
                type="number"
                placeholder="Units Needed"
                value={newRequest.unitsNeeded}
                onChange={(e) => setNewRequest({...newRequest, unitsNeeded: e.target.value})}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <select
                value={newRequest.urgency}
                onChange={(e) => setNewRequest({...newRequest, urgency: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select Urgency</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <input
                type="text"
                placeholder="Hospital Name"
                value={newRequest.hospital}
                onChange={(e) => setNewRequest({...newRequest, hospital: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                value={newRequest.contactNumber}
                onChange={(e) => setNewRequest({...newRequest, contactNumber: e.target.value})}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNewRequestForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BloodRequests;