const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a user
app.post("/users", async (req, res) => {
  const { username, password, email, cohort } = req.body;
  try {
    const newUser = await pool.query(
      "INSERT INTO users (username, password, email, cohort) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, password, email, cohort]
    );

    res.end();
  } catch (error) {
    console.log(error.message);
  }
});

//get all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//get a user
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(user.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//update a user
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, email, cohort } = req.body;
    await pool.query(
      "UPDATE users SET username = $1, password = $2, email = $3, cohort = $4 WHERE user_id = $5 RETURNING *",
      [username, password, email, cohort, id]
    );
    res.json("user info is updated!");
  } catch (error) {
    console.log(error.message);
  }
});

//delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE user_id = $1", [id]);
    res.json("user deleted");
  } catch (error) {
    console.log(errro.message);
  }
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
