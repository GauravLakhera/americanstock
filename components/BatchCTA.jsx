"use client";

import {
  Phone,
  Calendar,
  Users,
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Zap,
  Star,
  CheckCircle,
} from "lucide-react";
import { MotionDiv, fadeInUp, staggerContainer } from "./MotionWrapper";
import Container from "./Container";
import Section from "./Section";
import Link from "next/link";

export default function BatchCTA() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,_transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <Container>
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10"
        >
          {/* Hero Section */}
          <MotionDiv variants={fadeInUp} className="text-center mb-16">
            {/* Floating Alert Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4 animate-bounce" />
              <span className="relative">
                LIMITED SEATS AVAILABLE
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-none">
              NEW BATCH
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                STARTING SOON
              </span>
            </h1>

            {/* Date Display */}
            <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
              <div className="text-4xl font-bold text-green-400 mb-2">August 15, 2025</div>
              <div className="text-white/80">Mark your calendars</div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Don't miss your chance to join India's most practical trading program. 
              Our next batch has limited seats and they're filling up fast!
            </p>
          </MotionDiv>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Info Cards Column */}
            <MotionDiv variants={fadeInUp} className="lg:col-span-1 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-green-400" />
                Batch Details
              </h3>

              {[
                { icon: Calendar, label: "Start Date", value: "Aug 15, 2025", color: "bg-blue-500" },
                { icon: Clock, label: "Duration", value: "6 Weeks", color: "bg-green-500" },
                { icon: Users, label: "Batch Size", value: "Max 15 Students", color: "bg-purple-500" },
                { icon: MapPin, label: "Mode", value: "Online + Offline", color: "bg-orange-500" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm">{item.label}</div>
                      <div className="text-white font-bold text-lg">{item.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </MotionDiv>

            {/* Contact Actions Column */}
            <MotionDiv variants={fadeInUp} className="lg:col-span-2">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Secure Your Spot</h3>
                  <p className="text-gray-300">Choose your preferred way to connect</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Phone CTA */}
                  <div className="group relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 hover:from-gray-700 hover:to-gray-600 transition-all duration-500 cursor-pointer transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-4 bg-blue-500 rounded-2xl group-hover:bg-white group-hover:text-blue-500 transition-all">
                          <Phone className="w-8 h-8" />
                        </div>
                        <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Call Now</h4>
                      <p className="text-blue-300 font-mono text-lg">+91 9927586879</p>
                      <p className="text-gray-400 text-sm mt-2">Instant consultation</p>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/+919927586879?text=Hello%20I%20am%20interested%20in%20your%20trading%20programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8 hover:from-green-500 hover:to-green-400 transition-all duration-500 cursor-pointer transform hover:scale-105">
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white group-hover:text-green-500 transition-all">
                            <MessageCircle className="w-8 h-8" />
                          </div>
                          <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-2 transition-transform" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">WhatsApp</h4>
                        <p className="text-green-100">Get instant response</p>
                        <p className="text-green-200 text-sm mt-2">Available 24/7</p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Contact Page CTA */}
                <Link href="/contact">
                  <div className="group bg-white/5 border-2 border-white/20 rounded-3xl p-6 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500 rounded-xl group-hover:rotate-12 transition-transform">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">Visit Our Office</h4>
                          <p className="text-gray-400">View full contact details</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>

                {/* Urgency Banner */}
                <div className="mt-8 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2 text-red-300 font-bold">
                    <Zap className="w-5 h-5 animate-bounce" />
                    Only 8 Seats Left - Register Today!
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Stats & Social Proof */}
          <MotionDiv variants={fadeInUp} className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { value: "24hrs", label: "Response Time", icon: Clock },
              { value: "100%", label: "Satisfaction", icon: Star },
              { value: "500+", label: "Students Trained", icon: Users },
              { value: "5+", label: "Years Experience", icon: CheckCircle },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </MotionDiv>

          {/* Testimonial */}
          <MotionDiv variants={fadeInUp} className="relative">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="text-6xl text-white/20 mb-4">"</div>
                <blockquote className="text-2xl font-light text-white mb-6 italic">
                  This program changed my financial future. The mentors are exceptional 
                  and the practical approach makes all the difference.
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-lg">Rahul Sharma</div>
                    <div className="text-gray-400">Batch 2024 Graduate</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </MotionDiv>
      </Container>
    </Section>
  );
}
