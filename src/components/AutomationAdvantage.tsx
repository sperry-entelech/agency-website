import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Users, TrendingUp, Target } from 'lucide-react';

const AutomationAdvantage = () => {
  const problems = [
    {
      icon: Clock,
      title: "Lead response times averaging 4-6 hours",
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "23+ hours weekly spent on repetitive administrative tasks",
      color: "text-red-400"
    },
    {
      icon: AlertTriangle,
      title: "Inconsistent customer communication and follow-up",
      color: "text-red-400"
    },
    {
      icon: TrendingUp,
      title: "Revenue loss from missed opportunities and human error",
      color: "text-red-400"
    },
    {
      icon: Target,
      title: "Inability to scale without proportional staff increases",
      color: "text-red-400"
    }
  ];

  const solutions = [
    {
      icon: Clock,
      title: "Sub-60 second lead qualification and response",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "80% reduction in manual administrative work",
      color: "text-green-400"
    },
    {
      icon: CheckCircle,
      title: "Consistent, personalized customer experiences at scale",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      title: "Predictable revenue growth through systematic processes",
      color: "text-green-400"
    },
    {
      icon: Target,
      title: "Operational efficiency that improves with volume",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            THE AUTOMATION ADVANTAGE
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how AI-enhanced automation transforms common business bottlenecks into competitive advantages
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-red-600/5 border border-red-600/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-3" />
              Manual Operations Create These Bottlenecks:
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start">
                  <problem.icon className={`h-6 w-6 ${problem.color} mr-3 mt-1 flex-shrink-0`} />
                  <span className="text-gray-300 text-lg">{problem.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-600/5 border border-green-600/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 mr-3" />
              AI-Enhanced Automation Delivers:
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start">
                  <solution.icon className={`h-6 w-6 ${solution.color} mr-3 mt-1 flex-shrink-0`} />
                  <span className="text-gray-300 text-lg">{solution.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationAdvantage;