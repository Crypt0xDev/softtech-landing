export const COMPANY_INFO = {
  name: import.meta.env.VITE_COMPANY_NAME || 'SoftTech Perú',
  address: import.meta.env.VITE_COMPANY_ADDRESS || 'Jr. Sucre 832',
  email: import.meta.env.VITE_COMPANY_EMAIL || 'contacto@softtechperu.com',
  phone: import.meta.env.VITE_COMPANY_PHONE || '+51 912 920 569',
  coverage:
    import.meta.env.VITE_COMPANY_COVERAGE ||
    'Atención en todo Perú – Servicio remoto',
} as const;

export const SOCIAL_LINKS = {
  facebook:
    import.meta.env.VITE_SOCIAL_FACEBOOK || 'https://facebook.com/softtechperu',
  linkedin:
    import.meta.env.VITE_SOCIAL_LINKEDIN ||
    'https://linkedin.com/company/softtechperu',
  twitter:
    import.meta.env.VITE_SOCIAL_TWITTER || 'https://twitter.com/softtechperu',
  instagram:
    import.meta.env.VITE_SOCIAL_INSTAGRAM ||
    'https://instagram.com/softtechperu',
} as const;

export const NAV_LINKS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Contacto', href: '#contact' },
] as const;
