import React from 'react';
import { Zap, TrendingUp, DollarSign, Clock, Target, BarChart } from 'lucide-react';

const Benefits = () => {
  const immediate = [
    {
      title: "Lead response time reduced by 95%+",
      icon: Zap,
      color: "text-blue-400"
    },
    {
      title: "Administrative workload decreased by 70-80%",
      icon: Clock,
      color: "text-green-400"
    },
    {
      title: "Customer communication consistency increased to 99%",
      icon: Target,
      color: "text-purple-400"
    },
    {
      title: "Revenue forecasting accuracy improved through data analytics",
      icon: BarChart,
      color: "text-orange-400"
    }
  ];

  const longTerm = [
    "Scalable operations that improve efficiency with growth",
    "Competitive advantage through superior customer experience",
    "Data-driven insights for strategic decision making",
    "Foundation for advanced AI capabilities as technology evolves"
  ];

  const financial = [
    {
      metric: "Average time savings",
      value: "15-25 hours per week",
      description: "for business owners"
    },
    {
      metric: "Typical revenue increase",
      value: "30-150%",
      description: "within 12 months"
    },
    {
      metric: "Cost reduction",
      value: "$25,000-$75,000",
      description: "annually through eliminated inefficiencies"
    },
    {
      metric: "ROI timeline",
      value: "60-120 days",
      description: "for initial investment recovery"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            IMPLEMENTATION BENEFITS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immediate improvements and long-term strategic value for your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Zap className="h-6 w-6 mr-3 text-blue-400" />
              Immediate Improvements
            </h3>
            <div className="space-y-4">
              {immediate.map((benefit, index) => (
                <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6">
                  <div className="flex items-center">
                    <benefit.icon className={`h-6 w-6 ${benefit.color} mr-4`} />
                    <span className="text-gray-300 text-lg">{benefit.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-green-400" />
              Long-term Strategic Value
            </h3>
            <div className="bg-green-600/10 border border-green-600/20 rounded-2xl p-8">
              <ul className="space-y-4">
                {longTerm.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <DollarSign className="h-6 w-6 mr-3 text-green-400" />
            Financial Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financial.map((item, index) => (
              <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6 text-center">
                <div className="text-sm text-gray-400 mb-2">{item.metric}</div>
                <div className="text-2xl font-bold text-green-400 mb-2">{item.value}</div>
                <div className="text-sm text-gray-300">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;