const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  booksOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  booksWanted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("User", userSchema);
