
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';
import './App.css';

function App() {
  return (
    <main className="contenedor">
      <HeaderClase
        tituloTema="Comprensión lectora y análisis de textos"
        nombreDocente="Brandon Gonzalez"
        horario="Jornada matutina"
      />

      <ObjetivosCard
        competencia="Desarrolla habilidades de comprensión e interpretación de textos escritos."
        indicadorLogro="Identifica ideas principales y secundarias en diferentes lecturas."
      />

      <section className="actividades">
        <h2>Actividades de aprendizaje</h2>

        <ActividadItem
          titulo="Actividad 1: Lectura comprensiva"
          descripcion="Leer un texto breve e identificar su idea principal."
        />

        <ActividadItem
          titulo="Actividad 2: Análisis de información"
          descripcion="Identificar tres ideas secundarias que apoyen la idea principal."
        />

        <ActividadItem
          titulo="Actividad 3: Reflexión"
          descripcion="Redactar un párrafo sobre el mensaje principal de la lectura."
        />
      </section>

      <footer className="pie-pagina">
        <p>Plan de Clase Digital Interactivo | 2026</p>
      </footer>
    </main>
  );
}

export default App;
