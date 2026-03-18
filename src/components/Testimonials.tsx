import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Bridal Client",
      text: "Classy Curlss did my bridal makeup and it was absolutely stunning! I received so many compliments. Highly recommend their makeup services.",
      rating: 5
    },
    {
      name: "Anjali Mehta",
      role: "Regular Customer",
      text: "The best salon in Andheri East. Their hair spa and facial treatments are so relaxing. The staff is professional and very polite.",
      rating: 5
    },
    {
      name: "Sneha Kapoor",
      role: "Party Makeup",
      text: "Got my party makeup done for a friend's wedding. It was subtle yet glamorous, exactly what I wanted. Thank you for the great service!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-medium tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4 mb-6">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-pink-light p-10 rounded-[2rem] relative"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/20" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-serif text-xl">{review.name}</h4>
                <p className="text-brand-gold text-sm uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
