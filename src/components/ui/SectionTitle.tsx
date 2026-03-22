import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
}) => {
  const alignment = centered ? 'text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${alignment}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
