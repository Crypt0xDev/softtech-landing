import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/i18n/translations';
import type { Language } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (typeof translations)['es'] | (typeof translations)['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Verificar idioma guardado
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      return savedLang;
    }

    // Detectar idioma del navegador
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      return 'es';
    }

    return 'es'; // Por defecto español
  });

  useEffect(() => {
    // Guardar en localStorage
    localStorage.setItem('language', language);

    // Actualizar atributo lang en HTML
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
