'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MotionDiv, fadeInUp, staggerContainer } from './MotionWrapper';
import { faqs } from '@/lib/config';
import Container from './Container';
import Section from './Section';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Section className="bg-gray-50">
      <Container>
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MotionDiv variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are the most common questions 
              about our trading programs.
            </p>
          </MotionDiv>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                variants={fadeInUp}
                className="mb-4"
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-navy-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
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