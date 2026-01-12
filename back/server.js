const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const userRoutes = require('./routes/LoginRoutes')
const projectRoutes = require('./routes/ProjectRoutes')

const app = express()


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://portfolio-fawn-five-43.vercel.app"
  ],
  credentials: true 
}));
app.use(express.json({ limit: '15mb' }))
app.use(express.urlencoded({ extended: true, limit: '15mb' }))
app.use(cookieParser())

app.use('/api/user', userRoutes)
app.use('/api/project', projectRoutes)

const PORT = process.env.PORT || 5000


mongoose.connect(process.env.MONGO_DB, {

}).then(() => {
    console.log('MongoDB connected successfully')
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
})