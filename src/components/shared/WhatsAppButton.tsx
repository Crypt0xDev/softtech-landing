import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/utils/analytics';

const WhatsAppButton: React.FC = () => {
  const message =
    import.meta.env.VITE_WHATSAPP_MESSAGE ||
    'Hola, me interesa cotizar un proyecto de desarrollo web';
  const phone = import.meta.env.VITE_WHATSAPP_PHONE || '51999999999';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    trackWhatsAppClick();
  };

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <MessageCircle size={24} className="sm:w-7 sm:h-7" />

      {/* Tooltip - Hidden on mobile */}
      <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-secondary-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        ¿Necesitas ayuda? Chatea con nosotros
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
    </motion.a>
  );
};

export default WhatsAppButton;
