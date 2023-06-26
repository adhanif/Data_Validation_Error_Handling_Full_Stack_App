const pool = require("../db");

//gettask

const getTasks = async (req, res) => {
  try {
    const { rows } = await pool.query("select * from tasks;");
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something is wrong");
  }
};

//creating new task
const createTask = async (req, res) => {
  try {
    const { title, description, priority, status } = req.body;
    console.log(req.body);
    const { rows } = await pool.query(
      "INSERT INTO tasks (title, description, priority, status) values ($1, $2, $3, $4) RETURNING *;",
      [title, description, priority, status]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Something is wrong");
  }
};

module.exports = { createTask, getTasks };
