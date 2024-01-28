const asynchandler = require('express-async-handler')
const databasecontact = require('../models/contactmodel')



const deletecontact = asynchandler(async(req,res) =>{
console.log(req.body)

    const deletedata = await databasecontact.findById(req.body.Key)
  
 const del =  await databasecontact.deleteOne({
        "_id":req.body.Key
    })
    if(del){
     console.log("deleted")
    }
    res.json({Message:"ESA"})

})

const Getblock = asynchandler(async(req,res) =>{
     res.status(404)
   
     res.json("Page Not Found")



})

const GetContacts = asynchandler(async(req,res) => {


    const secret = req.body 
    if(secret.password == "BestWebsiteInTheWorld"){
        const data = await databasecontact.find()
        console.log(data)
       res.json(data)
    }else{
        res.status(404)
        throw new Error("Page Not Found")
    }
   
})
const createContacts = asynchandler(async(req,res) => {
   
    const {name, lastname, phone , packet} = req.body

    if(!name || !lastname || !phone || !packet ){
        res.status(400)
        throw new Error("All Fields Are Mandatory")
    }

    const contactmake = await databasecontact.create({
        name,
        lastname,
        phone,
        packet
    })
    res.json({Message:"Created Contact"})


})

module.exports = {GetContacts,deletecontact , Getblock, createContacts}