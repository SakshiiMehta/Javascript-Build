const express = require("express");

const app = express (); // Initialising express
app.use(express.json()); //to make application work in json format

const port = 8081; // local port num


const toDoList = ["learn", "apply things", "succed"];

// http://localhost:8081/todos
app.get("/todos",(req,res)=>{
  res.status(200 ).send(toDoList)


});

app.post("/todos",(req,res)=>{
  let newToDoItem = req.body.name;
  toDoList.push(newToDoItem);
  res.status(201).send({message: "Task Added Successfully"});
});

app.delete("/todos",(req,res)=>{
  const deleteThisItem = req.body.name;

  toDoList.find((elem,index)=>{
    if (elem === deleteThisItem){
      toDoList.splice(index,1);
    }
    res.status(202).send({message: `Deleted item ${req.body.name}`});
  }); 
});

app.all("/todos" ,(req,res)=>{
 res.status(501).send();
});

app.listen (port,()=>{
  console.log(`Nodejs Server started running on Port $(port)`);
});