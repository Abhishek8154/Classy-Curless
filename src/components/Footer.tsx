import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-brand-gold-light">Classy Curlss</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your premium destination for luxury beauty and makeup services in Andheri East, Mumbai. We bring out the best in you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Our Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Haircut & Styling</li>
              <li>Bridal Makeup</li>
              <li>Facial & Skin Care</li>
              <li>Hair Spa & Treatment</li>
              <li>Manicure & Pedicure</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold flex-shrink-0" />
                <span>Marol Village Rd, Andheri East, Mumbai, 400059</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold flex-shrink-0" />
                <a href="tel:+919833208327" className="hover:text-brand-gold">+91 98332 08327</a>
              </li>
              <li className="flex items-center gap-3">
                <ExternalLink size={18} className="text-brand-gold flex-shrink-0" />
                <a href="https://maps.app.goo.gl/Bg6GmHHe7E8iDNp79" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">Google Business Profile</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Classy Curlss Salon & Makeup Studio. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-[10px] mt-2 uppercase tracking-[0.2em]">
            Designed for Elegance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
