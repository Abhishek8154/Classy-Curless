import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Heart, ShieldCheck, Award, Droplets } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      title: "Hair Services",
      icon: <Scissors className="text-brand-gold" />,
      items: ["Haircut & Styling", "Hair Coloring", "Hair Spa & Treatment", "Keratin & Smoothening"]
    },
    {
      title: "Beauty Services",
      icon: <Sparkles className="text-brand-gold" />,
      items: ["Facial & Skin Care", "Waxing & Threading", "Manicure & Pedicure", "Body Polishing"]
    },
    {
      title: "Makeup Services",
      icon: <Heart className="text-brand-gold" />,
      items: ["Bridal Makeup", "Party Makeup", "Engagement Makeup", "Editorial Makeup"]
    }
  ];

  const features = [
    { icon: <Award size={32} />, title: "Certified Beauty Experts", desc: "Our team consists of highly trained and certified professionals." },
    { icon: <Droplets size={32} />, title: "Premium Quality Products", desc: "We use only the finest international brands for your treatments." },
    { icon: <ShieldCheck size={32} />, title: "Hygienic Environment", desc: "Your safety and hygiene are our top priorities at all times." },
    { icon: <Heart size={32} />, title: "Personalized Beauty Care", desc: "Every treatment is tailored to your unique needs and style." }
  ];

  return (
    <section id="services" className="py-24 bg-brand-pink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold font-medium tracking-widest uppercase text-sm"
          >
            Our Offerings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif mt-4 mb-6"
          >
            Luxury Salon Services
          </motion.h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-pink hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-brand-pink-light rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                {React.cloneElement(category.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-2xl font-serif mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#booking"
                className="inline-block mt-8 text-brand-gold font-medium border-b border-brand-gold/30 hover:border-brand-gold transition-all"
              >
                Book This Service
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm border border-brand-pink">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Why Choose Us?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We provide a sanctuary of beauty where luxury meets expertise.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-brand-gold flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-serif text-xl mb-3">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
