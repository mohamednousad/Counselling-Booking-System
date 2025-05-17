// Using express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create an instance
const app = express();
// express middleware
app.use(express.json())
app.use(cors())

// Sample in-memory storage for todo items
// let todos = [];

// Connecting MongoDB
mongoose.connect('mongodb+srv://mrnoukhan7377:MyDB123@mydb.eymfa.mongodb.net/testing')
.then(() => {
  console.log('MongoDB connected')
})
.catch((err) => {
  console.log(err)
})  

const todoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: String
})

// Creating Model 
const todoModel = mongoose.model('Todo' ,todoSchema);

// Create a new todo item
app.post('/todos', async (req , res) => {
  const {title , description} = req.body;
  // const newTodo = {
  //   id: todos.length + 1 ,
  //   title ,
  //   description
  // };
  // todos.push(newTodo);
  // console.log(todos);
try {
  const newTodo = new todoModel({title , description});
  await newTodo.save(); 
  res.status(201).json(newTodo);

} catch (error) {
  console.log(error);
  res.status(500).json({message: error.message }); 
}
  
}) 

// Get all items
app.get('/todos' , async (req , res) => {

  try {
    const todos = await todoModel.find();
    res.json(todos); 

  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message }); 
  }

})

// Start the server
const port = 8000;
app.listen(port , () => {
  
  console.log("Server listning to port" + port);

})