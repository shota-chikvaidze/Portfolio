const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const contactRoutes = require('./routes/ContactRoutes')
const userRoutes = require('./routes/LoginRoutes')
const projectRoutes = require('./routes/ProjectRoutes')

const app = express()

app.use(cors())
app.use(express.json())
dotenv.config()

app.use('/api/contact', contactRoutes)
app.use('/api/user', userRoutes)
app.use('/api/project', projectRoutes)

const PORT = process.env.PORT || 5000


mongoose.connect(process.env.MONGO_DB, {

}).then(() => {
    console.log('MongoDB connected successfully')
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
})