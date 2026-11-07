
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = 3001;

app.get('/api/actividades', async (req, res) => {
  try {
    const respuesta = await fetch(
      `https://app.nocodb.com/api/v2/tables/${process.env.NOCODB_TABLE_ID}/records`,
      {
        headers: {
          'xc-token': process.env.NOCODB_TOKEN
        }
      }
    );

    if (!respuesta.ok) {
      throw new Error(`Error de NocoDB: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    console.error('Error al consultar NocoDB:', error.message);
    res.status(500).json({
      error: 'No se pudieron obtener las actividades'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
