import React from 'react';
import { User, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const ResponsibilityDivision = () => {
  const yourResponsibilities = [
    "Focus on delivering exceptional service to your clients",
    "Provide strategic direction and business vision",
    "Handle high-level client relationships and communications",
    "Review and approve system optimizations",
    "Participate in monthly strategy calls"
  ];

  const ourResponsibilities = [
    "Design and build all growth infrastructure",
    "Handle lead generation and nurturing systems",
    "Manage client onboarding and project workflows",
    "Monitor system performance and analytics",
    "Implement continuous optimizations and improvements",
    "Provide technical support and system maintenance",
    "Create and manage all automation workflows",
    "Handle data migration and system integrations",
    "Provide monthly performance reports and recommendations"
  ];

  return (
    <section className="py-20 bg-gray-50" style={{ marginTop: '5rem', marginBottom: '5rem', lineHeight: '1.7' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What You Handle vs What We Handle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in clear accountability. Here's exactly who does what so you know where to focus your energy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* What You Handle */}
          <div className="bg-white rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">What You Handle</h3>
                <p className="text-gray-600">Your core expertise and strategic decisions</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {yourResponsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700" style={{ lineHeight: '1.7' }}>{responsibility}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 font-medium">
                You stay focused on what you do best while we handle the infrastructure.
              </p>
            </div>
          </div>

          {/* What We Handle */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <Wrench className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">What We Handle</h3>
                <p className="text-gray-600">All technical implementation and optimization</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {ourResponsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700" style={{ lineHeight: '1.7' }}>{responsibility}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-green-800 font-medium">
                We take care of everything technical so your systems run smoothly.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 mb-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Bottom Line</h3>
            <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
              You get to focus on serving clients and growing your business while we handle all the technical complexity. 
              It's like having an entire growth engineering team without the overhead.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">No</div>
                <div className="text-gray-600">Technical learning curve</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">No</div>
                <div className="text-gray-600">Hiring and managing staff</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">No</div>
                <div className="text-gray-600">System maintenance headaches</div>
              </div>
            </div>
          </div>
          
          <a 
            href="https://calendly.com/joinentelech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg inline-flex items-center group shadow-lg"
          >
            Book Strategy Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityDivision;