import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  ShoppingCart,
  Shield,
  Wrench,
  Globe,
  Server,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web y Software',
      description:
        'Creamos soluciones web personalizadas y software empresarial a medida para optimizar tus procesos de negocio.',
      features: [
        'Aplicaciones web',
        'Software a medida',
        'APIs y microservicios',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Tiendas Online',
      description:
        'Diseñamos y desarrollamos tiendas online profesionales con sistemas de pago seguros y gestión completa.',
      features: ['E-commerce', 'Pasarelas de pago', 'Gestión de inventario'],
    },
    {
      icon: Globe,
      title: 'Landing Pages',
      description:
        'Landing pages de alta conversión diseñadas para captar leads y aumentar tus ventas.',
      features: ['Diseño profesional', 'SEO optimizado', 'Alta conversión'],
    },
    {
      icon: Server,
      title: 'Instalación y Configuración',
      description:
        'Instalación y configuración de soluciones digitales para tu empresa con soporte completo.',
      features: ['Migración de datos', 'Configuración cloud', 'Optimización'],
    },
    {
      icon: Shield,
      title: 'Seguridad Informática',
      description:
        'Protegemos tu negocio con las mejores prácticas de seguridad digital y protección de datos.',
      features: [
        'Auditorías de seguridad',
        'Protección de datos',
        'Backup automático',
      ],
    },
    {
      icon: Wrench,
      title: 'Soporte Técnico',
      description:
        'Soporte técnico especializado 24/7 para mantener tu negocio siempre operativo.',
      features: ['Soporte 24/7', 'Mantenimiento', 'Actualizaciones'],
    },
  ];

  return (
    <section
      id="services"
      className="section-padding relative bg-gradient-to-br from-secondary-50 via-white to-primary-50 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 dark:from-primary-600/10 dark:to-secondary-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-secondary-400/20 to-primary-400/20 dark:from-secondary-600/10 dark:to-primary-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <Container className="relative z-10">
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Soluciones digitales completas para potenciar tu empresa"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full"
              >
                <motion.div
                  className="h-full glass bg-white/70 dark:bg-secondary-800/70 backdrop-blur-md rounded-2xl p-6 border border-secondary-200/50 dark:border-secondary-700/50 shadow-smooth hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-600/10 dark:to-secondary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    initial={false}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-5 p-4 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 w-fit rounded-xl group-hover:from-primary-600 group-hover:to-secondary-600 dark:group-hover:from-primary-600 dark:group-hover:to-secondary-600 transition-all duration-300 shadow-md"
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <Icon
                      size={36}
                      className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300"
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative text-2xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative text-secondary-600 dark:text-secondary-300 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="relative space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="text-sm text-secondary-700 dark:text-secondary-400 flex items-center gap-3 group/item"
                      >
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full group-hover/item:scale-125 transition-transform duration-200"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="group-hover/item:text-secondary-900 dark:group-hover/item:text-white transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
