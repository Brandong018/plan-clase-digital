
import { motion } from 'framer-motion';

function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <motion.header
      className="encabezado-clase"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1>{tituloTema}</h1>
      <p><strong>Docente:</strong> {nombreDocente}</p>
      <p><strong>Horario:</strong> {horario}</p>
    </motion.header>
  );
}

export default HeaderClase;
