import React from 'react';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const DeploymentTimeline = () => {
  const timelineSteps = [
    {
      week: "01",
      title: "Discovery & Strategy",
      description: "We audit your current operations, identify bottlenecks, and create your custom growth system blueprint. You'll see exactly what we're building and why.",
      deliverables: ["Operations audit report", "Growth system blueprint", "Implementation roadmap"]
    },
    {
      week: "02", 
      title: "Foundation Build",
      description: "We build the core infrastructure: lead generation systems, client onboarding automation, and basic analytics tracking.",
      deliverables: ["Lead generation system", "Automated onboarding", "Analytics dashboard"]
    },
    {
      week: "03",
      title: "Integration & Testing", 
      description: "We connect all systems, import your data, and run comprehensive tests. Your team gets training on the new processes.",
      deliverables: ["System integration", "Data migration", "Team training sessions"]
    },
    {
      week: "04",
      title: "Launch & Optimization",
      description: "We go live with your new systems and monitor performance. Any issues are resolved immediately, and we begin initial optimizations.",
      deliverables: ["System launch", "Performance monitoring", "Initial optimizations"]
    }
  ];

  return (
    <section className="py-20 bg-white" style={{ marginTop: '5rem', marginBottom: '5rem', lineHeight: '1.7' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Fast We Deploy Your Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most agencies take 3-6 months to deliver results. We have your complete growth infrastructure running in just 4 weeks.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-4 gap-8 relative z-10">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white border-4 border-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <span className="text-xl font-bold text-blue-600">{step.week}</span>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>{step.description}</p>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{step.week}</span>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="absolute left-4 top-10 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>{step.description}</p>
                  <div className="space-y-2">
                    {step.deliverables.map((deliverable, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
            <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
              We're so confident in our 4-week timeline that if we don't deliver your complete system on schedule, your first month is free.
            </p>
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

export default DeploymentTimeline;