'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MotionDiv, fadeInUp, staggerContainer } from './MotionWrapper';
import { faqs } from '../lib/config';
import Container from './Container';
import Section from './Section';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Section className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-attachment-fixed"
        style={{
          backgroundImage: "url('images/bg1.jpg')",
          zIndex: -2
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-blue-900/70 to-slate-900/85 backdrop-blur-sm" />
      
      {/* Glass morphism pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/3 to-transparent transform skew-y-12" />
      </div>

      <Container className="relative z-10">
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MotionDiv variants={fadeInUp} className="text-center mb-16 pt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 ">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are the most common questions 
              about our trading programs.
            </p>
          </MotionDiv>

          <div className="max-w-3xl mx-auto pb-20">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                variants={fadeInUp}
                className="mb-4"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors rounded-lg"
                  >
                    <span className="font-semibold text-white pr-4 ">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-300 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-4 animate-fadeIn">
                      <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4" />
                      <p className="text-gray-200 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </Container>
    </Section>
  );
}
