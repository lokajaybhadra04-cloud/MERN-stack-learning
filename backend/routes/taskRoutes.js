const express = require('express');

const router=express.Router();
const {gettasks,createtask,updatetask,deletetask}=require('../controllers/taskController'); 


// console.log(router);



router.get('/',gettasks); 


router.post('/',createtask);

router.put('/:id',updatetask);

router.delete('/:id',deletetask);

// console.log(router);

module.exports=router;