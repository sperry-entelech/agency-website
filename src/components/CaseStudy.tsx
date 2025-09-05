import React from 'react';
import { ArrowRight, Users, Clock, TrendingUp, DollarSign } from 'lucide-react';

const CaseStudy = () => {
  const results = [
    {
      metric: "Lead Volume",
      before: "15-20/month",
      after: "35-50/month",
      improvement: "+150%",
      icon: Users,
      color: "text-blue-400"
    },
    {
      metric: "Response Time",
      before: "4+ hours",
      after: "47 seconds",
      improvement: "automated",
      icon: Clock,
      color: "text-green-400"
    },
    {
      metric: "Conversion Rate",
      before: "12%",
      after: "20%",
      improvement: "+67%",
      icon: TrendingUp,
      color: "text-purple-400"
    },
    {
      metric: "ROI",
      before: "Manual processes",
      after: "312% in 90 days",
      improvement: "312%",
      icon: DollarSign,
      color: "text-green-400"
    }
  ];

  const implementations = [
    "AI-powered lead qualification system",
    "Automated email and SMS communication flows",
    "Real-time booking management dashboard",
    "Driver notification and coordination system",
    "Performance analytics with predictive insights"
  ];

  return (
    <section id="case-study" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            CASE STUDY: TNT LIMOUSINE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Richmond-area luxury transportation company transforms manual operations into intelligent automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-red-600/10 border border-red-600/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-4">The Challenge</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Manual lead processing causing delays</li>
                <li>• Complex driver coordination requirements</li>
                <li>• Inconsistent customer communication</li>
                <li>• Revenue loss from missed opportunities</li>
              </ul>
            </div>

            <div className="bg-blue-600/10 border border-blue-600/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Technical Implementation</h3>
              <ul className="space-y-2 text-gray-300">
                {implementations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Results After Implementation</h3>
            <div className="space-y-4">
              {results.map((result, index) => (
                <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <result.icon className={`h-6 w-6 ${result.color} mr-3`} />
                      <span className="font-semibold text-white">{result.metric}</span>
                    </div>
                    <span className={`font-bold ${result.color}`}>
                      {result.improvement}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Before: {result.before}</span>
                    <ArrowRight className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-300">After: {result.after}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-600/10 border border-green-600/20 rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">18 hours/week</div>
                <div className="text-gray-300">Time reclaimed for strategic work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;