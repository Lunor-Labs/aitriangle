import React from 'react';
import { Bot, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { colors } from '../styles/colors';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'AI Chatbots',
    'AI Consultancy',
    'Process Automation',
    'Data Analytics',
    'AI Security',
    'Custom Solutions'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <Bot className="h-8 w-8 text-teal-500" />
              <span className="text-2xl font-bold">AITriangle</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md mx-auto md:mx-0">
              Transforming businesses through innovative AI solutions. We empower organizations 
              to leverage artificial intelligence for sustainable growth and competitive advantage.
            </p>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-teal-400" />
                <span>hello@aitriangle.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-teal-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-teal-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-gray-400 text-sm">
            © 2025 AITriangle. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2 rounded-lg bg-teal-500 hover:bg-teal-700 transition-all duration-200 group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;