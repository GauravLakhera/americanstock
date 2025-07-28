"use client";

import {
  TrendingUp,
  Users,
  BookOpen,
  Shield,
  Award,
  PieChart,
} from "lucide-react";

import { MotionDiv, fadeInUp, staggerContainer } from "./MotionWrapper";
import { benefits } from "../lib/config";
import Container from "./Container";
import Section from "./Section";
import Link from "next/link";

const iconMap = {
  TrendingUp,
  Users,
  BookOpen,
  Shield,
  Award,
  PieChart,
};

export default function BenefitsGrid() {
  return (
    <Section className="bg-gradient-to-br from-gray-50 via-white to-green-500/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Header Section */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <MotionDiv variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6 border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              TRADING EXCELLENCE
            </span>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-[0.9]">
              Why Choose Our
              <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent relative">
                Trading Program?
                <svg 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-3" 
                  viewBox="0 0 120 12" 
                  fill="none"
                >
                  <path 
                    d="M2 6C40 2 80 10 118 6" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="text-green-400"
                  />
                </svg>
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Our comprehensive approach combines practical experience with
              expert guidance to ensure your success in the stock market.
            </p>
          </MotionDiv>
        </MotionDiv>

        {/* Benefits Cards - New Masonry-Style Layout */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-auto"
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            const isFeature = index === 0 || index === 3; // Make certain cards featured
            const gradients = [
              "from-blue-500 to-purple-600",
              "from-green-500 to-teal-600", 
              "from-orange-500 to-red-600",
              "from-purple-500 to-pink-600",
              "from-teal-500 to-cyan-600",
              "from-indigo-500 to-blue-600",
            ];

            return (
              <MotionDiv
                key={benefit.title}
                variants={fadeInUp}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl cursor-pointer
                  ${isFeature 
                    ? "md:col-span-2 xl:col-span-1 bg-white border-2 border-gray-200 p-10" 
                    : "bg-white border border-gray-200 p-8"
                  }`}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-1 group-hover:opacity-95 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${gradients[index]} text-white group-hover:bg-white group-hover:text-gray-800 transition-all duration-500`}>
                      <Icon className={`${isFeature ? 'w-8 h-8' : 'w-6 h-6'} transition-transform group-hover:scale-110`} />
                      
                      {/* Floating Badge */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Card Number */}
                    <span className="text-6xl font-black text-gray-100 group-hover:text-white/20 transition-colors leading-none select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-4">
                    <h3 className={`font-bold text-gray-100 group-hover:text-white transition-colors leading-tight
                      ${isFeature ? 'text-2xl' : 'text-xl'}`}>
                      {benefit.title}
                    </h3>
                    
                    <p className={`text-gray-100 group-hover:text-white/90 transition-colors leading-relaxed
                      ${isFeature ? 'text-base' : 'text-sm'}`}>
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-white/50 transition-all duration-500"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-gray-100 rounded-full group-hover:border-white/30 transition-colors"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 border-2 border-gray-100 rounded-full group-hover:border-white/20 transition-colors"></div>
              </MotionDiv>
            );
          })}
        </MotionDiv>

        {/* Bottom CTA Section */}
        <MotionDiv
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-500 cursor-pointer group">
            <Link href='/contact'>Ready to Start Trading?</Link>
            <div className="w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              →
            </div>
          </div>
        </MotionDiv>
      </Container>
    </Section>
  );
}
