import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-white pt-20 pb-20" style={{ lineHeight: '1.7' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="h-4 w-4 mr-2" />
            Growth Systems Engineering
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8" style={{ lineHeight: '1.2' }}>
            Growth Systems Engineering for 
            <span className="text-blue-600"> Service Businesses</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
            Most service businesses plateau because they lack proper growth infrastructure. We build the systems, processes, and automation that turn your expertise into a scalable, profitable operation.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              <span className="font-semibold text-gray-900">Here's the truth:</span> Your business isn't failing because you lack skill or dedication. It's because you're trying to scale without the proper infrastructure.
            </p>
            <p className="text-lg text-gray-700">
              We don't just build websites or run ads. We engineer complete growth systems that handle everything from lead generation to client delivery, so you can focus on what you do best.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://calendly.com/joinentelech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg flex items-center justify-center group shadow-lg"
            >
              Book Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#how-it-works" 
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg flex items-center justify-center"
            >
              See How It Works
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4 Weeks</div>
              <div className="text-gray-600">Full System Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">150%</div>
              <div className="text-gray-600">Average Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
              <div className="text-gray-600">Reduction in Manual Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;