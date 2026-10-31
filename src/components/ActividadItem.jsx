
import { useState } from 'react';
import { motion } from 'framer-motion';

function ActividadItem({ titulo, descripcion }) {
  const [completada, setCompletada] = useState(false);

  return (
    <motion.article
      layout
      className="tarjeta"
      animate={{
        backgroundColor: completada ? '#e8f5e9' : '#ffffff'
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut'
      }}
    >
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <motion.p layout>
        <strong>Estado: </strong>
        {completada ? 'Completada' : 'Pendiente'}
      </motion.p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setCompletada(!completada)}
      >
        {completada ? 'Marcar como pendiente' : 'Completar actividad'}
      </motion.button>
    </motion.article>
  );
}

export default ActividadItem;
