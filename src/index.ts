import express from 'express'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cookieParser()) // для анализа файлов cookie
app.use(express.json()) // для анализа приложения/json

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
