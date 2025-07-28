'use client';

import { useState, useEffect } from 'react';
import { Award, Users, Clock, TrendingUp, Target, Shield, Lightbulb } from 'lucide-react';
import { MotionDiv, fadeInUp, staggerContainer, slideInFromLeft, slideInFromRight } from '@/components/MotionWrapper';
import { siteConfig } from "../../lib/config";
import { formatNumber } from '../../lib/utils';
import Container from '../../components/Container';
import Section from '../../components/Section';

function CounterAnimation({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{formatNumber(count)}</span>;
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative pt-20 pb-24 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/bg1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10 10-4.5 10-10 10-10-4.5-10-10 4.5-10 10-10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
               }} 
          />
        </div>
        
        <Container className="relative z-10">
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center py-20"
          >
            <MotionDiv variants={fadeInUp}>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                ✨ PERFECTION
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                About Our
                <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Institute
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                Empowering traders with professional guidance, practical experience, 
                and proven strategies for stock market success.
              </p>
              
              {/* Hero stats pills */}
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="font-bold text-2xl">1,000+</span>
                  <span className="text-white/80 ml-2">Students</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="font-bold text-2xl">5+</span>
                  <span className="text-white/80 ml-2">Years</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <span className="font-bold text-2xl">95%</span>
                  <span className="text-white/80 ml-2">Success Rate</span>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </Container>
      </section>

      {/* Enhanced Stats Section */}
      <Section className="bg-white -mt-12 relative z-20">
        <Container>
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Users, label: 'Students Trained', value: siteConfig.stats.studentsTrained, suffix: '+', color: 'from-blue-500 to-blue-600' },
              { icon: Clock, label: 'Years Active', value: siteConfig.stats.yearsActive, suffix: '+', color: 'from-green-500 to-green-600' },
              { icon: TrendingUp, label: 'Success Rate', value: siteConfig.stats.successRate, suffix: '%', color: 'from-purple-500 to-purple-600' }
            ].map((stat, index) => (
              <MotionDiv
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold text-black mb-3">
                  <CounterAnimation end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </Container>
      </Section>

      {/* Enhanced Our Story */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionDiv
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-black/10 rounded-full text-sm font-medium text-black/70 mb-6">
                📖 OUR JOURNEY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Founded in 2013, the American Stock Market Institute has been at the forefront 
                  of financial education in India. What started as a small initiative to help 
                  individuals understand the stock market has grown into one of the most trusted 
                  names in trading education.
                </p>
                <p>
                  Our journey began with a simple mission: to demystify the stock market and 
                  make professional trading education accessible to everyone. Over the years, 
                  we've trained thousands of successful traders who now manage their own 
                  portfolios with confidence.
                </p>
                <p>
                  With both online and offline reach across India, we've established ourselves 
                  as a leading institute that combines theoretical knowledge with practical, 
                  hands-on experience in live market conditions.
                </p>
              </div>
              
              {/* Timeline */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="font-semibold">2019</span>
                  <span className="text-gray-600">Institute Founded</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="font-semibold">2021</span>
                  <span className="text-gray-600">Online Platform Launch</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="font-semibold">2023</span>
                  <span className="text-gray-600">1,000+ Students Milestone</span>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-black text-white rounded-3xl p-8 shadow-2xl">
                <div className="h-full flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-8">Our Achievements</h3>
                  <ul className="space-y-6">
                    <li className="flex items-center group">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="text-lg">Best Trading Institute 2023</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                        <Users className="w-6 h-6" />
                      </div>
                      <span className="text-lg">1,000+ Successful Graduates</span>
                    </li>
                    <li className="flex items-center group">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <span className="text-lg">95% Student Success Rate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </MotionDiv>
          </div>
        </Container>
      </Section>

      {/* Enhanced Why We're Different */}
      <Section className="bg-white">
        <Container>
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <MotionDiv variants={fadeInUp}>
              <div className="inline-block px-4 py-2 bg-black/10 rounded-full text-sm font-medium text-black/70 mb-6">
                ⭐ WHAT MAKES US SPECIAL
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Why We're Different
              </h2>
              <p className="text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
                Our unique approach combines practical experience with expert mentorship 
                to ensure your success in the stock market.
              </p>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Practical vs Theory",
                description: "We focus on real-world application rather than just theoretical concepts. Our students learn by doing, not just reading.",
                icon: Target,
                bgColor: "bg-blue-50",
                iconColor: "text-blue-600"
              },
              {
                title: "Live Markets",
                description: "All training happens with live market data and real trading scenarios. Experience the actual market conditions from day one.",
                icon: TrendingUp,
                bgColor: "bg-green-50",
                iconColor: "text-green-600"
              },
              {
                title: "Lifetime Mentorship",
                description: "Our relationship doesn't end with course completion. Get lifetime support and guidance from our expert mentors.",
                icon: Shield,
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600"
              }
            ].map((feature, index) => (
              <MotionDiv
                key={feature.title}
                variants={fadeInUp}
                className="group p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </MotionDiv>
            ))}
          </MotionDiv>
        </Container>
      </Section>

      {/* Enhanced Mission Statement */}
      <Section className="bg-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
        </div>
        
        <Container className="relative z-10">
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              🎯 OUR MISSION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
              Empowering Financial Freedom
            </h2>
            <p className="text-2xl leading-relaxed text-white/90 mb-12">
              To empower individuals with the knowledge, skills, and confidence needed to succeed 
              in the stock market. We believe that with the right education and guidance, anyone 
              can build wealth and achieve financial freedom through smart trading and investing.
            </p>
            
            {/* Core values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge teaching methods" },
                { icon: Shield, title: "Trust", desc: "Transparent and ethical practices" },
                { icon: Target, title: "Results", desc: "Proven track record of success" }
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-white/70">{value.desc}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
        </Container>
      </Section>
    </>
  );
}
