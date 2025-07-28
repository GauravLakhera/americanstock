'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { MotionDiv, fadeInUp, staggerContainer } from './MotionWrapper';
import { getTimeUntilDate } from '../lib/utils';
import { siteConfig } from '../lib/config';
import Container from './Container';
import Section from './Section';


export default function BatchCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const time = getTimeUntilDate(siteConfig.nextBatchDate);
      setTimeLeft(time);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section className=" bg-black/10 text-white shadow-lg rounded-md">
      <Container>
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center shadow-xl py-4 rounded-lg"
        >
          <MotionDiv variants={fadeInUp} className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-lime-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Next Batch Starts Soon!
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't miss out on our next comprehensive trading program. 
              Limited seats available for personalized attention.
            </p>
          </MotionDiv>

          <MotionDiv variants={fadeInUp} className="mb-8">
            <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item) => (
                <div key={item.label} className="glass-card p-4">
                  <div className="text-3xl md:text-4xl font-bold text-lime-400 mb-2">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv variants={fadeInUp}>
            <button  className="mr-4 mb-4">
              Reserve Your Seat
            </button>
            <button  className="mb-4">
              Learn More
            </button>
          </MotionDiv>
        </MotionDiv>
      </Container>
    </Section>
  );
}