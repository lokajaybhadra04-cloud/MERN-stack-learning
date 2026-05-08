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


app.use(express.json());// express.json use is to parse the incoming request
//  body in JSON format and make it available under the req.body property. 
// This is particularly useful when you are working with APIs that receive 
// data in JSON format, such as when handling POST or PUT requests. By using express.json(),
//  you can easily access the data sent by the client in a structured way, allowing you to process it 
// and perform necessary operations based on the received data.
app.use(express.urlencoded({extended: false}));
//express.urlencoded is a built-in middleware function in Express.js that parses incoming requests with URL-encoded payloads. 
// It is based on the body-parser middleware and is used to handle form submissions and other URL-encoded data sent in the request body. 
// When you use express.urlencoded(), it parses the incoming request body and makes the data available under the req.body property, allowing 
// you to easily access and work with the form data or URL-encoded data sent by the client.   




app.use('/api/tasks',require('./routes/taskRoutes'));



app.use(errorHandler)



app.listen(port,()=>
console.log(`server listening on ${port}`));