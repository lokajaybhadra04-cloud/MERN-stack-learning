const express = require('express');
// console.log(express);
const { errorHandler } = require('./middleware/errorMiddleware');
// console.log(errorHandler);
const dotenv =require('dotenv').config();
// console.log(dotenv);
const connectDB=require('./connect/database');
// console.log(connectDB);
const port=process.env.PORT || 5000;
// console.log(port);

// console.log(process.env);
connectDB();
const app=express();
// console.log(app);

  

// app.get('/api/tasks',(req,res)=>{
//     // res.send('get all tasks');

//     res.status(200).json({message:'get all tasks'});
// });


app.use(express.json());
app.use(express.urlencoded({extended: false}));





app.use('/api/tasks',require('./routes/taskRoutes'));



app.use(errorHandler)



app.listen(port,()=>
console.log(`server listening on ${port}`));