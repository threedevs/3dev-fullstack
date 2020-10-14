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