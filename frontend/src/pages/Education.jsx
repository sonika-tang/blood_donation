import { useState } from 'react';

const resourceCategories = [
  {
    id: 1,
    title: 'About Blood Donation',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
      </svg>
    ),
    resources: [
      { id: 101, title: 'What to Expect When Donating Blood', type: 'Video', duration: '5 min' },
      { id: 102, title: 'Blood Types Explained', type: 'Article', duration: '8 min read' },
      { id: 103, title: 'Health Benefits of Blood Donation', type: 'Article', duration: '6 min read' }
    ]
  },
  {
    id: 2,
    title: 'Eligibility Guidelines',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    ),
    resources: [
      { id: 201, title: 'Age, Weight & Health Requirements', type: 'Guide', duration: '3 min read' },
      { id: 202, title: 'Travel Restrictions for Blood Donors', type: 'FAQ', duration: '4 min read' },
      { id: 203, title: 'Medications and Blood Donation', type: 'Guide', duration: '7 min read' }
    ]
  },
  {
    id: 3,
    title: 'Impact Stories',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
      </svg>
    ),
    resources: [
      { id: 301, title: 'Meet John: A Multiple Donation Recipient', type: 'Story', duration: '5 min read' },
      { id: 302, title: 'How Your Donation Saved Lives in Emergency', type: 'Video', duration: '4 min' },
      { id: 303, title: 'The Journey of Your Blood Donation', type: 'Interactive', duration: 'Interactive' }
    ]
  },
  {
    id: 4,
    title: 'FAQs',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
      </svg>
    ),
    resources: [
      { id: 401, title: 'Common Questions About Blood Donation', type: 'FAQ', duration: '10 min read' },
      { id: 402, title: 'Myths About Blood Donation', type: 'Article', duration: '5 min read' },
      { id: 403, title: 'Blood Donation Process Explained', type: 'Guide', duration: '6 min read' }
    ]
  }
];

const faqItems = [
  {
    question: 'How often can I donate blood?',
    answer: 'Whole blood donors can give blood every 56 days (8 weeks). Platelet donors can give every 7 days, up to 24 times per year. Plasma donors can donate every 28 days, up to 13 times per year. Double red cell donors can donate every 112 days (16 weeks), up to 3 times per year.'
  },
  {
    question: 'Does donating blood hurt?',
    answer: 'Most donors report only a brief pinch from the needle at the beginning of the donation. Our trained staff work to make your donation experience as comfortable as possible.'
  },
  {
    question: 'How long does it take to donate blood?',
    answer: 'The entire blood donation process takes about an hour, but the actual donation only takes 8-10 minutes. Platelet donations take longer, approximately 1.5-2 hours.'
  },
  {
    question: 'Is it safe to donate blood during COVID-19?',
    answer: 'Yes, blood donation centers have implemented additional safety protocols. All equipment is sterile, and we follow strict safety guidelines. Contact your local donation center for specific COVID-19 measures.'
  },
  {
    question: 'What should I eat before donating blood?',
    answer: 'Have a healthy, low-fat meal within 2-3 hours before donating. Avoid fatty foods like hamburgers, fries, or ice cream. Drink plenty of water before your donation.'
  }
];

const resourceTypeColors = {
  'Video': 'bg-blue-100 text-blue-800',
  'Article': 'bg-green-100 text-green-800',
  'Guide': 'bg-purple-100 text-purple-800',
  'FAQ': 'bg-yellow-100 text-yellow-800',
  'Story': 'bg-pink-100 text-pink-800',
  'Interactive': 'bg-indigo-100 text-indigo-800'
};

const Education = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCategory, setActiveCategory] = useState(1);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-red-600 mb-2">Educational Resources</h1>
        <p className="text-gray-600">Learn about blood donation, eligibility, and how your contribution makes a difference.</p>
      </div>
      
      {/* Featured Resource */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg overflow-hidden shadow-lg mb-12">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">The Importance of Blood Donation</h2>
            <p className="text-red-100 mb-6">
              Every day, thousands of people need blood transfusions to survive. Your donation can save up to 3 lives and make a real difference in your community.
            </p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50">
              Watch Video (3 min)
            </a>
          </div>
          <div className="md:w-1/2 bg-red-700 flex items-center justify-center p-8">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {resourceCategories.map(category => (
          <button
            key={category.id}
            className={`flex items-center p-4 rounded-lg ${activeCategory === category.id ? 'bg-red-600 text-white' : 'bg-white hover:bg-gray-50 text-gray-700'} shadow`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className={`flex-shrink-0 ${activeCategory === category.id ? 'text-white' : 'text-red-600'}`}>
              {category.icon}
            </div>
            <div className="ml-4 text-left">
              <h3 className="text-lg font-medium">{category.title}</h3>
              <p className={`text-sm ${activeCategory === category.id ? 'text-red-100' : 'text-gray-500'}`}>
                {category.resources.length} resources
              </p>
            </div>
          </button>
        ))}
      </div>
      
      {/* Resource List */}
      <div className="bg-white rounded-lg shadow mb-12">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium text-gray-900">
            {resourceCategories.find(c => c.id === activeCategory)?.title || 'Resources'}
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {resourceCategories.find(c => c.id === activeCategory)?.resources.map(resource => (
            <div key={resource.id} className="p-6">
              <div className="flex items-start">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-1">{resource.title}</h4>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${resourceTypeColors[resource.type]}`}>
                      {resource.type}
                    </span>
                    <span className="ml-2">{resource.duration}</span>
                  </div>
                </div>
                <a href="#" className="ml-4 flex-shrink-0 text-red-600 hover:text-red-500">
                  {resource.type === 'Video' ? (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
          {faqItems.map((faq, index) => (
            <div key={index} className="p-6">
              <button
                className="flex w-full items-start justify-between text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`h-6 w-6 transform ${openFaq === index ? '-rotate-180' : 'rotate-0'} text-red-600 transition-transform duration-200 ease-in-out`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              <div
                className={`mt-2 pr-12 transition-all duration-200 ease-in-out ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Still Have Questions?</h3>
          <p className="text-gray-600">Our team is here to help you with any questions about blood donation.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
            Contact Support
          </a>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            View Full Resource Library
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;