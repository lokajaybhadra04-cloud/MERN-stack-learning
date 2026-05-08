const asyncHandler=require('express-async-handler');

const Task=require('../models/taskModel');

//  console.log(asyncHandler);
//  console.log(Task);


const gettasks=asyncHandler(async (req,res)=>{
    const tasks=await Task.find();
    // console.log(tasks);
    res.status(200).json(tasks);
}
)

const createtask=asyncHandler(async (req,res)=>{
  console.log("Request Body:", req.body);
if(!req.body.text || !req.body){
    res.status(400)
    throw new Error('please enter a task');
}

    const task=await Task.create(req.body);
    // console.log(task);  
    res.status(201).json(task);
}
)

const updatetask=asyncHandler(async (req,res)=>{
;
  if(!req.body.text || !req.body){
    res.status(400);
    throw new Error('please enter a task and ensure the id in the URL matches the id in the request body');
  }
    const task = await Task.findByIdAndUpdate(
   req.params.id,
   req.body,
   { returnDocument: 'after' }
);
    // console.log(task);
    // console.log(req.body);
    // console.log(req.params);
    res.status(200).json(task);
}
)       

const deletetask=asyncHandler(async (req,res)=>{
    const task=await Task.findByIdAndDelete(req.params.id);
    console.log("task deleted:", task);
    res.status(200).json(task );
} )



module.exports={
    gettasks,
    createtask,
    updatetask,
    deletetask
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

