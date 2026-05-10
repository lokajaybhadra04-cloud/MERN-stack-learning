const express = require('express');

const router=express.Router();
const {getusers,getuser,createuser,updateuser,deleteuser,deleteusers}=require('../controllers/controller'); 


// console.log(router);



router.get('/',getusers); 

router.get('/:id',getuser); 


router.post('/',createuser);

router.put('/:id',updateuser);

router.delete('/:id',deleteuser);

router.delete('/',deleteusers); 

// console.log(router);

module.exports=router;