import express from 'express'
import uploadCepRoutes from './routes/upload-ceps.js'

const app = express()

app.use('/api', uploadCepRoutes)
app.use(express.static('web/public'))

export default app
