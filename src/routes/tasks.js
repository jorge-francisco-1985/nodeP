const express = require('express');
const router=express.Router();
const Task=require("../models/task");
router.get('/',async(req,res)=>{
    const tasks=await Task.find();
    res.json(tasks);
    // res.send('API tasks is goes here');
});

router.post("/",async (req,res)=>{
    const task= new Task(req.body);
    await task.save();
//    console.log(task);
   res.json({
       status:"tarea terminada"
   });
});

router.put('/:id',async(req,res)=>{
    await Task.findByIdAndUpdate(req.params.id,req.body);
    res.json({
        res:req.body,
        status:"Se modifico correctamente"
    });

});

router.delete('/:id',async(req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status:"Se elimino correctamente"
    });
});

module.exports=router;