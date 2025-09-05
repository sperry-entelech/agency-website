import React from 'react';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16" style={{ marginTop: '5rem' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Build Your Growth Infrastructure?</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8" style={{ lineHeight: '1.7' }}>
            Stop losing revenue to manual processes. Let's build the systems that will transform your service business in the next 4 weeks.
          </p>
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

        <div className="border-t border-gray-700 pt-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src="/Entelech Logo (2).jpg" 
                  alt="Entelech Logo" 
                  className="h-8 w-8 mr-3"
                />
                <span className="text-2xl font-bold text-white">ENTELECH</span>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md" style={{ lineHeight: '1.7' }}>
                We engineer complete growth systems for service businesses. From lead generation to client delivery, 
                we build the infrastructure that turns your expertise into a scalable, profitable operation.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <a href="tel:+18049724550" className="text-gray-300 hover:text-white transition-colors">
                    (804) 972-4550
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <a href="mailto:sperry@entelech.net" className="text-gray-300 hover:text-white transition-colors">
                    sperry@entelech.net
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                  <a 
                    href="https://calendly.com/joinentelech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    calendly.com/joinentelech
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Entelech. All rights reserved. | Growth Systems Engineering for Service Businesses
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;