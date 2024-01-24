const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, " PLease Add Contact Name"]
       },
       email:{
        type:String,
        required:[true, " PLease Add Contact email adress"]
       },
       phone:{
        type:String,
        required:[true, " PLease Add Contact phone number"]
       }
       


}, {
    timestamps:true,
})

module.exports = mongoose.model("Contacts", contactSchema)