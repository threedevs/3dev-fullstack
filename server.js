const express = require('express')
const app = express()
const port = 1337
const bodyParser = require('body-parser')

require('dotenv').config()

const { userDoc } = require("./db/mongoose")

//cors settings, adapt to your needs in production
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, content-type")
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH')
    res.header('Access-Control-Expose-Headers', 'Authorization')
    res.header("Access-Control-Allow-Credentials", true)
    next();
})

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', require('./routers/users'));
app.use('/api/books', require('./routers/books'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})