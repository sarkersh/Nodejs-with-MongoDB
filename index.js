const express = require("express");
const mongoose = require("mongoose");

const todoHandler = require("./routeHandler/todoHandler");

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose.connect('mongodb+srv://sarkersh:Shakil2023@cluster0.fsnhzuj.mongodb.net/?retryWrites=true&w=majority/todos')
.then(() => console.log("connection successful"))
.catch((err) => console.log(err));

// application routes
app.use("/todo", todoHandler);


app.listen(3000, () => {
    console.log("app listening at port 3000");
  });