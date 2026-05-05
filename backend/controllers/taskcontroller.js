const asyncHandler=require('express-async-handler');

const Task=require('../models/taskModel');

console.log(Task);


const gettasks=asyncHandler(async (req,res)=>{
    const tasks=await Task.find();
    res.status(200).json(tasks);
}
)

const createtask=asyncHandler(async (req,res)=>{
  //  console.log(req.body);
if(!req.body.text || !req.body){
    res.status(400)
    throw new Error('please enter a task');
}

    const task=await Task.create(req.body);
    res.status(201).json(task);
}
)

const updatetask=asyncHandler(async (req,res)=>{
    const task=await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(task);
}
)       

const deletetask=asyncHandler(async (req,res)=>{
    const task=await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(task );
} )

module.exports={
    gettasks,
    createtask,
    updatetask,
    deletetask
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

