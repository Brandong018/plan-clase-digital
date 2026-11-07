
import { useEffect, useState } from 'react'

function ListaActividades() {
  const [actividades, setActividades] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controlador = new AbortController()

    async function obtenerActividades() {
      try {
        const respuesta = await fetch('/api/actividades', {
          signal: controlador.signal
        })

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar las actividades')
        }

        const datos = await respuesta.json()
        setActividades(datos.list ?? [])
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message)
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false)
        }
      }
    }

    obtenerActividades()

    return () => controlador.abort()
  }, [])

  if (cargando) {
    return <p>Cargando actividades...</p>
  }

  if (error) {
    return <p role="alert">Error: {error}</p>
  }

  return (
    <section className="actividades-nocodb">
      <h2>Actividades desde NocoDB</h2>

      {actividades.length === 0 ? (
        <p>No hay actividades registradas.</p>
      ) : (
        <ul>
          {actividades.map((actividad) => (
            <li key={actividad.Id}>
              <h3>{actividad.Title}</h3>

              <p>{actividad['Descripción']}</p>

              <p>
                <strong>Duración:</strong> {actividad.Duration} minutos
              </p>

              <p>
                <strong>Categoría:</strong> {actividad.Category}
              </p>

              <p>
                <strong>Estado:</strong>{' '}
                {actividad.Completed ? 'Completada' : 'Pendiente'}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaActividades
