import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = import.meta.env.VITE_SITE_TITLE ||
    'Tu Empresa - Desarrollo Web Profesional',
  description = import.meta.env.VITE_SITE_DESCRIPTION ||
    'Empresa líder en desarrollo web, e-commerce y soluciones tecnológicas. Servicio profesional en todo Perú.',
  keywords = import.meta.env.VITE_SITE_KEYWORDS ||
    'desarrollo web, diseño web, tiendas online, e-commerce, landing pages',
  ogImage = '/og-image.jpg',
  ogUrl = import.meta.env.VITE_SITE_URL || 'https://tuempresa.com',
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: ogUrl },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Spanish' },
      {
        name: 'author',
        content: import.meta.env.VITE_COMPANY_NAME || 'Tu Empresa',
      },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });
  }, [title, description, keywords, ogImage, ogUrl]);

  return null;
};

export default SEO;
