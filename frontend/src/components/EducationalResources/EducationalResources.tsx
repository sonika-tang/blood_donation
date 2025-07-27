import React from 'react';
import { Heart, Shield, Users, CheckCircle } from "lucide-react";

// Button Component (simplified version)
const Button = ({ children, className, variant = 'default', asChild = false, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (asChild) {
    return React.cloneElement(React.Children.only(children), {
      className: classes,
      ...props
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Card Components
const Card = ({ children, className, ...props }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className, ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Layout Component
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple header for the layout */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full relative">
                  <div className="absolute inset-1 bg-red-600 rounded-full"></div>
                </div>
              </div>
              <span className="text-red-600 font-bold text-lg">BLOOD DONATION</span>
            </a>
          </div>
        </div>
      </header> */}
      
      <main className="flex-1">
        {children}
      </main>
      
      {/* Simple footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Blood Donation System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// Main HomePage Component
export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-red-600 mb-4">Be a Hero!</h1>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Be a Donor</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Your blood can be the miracle someone's waiting for. It's quick, safe, and powerful. Be a hero — roll up
                your sleeve and give the gift of life.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">Learn More</Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-600 rounded-full transform scale-75 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Heart className="w-12 h-12 text-red-600 fill-current" />
                      </div>
                      <div className="text-sm">Medical supplies and equipment illustrated around</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-64 h-64 bg-white rounded-full mx-auto flex items-center justify-center">
                <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center relative">
                  <div className="absolute -top-4 -left-4 w-8 h-1 bg-gray-800 transform -rotate-45"></div>
                  <div className="absolute -top-4 -right-4 w-8 h-1 bg-gray-800 transform rotate-45"></div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-1 bg-gray-800 transform rotate-45"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-1 bg-gray-800 transform -rotate-45"></div>
                  <div className="text-4xl font-bold text-gray-800">💡</div>
                </div>
              </div>
            </div>
            <div className="text-white space-y-8">
              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Why Donate Blood?</h3>
                  <p className="text-red-100">
                    Every blood donation can save up to three lives. Hospitals rely on daily donations to treat
                    accident, surgery, cancer patients, and those undergoing surgery. Your donation matters.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Is It Safe?</h3>
                  <p className="text-red-100">
                    Yes! Donating blood is completely safe. All needles and supplies are sterile and used only once.
                    Plus, our staff are trained to make your experience quick, smooth, and comfortable.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who Can Donate?</h3>
                  <p className="text-red-100">
                    If you're 17 years or older, in good health, and meet basic eligibility requirements, you can
                    donate! A quick health screening is done prior to ensure you're ready to give.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Process */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-red-600 text-center mb-12">The Donation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Registration",
                description: "Complete a simple registration form with your basic information and medical history.",
              },
              {
                step: "2",
                title: "Health Check",
                description: "A quick health screening including blood pressure, temperature, and hemoglobin check.",
              },
              {
                step: "3",
                title: "Donation",
                description:
                  "The actual donation takes about 8-10 minutes. Relax while our trained staff take care of you.",
              },
              {
                step: "4",
                title: "Recovery",
                description: "Enjoy refreshments and rest for 10-15 minutes before you're ready to go.",
              },
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Requirements */}
      <section className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Eligibility Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Basic Requirements</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Age 17-65 years old (16 with parental consent)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Weight at least 110 pounds (50 kg)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Good general health</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Valid photo ID required</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Before You Donate</h3>
              <ul className="space-y-3 text-white">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Get a good night's sleep</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Eat a healthy meal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Drink plenty of water</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>Avoid alcohol for 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Save Lives?</h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of heroes who donate blood regularly. Schedule your appointment today and make a difference
            in someone's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <a href="/donate">Donate</a>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg bg-transparent"
            >
              <a href="/locations">Find Locations</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}