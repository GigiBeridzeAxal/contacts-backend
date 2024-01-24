
const mongoose = require('mongoose')

const ConnectDb = async() =>{

    try{
        const connect = await mongoose.connect(process.env.DB)
        console.log("Database Connected",
        connect.connection.host,
        connect.connection.name
        )
    }catch(err){
        console.log(err)
        process.exit(1)
    }
    
}