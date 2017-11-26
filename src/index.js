const express = require('express')
const config = require('../config')
const app = express()

app.get('/', (req, res) => {
    res.send('test')
})

app.listen(config.port, () => {
    console.log(`listening http://localhost: ${config.port}`)
})