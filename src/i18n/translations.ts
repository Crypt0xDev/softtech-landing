export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      testimonials: 'Testimonios',
      faq: 'FAQ',
      contact: 'Contacto',
      quote: 'Cotizar Proyecto',
    },
    // Hero
    hero: {
      badge: 'Soluciones Digitales Profesionales',
      titlePart1: 'Soluciones Digitales',
      titlePart2: 'Profesionales',
      titlePart3: 'para',
      titleHighlight: 'Empresas en Perú',
      subtitle:
        'Desarrollo web, software empresarial y seguridad informática para',
      subtitleHighlight: 'impulsar tu negocio',
      subtitleEnd: 'en la era digital.',
      ctaPrimary: 'Solicitar Cotización',
      ctaSecondary: 'Ver Servicios',
      stats: {
        projects: 'Proyectos Completados',
        clients: 'Clientes Satisfechos',
        support: 'Soporte Técnico',
      },
    },
    // Services
    services: {
      title: 'Nuestros Servicios',
      subtitle:
        'Soluciones tecnológicas completas diseñadas específicamente para las necesidades de tu empresa',
      readMore: 'Leer más',
    },
    // About
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Tu socio tecnológico de confianza',
    },
    // Testimonials
    testimonials: {
      title: 'Lo Que Dicen Nuestros Clientes',
      subtitle: 'Historias reales de empresas que transformaron su negocio',
    },
    // FAQ
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre nuestros servicios',
    },
    // Contact
    contact: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudarte',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
    },
    // Footer
    footer: {
      quickLinks: 'Enlaces Rápidos',
      contactInfo: 'Contacto',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados',
    },
    // Theme
    theme: {
      light: 'Modo claro',
      dark: 'Modo oscuro',
      toggle: 'Cambiar tema',
    },
    // Language
    language: {
      spanish: 'Español',
      english: 'English',
      select: 'Idioma',
    },
  },
  en: {
    // Navbar
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
      quote: 'Get Quote',
    },
    // Hero
    hero: {
      badge: 'Professional Digital Solutions',
      titlePart1: 'Digital Solutions',
      titlePart2: 'Professional',
      titlePart3: 'for',
      titleHighlight: 'Companies in Peru',
      subtitle: 'Web development, enterprise software and IT security to',
      subtitleHighlight: 'boost your business',
      subtitleEnd: 'in the digital age.',
      ctaPrimary: 'Request Quote',
      ctaSecondary: 'View Services',
      stats: {
        projects: 'Completed Projects',
        clients: 'Satisfied Clients',
        support: 'Technical Support',
      },
    },
    // Services
    services: {
      title: 'Our Services',
      subtitle:
        'Complete technology solutions designed specifically for your company needs',
      readMore: 'Read more',
    },
    // About
    about: {
      title: 'About Us',
      subtitle: 'Your trusted technology partner',
    },
    // Testimonials
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Real stories from companies that transformed their business',
    },
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our services',
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: "We're here to help",
      name: 'Full name',
      email: 'Email address',
      phone: 'Phone',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
    },
    // Footer
    footer: {
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved',
    },
    // Theme
    theme: {
      light: 'Light mode',
      dark: 'Dark mode',
      toggle: 'Toggle theme',
    },
    // Language
    language: {
      spanish: 'Español',
      english: 'English',
      select: 'Language',
    },
  },
} as const;
