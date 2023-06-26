require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("it is working");
});

app.listen(port, () => {
  console.log(`Server started on port${port}`);
});
