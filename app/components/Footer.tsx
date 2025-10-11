'use client';

import React, { useCallback } from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = useCallback((href: string) => {
    if (typeof window === 'undefined') return;
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">THE GAZIPUR AIR</h3>
                <p className="text-sm text-gray-400 -mt-1">INTERNATIONAL</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading training institute and skilled manpower supplier in Bangladesh, empowering professionals for global career success through comprehensive training and ethical recruitment services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-emerald-400" />
                <span className="text-gray-300">{contactInfo.website}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#programs')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Training Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#gallery')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Training Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Training Programs</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Electrical & Electronics</li>
              <li>English Language</li>
              <li>Professional Development</li>
              <li>Technical Trades</li>
              <li>Welding & Fabrication</li>
              <li>Computer Skills</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} THE GAZIPUR AIR INTERNATIONAL. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>BAIRA Member</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;