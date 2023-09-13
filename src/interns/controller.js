const { response } = require("express");
const pool = require("../../db");
const queries = require("./queries");

const addUser = (req, res) => {
  const name = req.body.name;

  
  pool.query(queries.addUser, [name], (error, results) => {
    if (error) {
      throw error
    }
    res.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const getUserById = (req, res) => {
  const user_id = parseInt(req.params.user_id);

  pool.query(queries.getUserById, [user_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

const updateUser = (req, res) => {
  const user_id = parseInt(req.params.user_id)
  const name = req.body.name;

  pool.query(queries.updateUser, [name, user_id], (error, results) => {
    if (error) {
      throw error
    }

    res.status(200).send(`User modified with ID: ${user_id}`)
  })
}

const deleteUser = (req, res) => {
  const user_id = parseInt(req.params.user_id)

  pool.query(queries.deleteUser, [user_id], (error, results) => {
    if (error) {
      throw error;
    }

    res.status(200).send(`User deleted with ID: ${user_id}`);
  })
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
}