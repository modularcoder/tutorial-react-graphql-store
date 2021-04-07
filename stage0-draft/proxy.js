// Ref: https://github.com/chimurai/http-proxy-middleware/tree/v0.21.0#example

const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()

app.use('/api', proxy({ target: 'http://localhost:4000', changeOrigin: true, ws: true }))

app.use('/app', proxy({ target: 'http://localhost:3000', changeOrigin: true, ws: true }))

app.listen(8080)
