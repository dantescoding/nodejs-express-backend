const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const endpoint = require('./routes/routes')
const app = express()
// const options = cors.CorsOptions = {
//     origin:['*','https://senichimaro.github.io/lovies/', 'https://senichimaro.github.io/*', 'https://github.io/*']
// }
// app.use( cors( options ) )
app.use( cors() )

app.use( bodyParser.urlencoded({extended:false}) )
app.use( bodyParser.json() )


app.use( endpoint )

module.exports = app