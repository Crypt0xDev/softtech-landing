export const COMPANY_INFO = {
  name: import.meta.env.VITE_COMPANY_NAME || 'Tu Empresa',
  address: import.meta.env.VITE_COMPANY_ADDRESS || 'Av. Principal 123, Lima',
  email: import.meta.env.VITE_COMPANY_EMAIL || 'contacto@tuempresa.com',
  phone: import.meta.env.VITE_COMPANY_PHONE || '+51 999 999 999',
  coverage:
    import.meta.env.VITE_COMPANY_COVERAGE ||
    'Atención en todo Perú – Servicio remoto',
} as const;

export const SOCIAL_LINKS = {
  facebook:
    import.meta.env.VITE_SOCIAL_FACEBOOK || 'https://facebook.com/tuempresa',
  linkedin:
    import.meta.env.VITE_SOCIAL_LINKEDIN ||
    'https://linkedin.com/company/tuempresa',
  twitter:
    import.meta.env.VITE_SOCIAL_TWITTER || 'https://twitter.com/tuempresa',
  instagram:
    import.meta.env.VITE_SOCIAL_INSTAGRAM || 'https://instagram.com/tuempresa',
} as const;

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio', key: 'home' },
  { label: 'Servicios', href: '#services', key: 'services' },
  { label: 'Nosotros', href: '#about', key: 'about' },
  { label: 'Testimonios', href: '#testimonials', key: 'testimonials' },
  { label: 'FAQ', href: '#faq', key: 'faq' },
  { label: 'Contacto', href: '#contact', key: 'contact' },
] as const;
