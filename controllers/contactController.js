const asynchandler = require('express-async-handler')
const databasecontact = require('../models/contactmodel')

const GetContacts = asynchandler(async(req,res) => {
    const contacts = await databasecontact.find()
   res.json(contacts)
})
const createContacts = asynchandler(async(req,res) => {
   
    const {name, email, phone} = req.body

    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields Are Mandatory")
    }

    const contactmake = await databasecontact.create({
        name,
        email,
        phone
    })
    res.json({Message:"Created Contact"})


})

module.exports = {GetContacts, createContacts}