require('dotenv').config()
const cors = require('cors')

const express = require('express')
const ConnectDb = require('./config/dbConnection')

cors.use(cors({
    origin:"*"
}

))



const app = express()
app.use(express.json())
const Port = process.env.PORT || 3000
ConnectDb()

app.use('/', require('./routes/root'))

app.listen(Port , console.log(`Server Running On Port ${Port}`))