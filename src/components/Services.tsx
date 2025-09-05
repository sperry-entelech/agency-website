import React from 'react';
import { Check, Zap, Rocket, Crown } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      name: "Foundation Package",
      price: "$2,500",
      subtitle: "Immediate automation for core business processes",
      icon: Zap,
      color: "blue",
      features: [
        "Complete business process automation audit",
        "3-5 core workflow automations implemented",
        "AI-enhanced customer communication system",
        "Branded client portal for real-time analytics",
        "48-hour implementation timeline",
        "90 days of optimization support"
      ],
      bestFor: "Service businesses seeking immediate efficiency gains"
    },
    {
      name: "Operations Stack",
      price: "$5,500/month",
      subtitle: "Comprehensive automation for scaling businesses",
      icon: Rocket,
      color: "purple",
      featured: true,
      features: [
        "Everything in Foundation Package",
        "Advanced AI agent deployment across business functions",
        "Predictive analytics and business intelligence dashboard",
        "Sales team automation and performance tracking",
        "Custom integrations with existing software systems",
        "Monthly strategy and optimization sessions"
      ],
      bestFor: "Businesses ready to scale operations systematically"
    },
    {
      name: "Growth Partnership",
      price: "Performance-Based",
      subtitle: "Strategic partnership for market-leading businesses",
      icon: Crown,
      color: "green",
      features: [
        "$10,000 setup + 3-7% revenue share",
        "Complete AI transformation",
        "Custom agent development",
        "Strategic consulting",
        "Market dominance through technological advantage",
        "Dedicated success manager"
      ],
      bestFor: "Businesses targeting market dominance through technological advantage"
    }
  ];

  const getColorClasses = (color: string, featured: boolean = false) => {
    const colors = {
      blue: {
        bg: featured ? "bg-blue-600/20" : "bg-blue-600/10",
        border: featured ? "border-blue-500" : "border-blue-600/20",
        text: "text-blue-400",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      purple: {
        bg: featured ? "bg-purple-600/20" : "bg-purple-600/10",
        border: featured ? "border-purple-500" : "border-purple-600/20",
        text: "text-purple-400",
        button: "bg-purple-600 hover:bg-purple-700"
      },
      green: {
        bg: featured ? "bg-green-600/20" : "bg-green-600/10",
        border: featured ? "border-green-500" : "border-green-600/20",
        text: "text-green-400",
        button: "bg-green-600 hover:bg-green-700"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            SERVICE PACKAGES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the automation solution that fits your business needs and growth goals
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const colorClasses = getColorClasses(pkg.color, pkg.featured);
            return (
              <div 
                key={index} 
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-8 ${pkg.featured ? 'transform scale-105' : ''} relative`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${pkg.color}-600 to-${pkg.color}-700 flex items-center justify-center mr-4`}>
                    <pkg.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${colorClasses.text}`}>{pkg.name}</h3>
                    <p className="text-gray-300 text-sm">{pkg.subtitle}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className={`text-4xl font-bold ${colorClasses.text} mb-2`}>{pkg.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`h-5 w-5 ${colorClasses.text} mr-3 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Best for:</div>
                  <div className="text-gray-300">{pkg.bestFor}</div>
                </div>

                <a 
                  href="https://calendly.com/joinentelech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${colorClasses.button} text-white px-6 py-3 rounded-lg transition-colors font-medium w-full inline-block text-center`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;