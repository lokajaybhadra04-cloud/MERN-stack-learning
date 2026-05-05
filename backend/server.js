const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');

const dotenv =require('dotenv').config();
const connectDB=require('./connect/database');

const port=process.env.PORT || 5000;

connectDB();
const app=express();

  

// app.get('/api/tasks',(req,res)=>{
//     // res.send('get all tasks');

//     res.status(200).json({message:'get all tasks'});
// });


app.use(express.json());
app.use(express.urlencoded({extended: false}));





app.use('/api/tasks',require('./routes/taskRoutes'));



app.use(errorHandler);



app.listen(port,()=>
console.log(`server listening on ${port}`));