import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Marketing Consultancy",
      role: "Founder & CEO",
      image: "SC",
      testimonial: "Before Entelech, I was spending 60% of my time on admin work instead of serving clients. Now their systems handle everything - from lead capture to client onboarding. I've doubled my revenue while working fewer hours.",
      result: "Revenue doubled in 6 months",
      rating: 5
    },
    {
      name: "Marcus Thompson", 
      company: "Legal Services Firm",
      role: "Managing Partner",
      image: "MT",
      testimonial: "The 4-week timeline seemed impossible, but they delivered exactly on schedule. Our lead response time went from 6 hours to under 2 minutes, and we're closing 40% more deals. The ROI has been incredible.",
      result: "40% increase in deal closure",
      rating: 5
    },
    {
      name: "Jennifer Rodriguez",
      company: "Healthcare Consulting",
      role: "Principal Consultant",
      image: "JR", 
      testimonial: "What impressed me most was how they understood our complex workflows from day one. The systems they built feel like they were designed specifically for healthcare consulting - because they were. No generic solutions here.",
      result: "80% reduction in manual processes",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50" style={{ marginTop: '5rem', marginBottom: '5rem', lineHeight: '1.7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how service businesses like yours have transformed their operations and accelerated growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <p className="text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
                {testimonial.testimonial}
              </p>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-800 font-semibold text-sm">
                  Key Result: {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 mb-8 max-w-4xl mx-auto shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Over 50+ Service Businesses</h3>
            <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
              From solo consultants to established firms, we've helped service businesses across industries 
              build the growth infrastructure they need to scale profitably.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 text-center mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Businesses Transformed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">150%</div>
                <div className="text-gray-600">Average Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4 Weeks</div>
                <div className="text-gray-600">Average Deployment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
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

export default Testimonials;