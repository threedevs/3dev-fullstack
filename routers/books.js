app.get('/', (req, res) => {
    console.log("GET")
    res.send('Hello World!')
})
app.get('/:id', (req, res) => {
    console.log("GET")
    //how to get id?
    res.send('Hello World!')
})
app.get('/s/:search', (req, res) => {
    console.log("GET")
    res.send('Hello World!')
})

app.put('/', (req, res) => {
    console.log("PUT")
    res.send('Got a PUT request at /user')
})

app.delete('/', (req, res) => {
    console.log("DELETE")
    res.send('Got a DELETE request at /user')
})