// write basic express boilerplate code
// write express.json() middleware

const express = require('express');
const { createTodo, updateTodo} = require('./types');
const app = express();

app.use(express.json()); 

// body {
    title : String;
    description: String;
//}

app.post("/todo", (req,res)=>{
    const  createPayload = req.body;
    const  paresedPayload = createTodo.safeParse(createPayload);
    if(!paresedPayload.success){
        res.status(411).json({
            msg : "You sent wrong data"
        })
        return;
    }   
    // put it in mongo db
})

app.get("/todos",(req,res)=>{


})

app.put("/completed",(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(parsedPayload.success){
        res.status(411).json({
            msg : "You sent wrong data"
        })
        return;
    }



})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})