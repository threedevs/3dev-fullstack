window.onload = () => {
    //make a POST request
    fetch("http://localhost:3000", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ username: "kwlski", password: "supersafepw", password2: "supersafepw" })
    }).then(res => {
        console.log(res)
        return res.status === 200 ? res.json() : Promise.reject()
    }).then(data => {
        console.log(data)
    }).catch(err => {
        console.error(err)
    }).finally(() => {
        console.log("done")
    });
}