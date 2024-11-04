const express = require('express')
const app = express()
const morgan = require('morgan')

// Bring in Routes
const postRoutes = require('./routes/post')

// middlewares
app.use(morgan('dev'))

app.use('/', postRoutes)

const PORT = 3000
app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) })