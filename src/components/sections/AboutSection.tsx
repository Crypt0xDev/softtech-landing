import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Users, Award } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Orientados a Resultados',
      description:
        'Nos enfocamos en entregar soluciones que generen impacto real en tu negocio.',
    },
    {
      icon: Users,
      title: 'Equipo Experto',
      description:
        'Profesionales especializados con años de experiencia en tecnología.',
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description:
        'Utilizamos las mejores prácticas y tecnologías del mercado.',
    },
  ];

  const benefits = [
    'Soluciones escalables y modulares',
    'Código limpio y documentado',
    'Soporte continuo y mantenimiento',
    'Metodologías ágiles de desarrollo',
    'Seguridad y privacidad garantizada',
    'Capacitación para tu equipo',
  ];

  return (
    <section
      id="about"
      className="section-padding relative bg-white dark:bg-secondary-900 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <motion.div
        className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-bl from-primary-400/10 to-secondary-400/10 dark:from-primary-600/5 dark:to-secondary-600/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container className="relative z-10">
        <SectionTitle
          title={`Sobre ${import.meta.env.VITE_COMPANY_NAME || 'Nuestra Empresa'}`}
          subtitle="Tu socio tecnológico de confianza"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-xl text-secondary-700 dark:text-secondary-300 leading-relaxed">
              En{' '}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                {import.meta.env.VITE_COMPANY_NAME || 'Nuestra Empresa'}
              </span>
              , somos una empresa líder en soluciones digitales, especializada
              en desarrollo de software empresarial, tiendas online, y seguridad
              informática.
            </p>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
              Nuestro equipo de profesionales altamente capacitados trabaja día
              a día para transformar las ideas de nuestros clientes en
              soluciones tecnológicas{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                innovadoras
              </span>{' '}
              que impulsan el crecimiento de sus negocios.
            </p>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
              Utilizamos{' '}
              <span className="font-semibold text-secondary-900 dark:text-white">
                arquitectura escalable
              </span>
              , código limpio y las mejores prácticas de la industria para
              garantizar productos de{' '}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                alta calidad
              </span>{' '}
              que se adaptan al crecimiento de tu empresa.
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass bg-gradient-to-br from-secondary-50/80 to-primary-50/80 dark:from-secondary-800/80 dark:to-secondary-900/80 backdrop-blur-md rounded-3xl p-10 border border-secondary-200/50 dark:border-secondary-700/50 shadow-smooth relative overflow-hidden"
          >
            {/* Shine effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/5 to-transparent dark:from-primary-500/10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <h3 className="relative text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-8">
              ¿Por qué elegirnos?
            </h3>
            <ul className="relative space-y-5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group/item cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2
                      size={26}
                      className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5 group-hover/item:text-secondary-600 dark:group-hover/item:text-secondary-400 transition-colors duration-300"
                    />
                  </motion.div>
                  <span className="text-secondary-700 dark:text-secondary-300 text-lg group-hover/item:text-secondary-900 dark:group-hover/item:text-white transition-colors duration-300">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-default"
              >
                <motion.div
                  className="h-full glass bg-white/60 dark:bg-secondary-800/60 backdrop-blur-md rounded-2xl p-8 border border-secondary-200/50 dark:border-secondary-700/50 shadow-smooth hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden"
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/5 group-hover:to-secondary-500/5 dark:group-hover:from-primary-500/10 dark:group-hover:to-secondary-500/10 transition-all duration-300"
                    initial={false}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-6 inline-flex p-5 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 rounded-2xl group-hover:from-primary-600 group-hover:to-secondary-600 dark:group-hover:from-primary-600 dark:group-hover:to-secondary-600 transition-all duration-300 shadow-lg"
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <Icon
                      size={40}
                      className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300"
                    />
                  </motion.div>

                  <h4 className="relative text-2xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="relative text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
