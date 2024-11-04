const express = require('express')
const app = express()

const PORT = 3000

// Bring in Routes
const postRoutes = require('./routes/post')

app.get('/', postRoutes.getPosts)

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`) })