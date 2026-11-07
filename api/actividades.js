
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      error: 'Método no permitido'
    })
  }

  try {
    const respuesta = await fetch(
      `https://app.nocodb.com/api/v2/tables/${process.env.NOCODB_TABLE_ID}/records`,
      {
        headers: {
          'xc-token': process.env.NOCODB_TOKEN
        }
      }
    )

    if (!respuesta.ok) {
      throw new Error(`Error de NocoDB: ${respuesta.status}`)
    }

    const datos = await respuesta.json()

    return res.status(200).json(datos)
  } catch (error) {
    console.error('Error al consultar NocoDB:', error.message)

    return res.status(500).json({
      error: 'No se pudieron obtener las actividades'
    })
  }
}
