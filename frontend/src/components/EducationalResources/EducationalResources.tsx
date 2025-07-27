import React, { useState } from 'react';
import { BookOpen, Heart, Shield, Users, HelpCircle, Clock, Search } from 'lucide-react';
import { EducationalResource } from '../../types';
import { educationalResources as initialResources } from '../../data/mockData';

const EducationalResources: React.FC = () => {
  const [resources, setResources] = useState<EducationalResource[]>(initialResources);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [selectedResource, setSelectedResource] = useState<EducationalResource | null>(null);

  const categoryIcons = {
    Benefits: Heart,
    Process: Users,
    Eligibility: Shield,
    Safety: Shield,
    FAQ: HelpCircle
  };

  const categoryColors = {
    Benefits: 'bg-red-100 text-red-800',
    Process: 'bg-blue-100 text-blue-800',
    Eligibility: 'bg-green-100 text-green-800',
    Safety: 'bg-yellow-100 text-yellow-800',
    FAQ: 'bg-purple-100 text-purple-800'
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || resource.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  const additionalResources = [
    {
      id: '5',
      title: 'Blood Types Compatibility Chart',
      category: 'Process' as const,
      content: 'Understanding blood type compatibility is crucial for safe transfusions. Universal donors (O-) can donate to anyone, while universal recipients (AB+) can receive from anyone.',
      readTime: '2 min read'
    },
    {
      id: '6',
      title: 'Preparing for Your First Donation',
      category: 'Process' as const,
      content: 'First-time donors should eat a healthy meal, stay hydrated, get plenty of sleep, and bring a valid ID. The process typically takes 45-60 minutes.',
      readTime: '4 min read'
    },
    {
      id: '7',
      title: 'Post-Donation Care',
      category: 'Safety' as const,
      content: 'After donating, rest for 10-15 minutes, drink plenty of fluids, avoid heavy lifting for 24 hours, and eat iron-rich foods to help replenish your blood.',
      readTime: '3 min read'
    },
    {
      id: '8',
      title: 'Common Myths About Blood Donation',
      category: 'FAQ' as const,
      content: 'Debunking common misconceptions: Blood donation doesn\'t weaken your immune system, you can\'t get diseases from donating, and it doesn\'t cause weight gain.',
      readTime: '5 min read'
    }
  ];

  const allResources = [...resources, ...additionalResources];
  const filteredAllResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || resource.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-8 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="h-8 w-8" />
            <h2 className="text-3xl font-bold">Educational Resources</h2>
          </div>
          <p className="text-purple-100">
            Learn everything you need to know about blood donation and make an informed decision
          </p>
        </div>

        <div className="p-6">
          {/* Filters */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Categories</option>
              <option value="Benefits">Benefits</option>
              <option value="Process">Process</option>
              <option value="Eligibility">Eligibility</option>
              <option value="Safety">Safety</option>
              <option value="FAQ">FAQ</option>
            </select>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAllResources.map((resource) => {
              const CategoryIcon = categoryIcons[resource.category];
              return (
                <div
                  key={resource.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedResource(resource)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <CategoryIcon className="h-6 w-6 text-purple-600" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[resource.category]}`}>
                      {resource.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {resource.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{resource.readTime}</span>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredAllResources.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No resources found matching your criteria.</p>
            </div>
          )}

          {/* Quick Facts Section */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts About Blood Donation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">1 in 7</div>
                <div className="text-sm text-gray-600">People entering hospitals need blood</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">56 days</div>
                <div className="text-sm text-gray-600">Time between whole blood donations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">3 lives</div>
                <div className="text-sm text-gray-600">Can be saved with one donation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">42 days</div>
                <div className="text-sm text-gray-600">Shelf life of donated blood</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Detail Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[selectedResource.category]} mb-2 inline-block`}>
                    {selectedResource.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedResource.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="flex items-center space-x-1 text-gray-500 text-sm mb-6">
                <Clock className="h-4 w-4" />
                <span>{selectedResource.readTime}</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{selectedResource.content}</p>
                
                {selectedResource.category === 'Benefits' && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Additional Benefits:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Free health screening including blood pressure, pulse, and hemoglobin checks</li>
                      <li>Reduced risk of heart disease and stroke</li>
                      <li>Stimulates production of new blood cells</li>
                      <li>Sense of community and helping others</li>
                    </ul>
                  </div>
                )}

                {selectedResource.category === 'Process' && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-3">Step-by-Step Process:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Registration and health history questionnaire</li>
                      <li>Mini-physical examination</li>
                      <li>Blood donation (8-10 minutes)</li>
                      <li>Rest and refreshments</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationalResources;