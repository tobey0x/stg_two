const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const addUser = "INSERT INTO users (name) VALUES ($1) RETURNING *";
const updateUser = "UPDATE users SET name = $1 WHERE id = $2";
const deleteUser = "DELETE FROM users WHERE id = $1";

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
}