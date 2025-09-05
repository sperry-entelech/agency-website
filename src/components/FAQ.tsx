import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How is this different from hiring a marketing agency?",
      answer: "Most agencies focus on just one piece of the puzzle - running ads or building websites. We build complete growth infrastructure that handles everything from lead generation to client delivery. Think of us as your growth engineering team, not just a marketing vendor. We're building systems that work together, not isolated campaigns."
    },
    {
      question: "What if my business is too unique/complex for your systems?",
      answer: "We've worked with businesses across dozens of industries - from healthcare consulting to legal services to technical contractors. What looks complex to you is often just a unique combination of common business processes. During our strategy call, we'll map out your specific workflows and show you exactly how our systems would work for your business."
    },
    {
      question: "Can you really deliver everything in just 4 weeks?",
      answer: "Yes, because we use proven frameworks instead of building everything from scratch. We've deployed similar systems dozens of times, so we know exactly what works and what doesn't. The 4-week timeline includes full system setup, data migration, team training, and go-live support. If we don't meet the timeline, your first month is free."
    },
    {
      question: "What happens if I need to cancel or the systems don't work?",
      answer: "You can cancel anytime with 30 days notice. But more importantly, we guarantee results. If you don't see measurable improvements in lead quality, response times, or operational efficiency within 90 days, we'll work for free until you do. Our reputation depends on your success."
    },
    {
      question: "Do I need to learn new software or change how I work?",
      answer: "The beauty of proper automation is that it works behind the scenes. You'll continue serving clients exactly as you do now, but with systems handling the repetitive tasks. We provide training for anything you need to know, but most clients find the new processes simpler and more intuitive than their old manual methods."
    },
    {
      question: "How do you handle data security and compliance?",
      answer: "We use enterprise-grade security standards including encryption, secure data centers, and compliance with GDPR, HIPAA, and other regulations as needed. All integrations are done through official APIs, never by storing passwords or sensitive data. We can provide detailed security documentation for your review."
    },
    {
      question: "What if I'm already using tools like CRM, email marketing, etc.?",
      answer: "Perfect! We integrate with virtually every business tool including Salesforce, HubSpot, Mailchimp, QuickBooks, and hundreds of others. Instead of replacing your existing tools, we connect them together and add automation layers on top. You keep the tools you like while eliminating manual data entry and repetitive tasks."
    },
    {
      question: "Is this just for big businesses? I'm a solo consultant.",
      answer: "Actually, solo consultants and small teams see the biggest impact because they're doing everything manually right now. Our Foundation package is specifically designed for solo practitioners and small teams. You'll get the same sophisticated systems that big companies use, but sized for your business and budget."
    }
  ];

  return (
    <section className="py-20 bg-white" style={{ marginTop: '5rem', marginBottom: '5rem', lineHeight: '1.7' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            The honest answers to questions we get asked most often.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openItems.includes(index) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.7' }}>
              The best way to get your specific questions answered is on a strategy call. 
              We'll review your business and give you honest feedback on whether our systems are a good fit.
            </p>
            <div className="text-center text-gray-600 mb-6">
              <p>✓ No sales pitch - just honest advice</p>
              <p>✓ Custom recommendations for your business</p>  
              <p>✓ Clear next steps, regardless of whether we work together</p>
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

export default FAQ;