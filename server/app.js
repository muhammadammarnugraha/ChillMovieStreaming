require('dotenv').config();

const express = require('express');
const app = express();
const port = 8080;
const userRouter = require("./routers/userRouter")
const filmRouter = require("./routers/filmRouter")

const requestTime = function (req,res,next) {
  req.timeRequest = Date.now()
  next()
}

app.use(express.json());

app.use('/users', userRouter);

app.use('/film', filmRouter);

app.use(requestTime)

app.use("/blog", (req,res) => {
  const test = req.query
  res.send(test)
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});