const mongoose=require('mongoose');
const asyncHandler=require('express-async-handler');

const connectDB=asyncHandler(   async()=>{

        const conn=await mongoose.connect(process.env.MONGO_URI);
    if(conn){
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }   
     else{
        throw new Error('Failed to connect to MongoDB');
    }
  
})


module.exports=connectDB;