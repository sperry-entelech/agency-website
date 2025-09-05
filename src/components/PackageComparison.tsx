import React from 'react';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const PackageComparison = () => {
  const packages = [
    {
      name: "Foundation",
      price: "$2,500",
      period: "/month",
      description: "Perfect for service businesses ready to automate their core operations",
      popular: false,
      features: [
        "Lead capture and nurturing system",
        "Client onboarding automation", 
        "Basic analytics dashboard",
        "Email marketing automation",
        "CRM setup and integration",
        "Monthly optimization call",
        "24/7 technical support"
      ],
      idealFor: "Solo practitioners and small teams (1-3 people)",
      cta: "Start Foundation"
    },
    {
      name: "Professional", 
      price: "$7,500",
      period: "/month",
      description: "Complete growth infrastructure for scaling service businesses",
      popular: true,
      features: [
        "Everything in Foundation, plus:",
        "Advanced lead generation systems",
        "Multi-channel marketing automation",
        "Client portal and project management",
        "Advanced analytics and reporting",
        "Team collaboration tools",
        "Custom integrations",
        "Bi-weekly strategy calls",
        "Priority support"
      ],
      idealFor: "Growing businesses (4-15 people) ready to scale",
      cta: "Start Professional"
    },
    {
      name: "Enterprise",
      price: "$15,000", 
      period: "/month",
      description: "Custom-built growth systems for established service businesses",
      popular: false,
      features: [
        "Everything in Professional, plus:",
        "Custom software development",
        "Enterprise-grade security",
        "Advanced workflow automation",
        "Multi-location support",
        "Custom reporting dashboards",
        "Dedicated account manager",
        "Weekly strategy calls",
        "White-glove onboarding"
      ],
      idealFor: "Established businesses (15+ people) with complex needs",
      cta: "Start Enterprise"
    }
  ];

  return (
    <section className="py-20 bg-white" style={{ marginTop: '5rem', marginBottom: '5rem', lineHeight: '1.7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your Growth Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All packages include complete system setup, training, ongoing optimization, and support. 
            No setup fees, no hidden costs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 ${
                pkg.popular 
                  ? 'bg-blue-600 text-white shadow-2xl transform scale-105 border-4 border-blue-400' 
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-lg ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {pkg.period}
                  </span>
                </div>
                <p className={`${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`} style={{ lineHeight: '1.7' }}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                        pkg.popular ? 'text-blue-200' : 'text-green-500'
                      }`} />
                      <span className={`${pkg.popular ? 'text-blue-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mb-6 p-4 rounded-lg ${
                pkg.popular ? 'bg-blue-700' : 'bg-gray-50'
              }`}>
                <p className={`text-sm font-medium ${
                  pkg.popular ? 'text-blue-100' : 'text-gray-700'
                }`}>
                  Ideal for: {pkg.idealFor}
                </p>
              </div>

              <a 
                href="https://calendly.com/joinentelech"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center group transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } shadow-lg`}
              >
                {pkg.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Which Package is Right?</h3>
            <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
              Book a free strategy call and we'll analyze your business to recommend the perfect package. 
              No pressure, just honest recommendations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-6">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-2">30 min</div>
                <div className="text-gray-600">Free consultation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 mb-2">Custom</div>
                <div className="text-gray-600">Tailored recommendation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-2">Zero</div>
                <div className="text-gray-600">Sales pressure</div>
              </div>
            </div>
            
            <a 
              href="https://calendly.com/joinentelech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg inline-flex items-center group shadow-lg"
            >
              Book Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageComparison;