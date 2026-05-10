// const asyncHandler=require('express-async-handler');

// const Task=require('../models/taskModel');


//  const users=require('../MOCK_DATA.json');

// //console.log(typeof(users));

// //[{"id":1,"first_name":"Eric",
// // "last_name":"Menhenitt",
// // "email":"emenhenitt0@twitpic.com",
// // "gender":"Male"},

// //  console.log(asyncHandler);
// //  console.log(Task);


// const gettasks=asyncHandler(async (req,res)=>{
//     // const tasks = await Task.find().select('-_id -__v');

//     const tasks = await Task.find();


// res.status(200).json(tasks);
// }
// )


// const gettask=asyncHandler(async (req,res)=>{
//     const task = await Task.findById(req.params.id).select('-_id -__v');

//     if(!task){
//         res.status(404);
//         throw new Error('task not found');
//     }
//     res.status(200).json(task);
// });

// const createtask=asyncHandler(async (req,res)=>{

// if(!req.body|| !req.body.text){
//     res.status(400)
//     throw new Error('please enter a task');
// }
// // const createdTask = await Task.create(req.body);

// // const task = await Task.findById(createdTask._id)
// //    .select('-_id -__v');

// // res.status(201).json(task);

// const task = await Task.create(req.body);

// res.status(201).json(task);



// }
// )

// const updatetask=asyncHandler(async (req,res)=>{
// ;
//   if(!req.body.text || !req.body){
//     res.status(400);
//     throw new Error('please enter a task and ensure the id in the URL matches the id in the request body');
//   }
//     const task = await Task.findByIdAndUpdate(
//    req.params.id,
//    req.body,
//    { new:true }
// );
//     // console.log(task);
//     // console.log(req.body);
//     // console.log(req.params);
//     res.status(200).json(task);
// }
// )       

// const deletetask=asyncHandler(async (req,res)=>{
//     const task=await Task.findByIdAndDelete(req.params.id);
//     console.log("task deleted:", task);
//     res.status(200).json(task );
// } )



// module.exports={
//     gettasks,
//     gettask,
//     createtask,
//     updatetask,
//     deletetask
// }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   



























// //from mock data json


// const asyncHandler = require('express-async-handler');

// const users = require('../MOCK_DATA.json');

// /**
//  * users is array of user objects, each user object 
//  * has the following properties:
//  * id, first_name, last_name, email,
//  */


// // GET USERS
// const gettasks = asyncHandler(async (req, res) => {

//    res.status(200).json(users);
// });

// const gettask=asyncHandler(async (req,res)=>{
//     const task = await Task.findById(req.params.id);
//     if(!task){
//         res.status(404);
//         throw new Error('task not found');
//     }
//     res.status(200).json(task);
// });    


// // CREATE USER
// const createtask = asyncHandler(async (req, res) => {

//    const body = req.body;

//    if (
//       !body.first_name ||
//       !body.last_name ||
//       !body.email ||
//       !body.gender
//    ) {

//       res.status(400);
//       throw new Error('Please provide all fields');
//    }

//    const newUser = {
//       id: users.length + 1,
//       first_name: body.first_name,
//       last_name: body.last_name,
//       email: body.email,
//       gender: body.gender
//    };

//    users.push(newUser);

//    res.status(201).json(newUser);
// });


// // UPDATE USER
// const updatetask = asyncHandler(async (req, res) => {

//    const id = Number(req.params.id);
//    console.log("id:", id);


//    const user = users.find((u) => u.id === id);

//    console.log("user:", user);

// // user type is 
// // object, user is undefined
// //  when id is not found in the users array,
// //  and user is the user object when id is
// //  found in the users array.

//    if (!user) {

//       res.status(404);
//       throw new Error('User not found');
//    }

//    user.first_name = req.body.first_name || user.first_name;

//    user.last_name = req.body.last_name || user.last_name;

//    user.email = req.body.email || user.email;

//    user.gender = req.body.gender || user.gender;

//    res.status(200).json(user);
// });


// // DELETE USER
// const deletetask = asyncHandler(async (req, res) => {

//    const id = Number(req.params.id);

//    const index = users.findIndex((u) => u.id === id);

//    if (index === -1) {

//       res.status(404);
//       throw new Error('User not found');
//    }

//    const deletedUser = users.splice(index, 1);

//    res.status(200).json(deletedUser);
// });


// module.exports = {
//    gettasks,
//    gettask,
//    createtask,
//    updatetask,
//    deletetask
// };


























//from mockdata copy to mongogdb  from here the get the data
const asyncHandler = require('express-async-handler');

const User = require('../models/Model');


// GET ALL USERS

const getusers = asyncHandler(async (req, res) => {

   const users = await User.find();

   res.status(200).json(users);
});
// GET SINGLE USER

const getuser = asyncHandler(async (req, res) => {

   const user = await User.findById(req.params.id);

   if(!user){

      res.status(404);

      throw new Error('User not found');
   }

   res.status(200).json(user);
});


// CREATE USER

const createuser = asyncHandler(async (req, res) => {

   const body = req.body;

   if(
       
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender
   ){

      res.status(400);

      throw new Error('Please provide all fields');
   }

   const user = await User.create({

   
     

      first_name: body.first_name,

      last_name: body.last_name,

      email: body.email,

      gender: body.gender
   });

   res.status(201).json(user);
});


// UPDATE USER

const updateuser = asyncHandler(async (req, res) => {

   const user = await User.findById(req.params.id);

   if(!user){

      res.status(404);

      throw new Error('User not found');
   }

   user.first_name = req.body.first_name || user.first_name;

   user.last_name = req.body.last_name || user.last_name;

   user.email = req.body.email || user.email;

   user.gender = req.body.gender || user.gender;

   const updatedUser = await user.save();

   res.status(200).json(updatedUser);
});


// DELETE USER

const deleteuser = asyncHandler(async (req, res) => {

   const user = await User.findById(req.params.id);

   if(!user){

      res.status(404);

      throw new Error('User not found');
   }

   await user.deleteOne();

   res.status(200).json({
      message: 'User deleted'
   });
});


//delete all users
const deleteusers = asyncHandler(async (req, res) => {

  
   await User.deleteMany();
   
        // db.users.drop()
    await User.collection.drop();

   res.status(200).json({
      message: 'All User deleted'
 
   });
});


module.exports = {

   getusers,

   getuser,

   createuser,

   updateuser,

   deleteuser,

   deleteusers
};