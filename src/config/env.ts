// Environment Variables Configuration
// Archivo de ayuda para acceder a las variables de entorno con TypeScript

declare global {
  interface ImportMetaEnv {
    // Empresa
    readonly VITE_COMPANY_NAME: string;
    readonly VITE_COMPANY_EMAIL: string;
    readonly VITE_COMPANY_PHONE: string;
    readonly VITE_COMPANY_ADDRESS: string;
    readonly VITE_COMPANY_COVERAGE: string;

    // WhatsApp
    readonly VITE_WHATSAPP_PHONE: string;
    readonly VITE_WHATSAPP_MESSAGE: string;

    // Redes Sociales
    readonly VITE_SOCIAL_FACEBOOK: string;
    readonly VITE_SOCIAL_LINKEDIN: string;
    readonly VITE_SOCIAL_TWITTER: string;
    readonly VITE_SOCIAL_INSTAGRAM: string;

    // Analytics
    readonly VITE_GA_TRACKING_ID: string;

    // Formulario de Contacto
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
    readonly VITE_FORMSUBMIT_EMAIL: string;
    readonly VITE_API_URL: string;
    readonly VITE_API_KEY: string;

    // SEO
    readonly VITE_SITE_URL: string;
    readonly VITE_SITE_TITLE: string;
    readonly VITE_SITE_DESCRIPTION: string;
    readonly VITE_SITE_KEYWORDS: string;

    // Entorno
    readonly VITE_ENV: string;
  }
}

export const env = {
  // Empresa
  companyName: import.meta.env.VITE_COMPANY_NAME || 'Tu Empresa',
  companyEmail: import.meta.env.VITE_COMPANY_EMAIL || 'contacto@tuempresa.com',
  companyPhone: import.meta.env.VITE_COMPANY_PHONE || '+51 999 999 999',
  companyAddress:
    import.meta.env.VITE_COMPANY_ADDRESS || 'Av. Principal 123, Lima',
  companyCoverage:
    import.meta.env.VITE_COMPANY_COVERAGE || 'Atención en todo Perú',

  // WhatsApp
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE || '51999999999',
  whatsappMessage:
    import.meta.env.VITE_WHATSAPP_MESSAGE ||
    'Hola, me interesa cotizar un proyecto',

  // Redes Sociales
  socialFacebook:
    import.meta.env.VITE_SOCIAL_FACEBOOK || 'https://facebook.com/tuempresa',
  socialLinkedin:
    import.meta.env.VITE_SOCIAL_LINKEDIN ||
    'https://linkedin.com/company/tuempresa',
  socialTwitter:
    import.meta.env.VITE_SOCIAL_TWITTER || 'https://twitter.com/tuempresa',
  socialInstagram:
    import.meta.env.VITE_SOCIAL_INSTAGRAM || 'https://instagram.com/tuempresa',

  // Analytics
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || '',

  // Formulario
  emailjsServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  emailjsTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  emailjsPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  formsubmitEmail: import.meta.env.VITE_FORMSUBMIT_EMAIL || '',
  apiUrl: import.meta.env.VITE_API_URL || '',
  apiKey: import.meta.env.VITE_API_KEY || '',

  // SEO
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://tuempresa.com',
  siteTitle:
    import.meta.env.VITE_SITE_TITLE ||
    'Tu Empresa - Desarrollo Web Profesional',
  siteDescription:
    import.meta.env.VITE_SITE_DESCRIPTION || 'Empresa líder en desarrollo web',
  siteKeywords: import.meta.env.VITE_SITE_KEYWORDS || 'desarrollo web, perú',

  // Utilidades
  isDevelopment: import.meta.env.VITE_ENV === 'development',
  isProduction: import.meta.env.VITE_ENV === 'production',
} as const;
