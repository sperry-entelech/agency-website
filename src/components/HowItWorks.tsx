import React from 'react';
import { Users, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50" style={{ marginTop: '5rem', marginBottom: '5rem', lineHeight: '1.7' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Our Growth Infrastructure Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just build systems. We engineer complete growth infrastructures that work together to transform your service business into a scalable, profitable operation.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                  01
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lead Generation Systems</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
                We build automated lead generation that brings qualified prospects directly to you. No more cold outreach, networking events, or hoping referrals will keep coming.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  SEO-optimized content systems that establish authority
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Automated lead nurturing sequences
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  Multi-channel acquisition funnels
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <Users className="h-16 w-16 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-blue-600 mb-2">3-5x</div>
              <div className="text-gray-700">More qualified leads per month</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-50 rounded-2xl p-8 order-2 lg:order-1">
              <Settings className="h-16 w-16 text-green-600 mb-4" />
              <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-gray-700">Reduction in manual tasks</div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                  02
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Operations Automation</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
                We eliminate the repetitive tasks that eat up your time. From client onboarding to project management, everything runs automatically.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  Automated client onboarding workflows
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  Intelligent project management systems
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  Smart communication sequences
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                  03
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Growth Analytics & Optimization</h3>
              </div>
              <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
                We track everything that matters and continuously optimize for better results. You'll always know what's working and what isn't.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Real-time performance dashboards
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Automated A/B testing systems
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  Predictive growth modeling
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8">
              <TrendingUp className="h-16 w-16 text-purple-600 mb-4" />
              <div className="text-3xl font-bold text-purple-600 mb-2">150%</div>
              <div className="text-gray-700">Average revenue increase</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
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

export default HowItWorks;