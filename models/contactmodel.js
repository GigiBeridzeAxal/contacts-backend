const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, " PLease Add Contact Name"]
       },
       lastname:{
        type:String,
        required:[true, " PLease Add Contact email adress"]
       },
       phone:{
        type:String,
        required:[true, " PLease Add Contact phone number"]
       },
       packet:{
        type:String,
        required:[true, " PLease Add Contact packet number"]
       }
       


}, {
    timestamps:true,
})

module.exports = mongoose.model("Contacts", contactSchema)