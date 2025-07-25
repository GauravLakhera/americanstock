"use client";

import {
  TrendingUp,
  Users,
  BookOpen,
  Shield,
  Award,
  PieChart, // <-- NEW IMPORT
} from "lucide-react";

import { MotionDiv, fadeInUp, staggerContainer } from "./MotionWrapper";
import { benefits } from "@/lib/config";
import Container from "./Container";
import Section from "./Section";

const iconMap = {
  TrendingUp,
  Users,
  BookOpen,
  Shield,
  Award,
  PieChart, // <-- MAP NEW ICON
};

export default function BenefitsGrid() {
  return (
    <Section className="bg-white">
      <Container>
        {/* -------- Headline -------- */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <MotionDiv variants={fadeInUp}>
            <div className="inline-block px-4 py-2 border border-black/10 rounded-full text-sm font-medium text-black/60 mb-6">
              ✨ TRADING EXCELLENCE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
              Why Choose Our
              <span className="block relative">
                Trading Program?
                <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-black/80"></div>
              </span>
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
              Our comprehensive approach combines practical experience with
              expert guidance to ensure your success in the stock market.
            </p>
          </MotionDiv>
        </MotionDiv>

        {/* -------- 6-card Grid -------- */}
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            const dark = index % 2 === 1; // alternate cards

            return (
              <MotionDiv
                key={benefit.title}
                variants={fadeInUp}
                className={`group relative p-8 border border-black/10 rounded-3xl transition-all duration-500 hover:border-black hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] cursor-pointer
                            ${
                              dark
                                ? "bg-black/80 text-white"
                                : "bg-white text-black"
                            }`}
              >
                {/* icon */}
                <div
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all
                              ${
                                dark
                                  ? "bg-white text-black"
                                  : "bg-black text-white"
                              } group-hover:scale-110`}
                >
                  <Icon className="w-7 h-7" />
                  <div
                    className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse
                                ${dark ? "bg-white" : "bg-black"}`}
                  />
                </div>

                {/* copy */}
                <h3 className="text-xl font-bold leading-tight mb-3">
                  {benefit.title}
                </h3>
                <p
                  className={`${
                    dark ? "text-white/80" : "text-black/70"
                  } text-sm leading-relaxed`}
                >
                  {benefit.description}
                </p>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </Container>
    </Section>
  );
}
