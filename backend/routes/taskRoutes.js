const express = require('express');

const router=express.Router();
const {gettasks}=require('../controllers/taskController'); 

const {createtask}=require('../controllers/taskController');  

const {updatetask}=require('../controllers/taskController');  

const {deletetask}=require('../controllers/taskController');  






router.get('/',gettasks); 


router.post('/',createtask);

router.put('/:id',updatetask);

router.delete('/:id',deletetask);



module.exports=router;