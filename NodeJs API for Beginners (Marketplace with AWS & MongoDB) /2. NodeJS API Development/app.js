const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
dotenv.config()

mongoose.connect(
    process.env.MONGO_URI
).then(() => console.log('DB Connected!'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// bring in routes
const postRoutes = require('./routes/post')

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(expressValidator())
app.use('/', postRoutes)

const PORT = 3000
app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) })