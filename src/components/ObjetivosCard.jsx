
import { motion } from 'framer-motion';

function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <motion.section
      className="tarjeta"
      whileHover={{
        scale: 1.03,
        y: -5
      }}
      transition={{
        duration: 0.3,
        ease: 'easeOut'
      }}
    >
      <h2>Objetivos de aprendizaje</h2>
      <p><strong>Competencia:</strong> {competencia}</p>
      <p><strong>Indicador de logro:</strong> {indicadorLogro}</p>
    </motion.section>
  );
}

export default ObjetivosCard;
