import React from 'react';
import { Shield, Server, Brain, Link, BarChart, Lock } from 'lucide-react';

const TechnicalSpecs = () => {
  const techStack = [
    {
      title: "AI Orchestration",
      description: "Multi-agent systems for complex business logic",
      icon: Brain,
      color: "text-blue-400"
    },
    {
      title: "Workflow Automation",
      description: "Enterprise-grade process automation",
      icon: BarChart,
      color: "text-green-400"
    },
    {
      title: "Data Analytics",
      description: "Real-time business intelligence and reporting",
      icon: BarChart,
      color: "text-purple-400"
    },
    {
      title: "Integration Layer",
      description: "Seamless connection with existing business systems",
      icon: Link,
      color: "text-orange-400"
    },
    {
      title: "Client Portal",
      description: "Branded dashboard for system management and insights",
      icon: Server,
      color: "text-cyan-400"
    }
  ];

  const security = [
    "Enterprise-grade cloud infrastructure (99.9% uptime)",
    "Data encryption and secure API management",
    "Compliance with business data protection standards",
    "Automatic backups and disaster recovery protocols"
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            TECHNICAL SPECIFICATIONS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on enterprise-grade infrastructure with cutting-edge AI technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Brain className="h-6 w-6 mr-3 text-blue-400" />
              Our Technology Stack
            </h3>
            <div className="space-y-6">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-xl p-6">
                  <div className="flex items-start">
                    <tech.icon className={`h-6 w-6 ${tech.color} mr-4 mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className={`text-lg font-semibold ${tech.color} mb-2`}>
                        {tech.title}
                      </h4>
                      <p className="text-gray-300">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Shield className="h-6 w-6 mr-3 text-green-400" />
              Security & Reliability
            </h3>
            <div className="bg-green-600/10 border border-green-600/20 rounded-2xl p-8">
              <ul className="space-y-4">
                {security.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Lock className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 bg-blue-600/10 border border-blue-600/20 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Enterprise Standards</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-gray-300">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-300">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">SOC 2</div>
                  <div className="text-sm text-gray-300">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">256-bit</div>
                  <div className="text-sm text-gray-300">Encryption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;