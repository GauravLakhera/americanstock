"use client";

import { useState, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Instagram,
  Youtube,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  MotionDiv,
  fadeInUp,
  staggerContainer,
  slideInFromLeft,
  slideInFromRight,
} from "@/components/MotionWrapper";
import { siteConfig } from "../../lib/config";
import Container from "../../components/Container";
import Section from "../../components/Section";

export default function ContactPage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    interested: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", interested: false });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-20 pb-24 text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
        </div>

        <Container className="relative z-10">
          <MotionDiv
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center py-20"
          >
            <MotionDiv variants={fadeInUp}>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
                📞 GET IN TOUCH
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Contact
                <span className="block text-white/80">Our Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Ready to start your trading journey? Have questions about our
                programs? Our expert mentors are here to help you succeed.
              </p>
            </MotionDiv>
          </MotionDiv>
        </Container>
      </section>

      {/* CTA Banner */}
      <Section className="bg-black/80 text-white">
        <Container>
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🔥 Seats Filling Fast — Talk to a Mentor Now
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Limited seats available in our next batch. Don't miss this
              opportunity!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: {siteConfig.contact.phone}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(
                  /[^0-9]/g,
                  ""
                )}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </MotionDiv>
        </Container>
      </Section>

      {/* Contact Content */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <MotionDiv
              variants={slideInFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-black/10 rounded-full text-sm font-medium text-black/70 mb-8">
                📍 CONTACT DETAILS
              </div>
              <h2 className="text-4xl font-bold text-black mb-12">
                Get In Touch
              </h2>

              <div className="space-y-8 mb-12">
                {/* Phone */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Phone & WhatsApp
                    </h3>
                    <p className="text-lg text-black/70 mb-1">
                      {siteConfig.contact.phone}
                    </p>
                    <p className="text-sm text-black/60">
                      WhatsApp: {siteConfig.contact.whatsapp}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Email</h3>
                    <p className="text-lg text-black/70">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      Office Address
                    </h3>
                    <p className="text-lg text-black/70 leading-relaxed">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-black mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href={siteConfig.social.instagram}
                    className="group p-4 bg-black rounded-2xl text-white hover:bg-black/90 transition-all duration-300 hover:scale-105"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href={siteConfig.social.telegram}
                    className="group p-4 bg-black rounded-2xl text-white hover:bg-black/90 transition-all duration-300 hover:scale-105"
                    aria-label="Telegram"
                  >
                    <Send className="w-6 h-6" />
                  </a>
                  <a
                    href={siteConfig.social.youtube}
                    className="group p-4 bg-black rounded-2xl text-white hover:bg-black/90 transition-all duration-300 hover:scale-105"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </MotionDiv>

            {/* Contact Form */}
            <MotionDiv
              variants={slideInFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-black/5 backdrop-blur-sm border border-black/10 rounded-3xl p-10">
                <div className="inline-block px-4 py-2 bg-black/10 rounded-full text-sm font-medium text-black/70 mb-6">
                  ✉️ SEND MESSAGE
                </div>
                <h2 className="text-3xl font-bold text-black mb-8">
                  Send us a Message
                </h2>

                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-black mb-3"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-black/20 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-black placeholder-black/50"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-black mb-3"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-black/20 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-black placeholder-black/50"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-black mb-3"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-6 py-4 border border-black/20 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300 text-black placeholder-black/50 resize-none"
                      placeholder="Tell us about your interest in trading or ask any questions..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="interested"
                      name="interested"
                      checked={formData.interested}
                      onChange={handleChange}
                      className="w-5 h-5 text-black bg-white border-black/20 rounded focus:ring-black"
                    />
                    <label
                      htmlFor="interested"
                      className="ml-3 text-sm text-black/70"
                    >
                      I'm interested in joining the next trading batch
                    </label>
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-2xl">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-green-800 font-medium">
                        Message sent successfully! We'll get back to you soon.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                      <span className="text-red-800 font-medium">
                        Failed to send message. Please try again or call us
                        directly.
                      </span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-black text-white font-semibold rounded-2xl hover:bg-black/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </MotionDiv>
          </div>
        </Container>
      </Section>

      {/* Google Map Section */}
      <Section className="bg-gray-50">
        <Container>
          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-black/10 rounded-full text-sm font-medium text-black/70 mb-6">
              📍 VISIT US
            </div>
            <h2 className="text-4xl font-bold text-black mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Come meet our team in person and get a feel for our learning
              environment.
            </p>
          </MotionDiv>

          <MotionDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-black/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.2090298970065!2d78.05284976958708!3d30.298726698424797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa184f357e100c3df%3A0xdad2868a30c0a63f!2sAmerican%20Stock%20Market%20Institute%20%7C%20Stock%20Market%20Institute%20in%20Dehradun%20%7C%20Trading%20Institute%20in%20Dehradun%20%7C%20Share%20Market%20Institute!5e0!3m2!1sen!2sin!4v1753686541127!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="American Stock Market Institute Location"
            />
          </MotionDiv>

          {/* Location info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white rounded-2xl border border-black/10">
              <h3 className="font-bold text-black mb-2">Office Hours</h3>
              <p className="text-black/70">Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-black/10">
              <h3 className="font-bold text-black mb-2">Parking</h3>
              <p className="text-black/70">Free parking available</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-black/10">
              <h3 className="font-bold text-black mb-2">Public Transport</h3>
              <p className="text-black/70">Near metro station</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
