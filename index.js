require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { tasksRouter } = require("./backend_routes/tasks");
const { query } = require("express-validator");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/", tasksRouter);

// app.get("/", (req, res) => {
//   res.send("it is working");
// });

app.listen(port, () => {
  console.log(`Server started on port${port}`);
});
