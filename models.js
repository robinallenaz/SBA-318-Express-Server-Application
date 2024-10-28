const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const commentSchema = new mongoose.Schema({
  text: String,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { User, Post, Comment };

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  });