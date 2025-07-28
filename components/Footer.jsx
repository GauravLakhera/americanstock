import Link from 'next/link';
import { Instagram, Send, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../lib/config';
import Container from './Container';

export default function Footer() {
  return (
    <footer className=" bg-gray-50 text-black border-t border-black">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
  <img className=' w-[6rem]' src='/images/logo.png'></img>
              </div>
              <p className="text-gray-800 mb-6 max-w-md">
                Empowering individuals with the knowledge and skills needed to succeed in the stock market. 
                Join thousands of successful traders who learned from the best.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Link
                  href={siteConfig.social.instagram}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href={siteConfig.social.telegram}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Telegram"
                >
                  <Send size={20} />
                </Link>
                <Link
                  href={siteConfig.social.youtube}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {siteConfig.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-800 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className=''>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Phone size={16} className="mt-1 text-blue-900" />
                  <span className="text-gray-800">{siteConfig.contact.phone}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail size={16} className="mt-1 text-blue-900" />
                  <span className="text-gray-800">{siteConfig.contact.email}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin size={16} className="mt-1 text-blue-900" />
                  <span className="text-gray-800">{siteConfig.contact.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-800 text-sm uppercase">
              © 2025 ABSOLUTE STOCK MARKET INSTITUTE. All rights reserved.
            </p>
            <p className="text-gray-800 text-sm mt-2 md:mt-0">
              Made with ❤️ for aspiring traders
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}