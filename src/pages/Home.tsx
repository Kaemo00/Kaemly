import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kaemly Morisseau | Développeur Web IA Junior</title>
        <meta
          name="description"
          content="Portfolio de Kaemly Morisseau - Développeur Web & IA passionné par la création d'applications modernes et innovantes."
        />
      </Helmet>

      <main className="min-h-screen pt-16">
        <section className="container py-20 md:py-32 flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Développeur Web IA Junior
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Passionné par la création d'applications web modernes et intelligentes. Je combine
            développement frontend et intégration d'IA pour créer des expériences uniques.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/projects" className="btn-primary">
              Voir mes projets
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Kaemo00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/morisseaukaemly"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};
