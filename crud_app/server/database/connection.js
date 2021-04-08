const mongoose = require('mongoose')
const connectDB = async()=>{
    try {
        // mongodb connection
        const con  = await mongoose.connect('mongodb://localhost/users',{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true,
            
        })
        console.log(`mongodb connected ${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

    
}
module.exports = connectDB;