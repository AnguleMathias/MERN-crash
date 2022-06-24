const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// import routes
const postsRoute = require("./src/routes/posts");

app.use('/posts', postsRoute);

// routes
app.get("/", (req, res) => {
  res.send("Hello MERN!");
});

// connect to mongodb
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true },
  () => console.log("connected to mongodb")
);

// listen for requests
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
