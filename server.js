const express = require('express')
const app = express()

const port = 5000

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/views"))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})


app.listen(port, () => {
    console.log("-> Servidor online na porta ", port)
}) 