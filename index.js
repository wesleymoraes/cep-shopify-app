import app from './web/backend/server.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`)
})
