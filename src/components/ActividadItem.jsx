
import { useState } from 'react';

function ActividadItem({ titulo, descripcion }) {
  const [completada, setCompletada] = useState(false);

  return (
    <article className="tarjeta">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <p>
        <strong>Estado: </strong>
        {completada ? 'Completada' : 'Pendiente'}
      </p>

      <button onClick={() => setCompletada(!completada)}>
        {completada ? 'Marcar como pendiente' : 'Completar actividad'}
      </button>
    </article>
  );
}

export default ActividadItem;
