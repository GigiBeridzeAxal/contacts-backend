
const mongoose = require('mongoose')

const ConnectDb = async() =>{

    try{
        const connect = await mongoose.connect(process.env.DB)
        console.log("Database Connected",
        connect.connection.host,
        connect.connection.name
        )
          
        if(connect){
            console.log("connected")
        }else{
            console.log("Not COnnected")
        }

    }catch(err){
        console.log(err)
        process.exit(1)
    }
    
}

module.exports = ConnectDb