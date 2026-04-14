'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: 'Facebook' },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: 'Instagram' },
  ];

  return (
    <footer className="text-white bg-secondary-900 dark:bg-secondary-950">
      <div className="container px-4 py-5 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Copyright */}
          <p className="text-sm text-secondary-400">
            &copy; {currentYear}{' '}
            <span className="font-semibold text-white">{COMPANY_INFO.name}</span>
            . Todos los derechos reservados.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialIcons.map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 transition-colors duration-200 rounded-lg bg-secondary-800 hover:bg-primary-600"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                whileHover={{
                  scale: 1.15,
                  y: -3,
                  transition: { type: 'tween', duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
