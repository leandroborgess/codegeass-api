const express = require ("express")
const bodyParser = require ("body-parser")
const app = express()
const router = require('./src/modules/router/router')

app.use(bodyParser.json())

app.use("/", router)

app.listen(3000, () => {
    console.log("codegeass-api is running at port 3000")
})