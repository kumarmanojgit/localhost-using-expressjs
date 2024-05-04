const express=require('express');
const app=express();
 const port=8000;

 get.app('/',(req,res)=>{
  res.send("welcome to my chelnel");
 });
 app.listen(port,()=>{
  console.log(`listen the port ${port}`);
 })