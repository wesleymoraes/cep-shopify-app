import express from 'express'
import uploadCepRoutes from './routes/upload-ceps.js'

const app = express()
app.use('/api', uploadCepRoutes)

export default app