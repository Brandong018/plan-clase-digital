
function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <section className="tarjeta">
      <h2>Objetivos de aprendizaje</h2>
      <p><strong>Competencia:</strong> {competencia}</p>
      <p><strong>Indicador de logro:</strong> {indicadorLogro}</p>
    </section>
  );
}

export default ObjetivosCard;
