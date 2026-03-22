import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: '¿Cuánto tiempo toma desarrollar un sitio web?',
      answer:
        'El tiempo varía según la complejidad. Una landing page toma 1-2 semanas, mientras que un e-commerce completo puede tomar 4-8 semanas. Te daremos un cronograma detallado en la cotización.',
    },
    {
      id: 2,
      question: '¿Ofrecen soporte después de la entrega?',
      answer:
        'Sí, ofrecemos soporte técnico 24/7 y mantenimiento continuo. Todos nuestros proyectos incluyen 3 meses de soporte gratuito post-entrega.',
    },
    {
      id: 3,
      question: '¿Trabajan con pequeñas empresas?',
      answer:
        'Absolutamente. Trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones. Adaptamos nuestros servicios a tu presupuesto.',
    },
    {
      id: 4,
      question: '¿Qué tecnologías utilizan?',
      answer:
        'Utilizamos tecnologías modernas y probadas como React, Node.js, TypeScript, Tailwind CSS, y más. Elegimos la mejor tecnología para cada proyecto específico.',
    },
    {
      id: 5,
      question: '¿Incluyen diseño en el servicio?',
      answer:
        'Sí, nuestro equipo incluye diseñadores UI/UX profesionales. Creamos diseños modernos, responsivos y centrados en la experiencia del usuario.',
    },
    {
      id: 6,
      question: '¿Cómo es el proceso de pago?',
      answer:
        'Trabajamos con pagos por hitos: 40% al inicio, 40% a mitad del proyecto, y 20% final. Aceptamos transferencias bancarias y otros métodos de pago.',
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <Container size="md">
        <SectionTitle
          title="Preguntas Frecuentes"
          subtitle="Resolvemos tus dudas sobre nuestros servicios"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-secondary-900 rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors"
              >
                <span className="font-semibold text-secondary-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-primary-600 dark:text-primary-400">
                  {openId === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-secondary-700 dark:text-secondary-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-600 dark:text-secondary-400 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a
            href="#contact"
            className="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            Contáctanos directamente →
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQSection;
