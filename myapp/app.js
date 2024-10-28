const express = require("express");

const errorHandler = require('./errorHandler');

const { User, Post, Comment } = require('./models');

const app = express();

//Custom middleware

app.use(middleware.loggerMiddleware);

app.use('/api', middleware.authMiddleware);

//Error handling middleware
app.use(errorHandler);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.route("/api/users").get((req, res) => {
  res.json({ answer: "Test" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
