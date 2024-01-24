const asynchandler = require('express-async-handler')


const GetContacts = asynchandler(async(req,res) => {

})
const createContacts = asynchandler(async(req,res) => {
   
    const {name, email, phone} = req.body

    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All Fields Are Mandatory")
    }


})

module.exports = {GetContacts, createContacts}