import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919833208327"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* Mobile Call Button (Visible only on mobile) */}
      <motion.a
        href="tel:+919833208327"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden w-14 h-14 bg-brand-gold text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        title="Call Us"
      >
        <Phone size={28} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
