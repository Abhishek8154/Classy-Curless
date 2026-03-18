import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
                alt="Salon Experience"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-pink rounded-2xl -z-10 hidden md:block"
            ></motion.div>
            <div className="absolute -top-10 -left-10 w-32 h-32 border-4 border-brand-gold/20 rounded-full -z-10"></div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-8 leading-tight">
                Classy Curlss Salon & Makeup Studio
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Located in the heart of Marol, Andheri East, Classy Curlss is more than just a salon—it's a destination for transformation and self-care. We believe that every individual deserves to feel beautiful and confident.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Our team of experienced beauticians and makeup artists use premium products and the latest techniques to ensure you receive the best care possible. From everyday grooming to your most special occasions, we are here to make you shine.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="text-4xl font-serif text-brand-gold mb-2">10+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif text-brand-gold mb-2">5k+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Happy Clients</p>
                </div>
              </div>

              <a
                href="#booking"
                className="inline-block bg-brand-gold text-white px-8 py-4 rounded-full font-medium hover:bg-brand-gold/90 transition-all shadow-lg shadow-brand-gold/20"
              >
                Experience Excellence
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
