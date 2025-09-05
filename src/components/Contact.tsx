import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your Service Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto" style={{ lineHeight: '1.7' }}>
            Stop letting manual processes hold back your growth. Let's build the systems that will transform 
            your business in the next 4 weeks.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Book Your Free Strategy Call</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">30</div>
                <div className="text-sm text-blue-100">Minutes</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">Zero</div>
                <div className="text-sm text-blue-100">Sales pressure</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-2xl font-bold mb-1">Custom</div>
                <div className="text-sm text-blue-100">Recommendations</div>
              </div>
            </div>
            
            <p className="text-blue-100 mb-6" style={{ lineHeight: '1.7' }}>
              We'll analyze your current operations, identify the biggest growth bottlenecks, 
              and show you exactly how our systems would work for your business.
            </p>
          </div>
          
          <a 
            href="https://calendly.com/joinentelech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg inline-flex items-center group shadow-lg hover:bg-gray-50 hover:shadow-xl"
          >
            Book Strategy Call Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;