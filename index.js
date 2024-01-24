require('dotenv').config()

const express = require('express')
const ConnectDb = require('./config/dbConnection')



const app = express()
app.use(express.json())
const Port = process.env.PORT || 3000
ConnectDb()

app.use('/', require('./routes/root'))

app.listen(Port , console.log(`Server Running On Port ${Port}`))