import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919833208327";
    const text = `*New Appointment Booking*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-brand-pink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info & Map */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">Find Us</span>
              <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-brand-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Our Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      N Pimenta Bldg Ground Floor Shop, Building No 1, Marol Village Rd, Bori Colony, Marol, Andheri East, Mumbai, Maharashtra 400059
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-brand-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Call Us</h4>
                    <a href="tel:+919833208327" className="text-gray-600 text-sm hover:text-brand-gold transition-colors">
                      +91 98332 08327
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0 text-brand-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Opening Hours</h4>
                    <p className="text-gray-600 text-sm">Mon - Sun: 10:00 AM - 09:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1234567890!2d72.8765432109!3d19.1123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86999999999%3A0x9999999999999999!2sClassy%20Curlss%20Salon%20%26%20Makeup%20Studio!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Classy Curlss Location"
                ></iframe>
                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://maps.app.goo.gl/Bg6GmHHe7E8iDNp79"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-brand-gold px-4 py-2 rounded-lg shadow-md text-sm font-medium flex items-center gap-2 hover:bg-brand-gold hover:text-white transition-all"
                  >
                    <MapPin size={16} />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Form */}
          <div id="booking" className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-brand-pink"
            >
              <h3 className="text-3xl font-serif mb-2">Book Appointment</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll confirm your booking via WhatsApp.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Haircut & Styling">Haircut & Styling</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Facial & Skin Care">Facial & Skin Care</option>
                      <option value="Bridal Makeup">Bridal Makeup</option>
                      <option value="Party Makeup">Party Makeup</option>
                      <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-brand-gold text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/20 hover:bg-brand-gold/90 transition-all"
                >
                  <Send size={20} />
                  Book via WhatsApp
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
