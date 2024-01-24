require('dotenv').config()

const express = require('express')

const app = express()
const Port = process.env.PORT || 3000

app.listen(Port , console.log(`Server Running On Port ${Port}`))