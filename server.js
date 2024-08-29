const express = require('express')
const app = express()
const db=require("./db")
require("dotenv").config()

const bodyParser=require("body-parser")
app.use(bodyParser.json())

const Person=require("./models/Person")
const MenuItem=require("./models/MenuItem")

app.get('/', function (req, res) {
  res.send('Hello World')
})

// 












const personRoutes=require("./routes/personRoutes")
const menuRoutes=require("./routes/menuRoutes")


app.use("/person",personRoutes)
app.use("/menu",menuRoutes)


const PORT=process.env.PORT || 3000


app.listen(PORT,()=>console.log(`server started at 3000`))