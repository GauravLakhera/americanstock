"use client";

import {
  Phone,
  Calendar,
  Users,
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { MotionDiv, fadeInUp, staggerContainer } from "./MotionWrapper";
import Container from "./Container";
import Section from "./Section";
import Link from "next/link";

export default function BatchCTA() {
  return (
    <Section className="bg-blue-950 text-white relative overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
      </div>

      <Container>
        <MotionDiv
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10"
        >
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Message */}
            <MotionDiv variants={fadeInUp} className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  LIMITED SEATS AVAILABLE
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  New Batch Starting
                  <span className="block text-white/70">August 15, 2025</span>
                </h2>

                <p className="text-xl text-white/80 leading-relaxed">
                  Don't miss your chance to join India's most practical trading
                  program. Our next batch has limited seats and they're filling
                  up fast!
                </p>
              </div>

              {/* Key Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <Calendar className="w-6 h-6 mb-3 text-white/70" />
                  <div className="text-sm text-white/60">Start Date</div>
                  <div className="font-semibold text-white">Aug 15, 2025</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <Clock className="w-6 h-6 mb-3 text-white/70" />
                  <div className="text-sm text-white/60">Duration</div>
                  <div className="font-semibold text-white">6 Weeks</div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <Users className="w-6 h-6 mb-3 text-white/70" />
                  <div className="text-sm text-white/60">Batch Size</div>
                  <div className="font-semibold text-white">
                    Max 25 Students
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                  <MapPin className="w-6 h-6 mb-3 text-white/70" />
                  <div className="text-sm text-white/60">Mode</div>
                  <div className="font-semibold text-white">
                    Online + Offline
                  </div>
                </div>
              </div>
            </MotionDiv>

            {/* Right Side - Contact Actions */}
            <MotionDiv variants={fadeInUp} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  Secure Your Spot Today
                </h3>

                <div className="space-y-4">
                  {/* Phone CTA */}
                  <div className="group bg-black/50 text-white rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-lg">Call Now</div>
                          <div className="text-sm text-white/80">
                            +91 9927586879
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* WhatsApp CTA */}

                  <a
                    href="https://wa.me/+919927586879?text=Hello%20I%20am%20interested%20in%20your%20trading%20programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="group bg-green-500 text-white rounded-2xl p-6 hover:bg-green-600 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MessageCircle className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-bold text-lg">WhatsApp</div>
                            <div className="text-sm text-white/80">
                              Get instant response
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>

                  {/* Contact Page CTA */}
                  <Link href="/contact">
                    <div className="group border border-white/20 text-white rounded-2xl p-6 hover:bg-white/5 hover:border-white/40 transition-all duration-300 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <MapPin className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-bold text-lg">Visit Us</div>
                            <div className="text-sm text-white/70">
                              View full contact details
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Urgency Message */}
                <div className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-center">
                  <div className="text-sm font-medium text-red-600">
                    ⚡ Seats Filling Fast
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">24hrs</div>
                  <div className="text-xs text-white/60">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-xs text-white/60">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-xs text-white/60">Years Experience</div>
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Bottom Testimonial */}
          <MotionDiv
            variants={fadeInUp}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="text-center max-w-3xl mx-auto">
              <blockquote className="text-xl font-light italic text-white/80 mb-6">
                "This program changed my financial future. The mentors are
                exceptional and the practical approach makes all the
                difference."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white/70" />
                </div>
                <div>
                  <div className="font-semibold text-white">Rahul Sharma</div>
                  <div className="text-sm text-white/60">
                    Batch 2024 Graduate
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
