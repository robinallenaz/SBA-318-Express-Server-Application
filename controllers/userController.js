const User = require('../models/Users');

//Express.js route handler that retrieves a user by ID and returns the user data as JSON
exports.getUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  res.json(user);
};

//Route handler that creates a new user and returns the user data as JSON
exports.createUser = async (req, res) => {
  const userData = req.body;
  const user = new User(userData);
  await user.save();
  res.json(user);
};

//Route handler that updates a user by ID
exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const userData = req.body;
  const user = await User.findByIdAndUpdate(userId, userData, { new: true });
  res.json(user);
};

//Route handler that deletes a user by ID
exports.deleteUser = async (req, res) => {
  const userId = req.params.id;
  await User.findByIdAndRemove(userId);
  res.json({ message: 'User deleted successfully' });
};