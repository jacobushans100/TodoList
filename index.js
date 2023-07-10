const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('./app/config/mongo.config')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Terhunbung ke Database : ${db.mongoURI}`)
}).catch((err) => {
    console.log(`Gagal Terhubung ke Database ${err}`)
})

app.get('/', (req, res) => {
    res.json({
        message: "API berhasil didapat"
    })
})

const todo = require("./app/routes/todo.route")
app.use("/api", todo)
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server berjalan di PORT ${PORT}`)
})