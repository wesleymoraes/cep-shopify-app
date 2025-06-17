import express from 'express'
import dotenv from 'dotenv'
import uploadCepRoutes from './routes/upload-ceps.js'

dotenv.config()

const app = express()
app.use('/api', uploadCepRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app