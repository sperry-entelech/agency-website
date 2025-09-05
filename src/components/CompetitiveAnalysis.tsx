import React from 'react';
import { CheckCircle, XCircle, Clock, DollarSign } from 'lucide-react';

const CompetitiveAnalysis = () => {
  const competitors = [
    {
      title: "Traditional Automation Consultants",
      icon: Clock,
      color: "text-red-400",
      points: [
        { text: "Implementation timelines: 4-12 weeks", negative: true },
        { text: "Focus on tool replacement rather than enhancement", negative: true },
        { text: "Limited AI integration capabilities", negative: true },
        { text: "High ongoing service dependencies", negative: true }
      ]
    },
    {
      title: "SaaS Platform Migrations",
      icon: DollarSign,
      color: "text-orange-400",
      points: [
        { text: "Significant disruption to existing operations", negative: true },
        { text: "Vendor lock-in and ongoing subscription costs", negative: true },
        { text: "Generic solutions poorly fitted to specific business needs", negative: true },
        { text: "Limited customization and integration options", negative: true }
      ]
    },
    {
      title: "Entelech Advantage",
      icon: CheckCircle,
      color: "text-green-400",
      points: [
        { text: "48-hour implementation for core systems", negative: false },
        { text: "Enhancement of existing infrastructure", negative: false },
        { text: "AI-first approach with future-proof capabilities", negative: false },
        { text: "Client ownership of all automation assets and data", negative: false }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            COMPETITIVE ANALYSIS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Entelech's approach differs from traditional automation solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {competitors.map((competitor, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-center mb-6">
                <competitor.icon className={`h-8 w-8 ${competitor.color} mr-4`} />
                <h3 className={`text-xl font-bold ${competitor.color}`}>
                  {competitor.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {competitor.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    {point.negative ? (
                      <XCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    ) : (
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-gray-300">{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAnalysis;