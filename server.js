require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, content-type");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Expose-Headers', 'Authorization');
    res.header("Access-Control-Allow-Credentials", true);
    next();
})
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))

//in memory database
const fakeDatabase = [];

app.get('/', (req, res) => {
    console.log("GET")
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    console.log("POST");
    console.log(req.body)
    //validate every property from start to finish
    //here we skipped password hashing and strength
    //here we skipped username validation (is string length min max)
    if (req.body.password1 !== req.body.password2) {
        return res.sendStatus(401)
    }
    if (fakeDatabase.find(u => u.username === req.body.username)) {
        return res.sendStatus(401)
    }
    delete req.body.password2
    fakeDatabase.push(req.body)
    delete req.body.password1
    return res.json(req.body)
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