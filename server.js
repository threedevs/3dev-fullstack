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


app.get('/', (req, res) => {
    console.log("GET")
    res.send('Hello World!')
})

app.post('/', async (req, res) => {
    try {
        console.log("POST")
        console.log(req.body)
        //validate every property from start to finish
        //here we skipped password hashing and strength
        //here we skipped username validation (is string length min max)
        if (req.body.password !== req.body.password2) {
            return res.sendStatus(401)
        }
        const newUser = new userDoc(req.body)
        const userRes = await newUser.save()
        if (!userRes) {
            throw new Error("failed to make user")
        }

        return res.json(req.body)
    } catch (e) {
        console.error(e)
        return res.sendStatus(500)
    }
})
app.put('/', (req, res) => {
    console.log("PUT")
    res.send('Got a PUT request at /user')
})

app.delete('/', (req, res) => {
    console.log("DELETE")
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})