const asynchandler = require('express-async-handler')


const GetContacts = asynchandler(async(req,res) => {
   res.json({Message:"Get Request"})
})
const createContacts = asynchandler(async(req,res) => {
   
    const {name, email, phone} = req.body

    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields Are Mandatory")
    }
    res.json({Message:"Created Contact"})


})

module.exports = {GetContacts, createContacts}