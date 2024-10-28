const loggerMiddleware = (req, res, next) => {
  //Console log to see if working
  console.log("Inside loggerMiddleware");
  console.log(`${req.method} ${req.url}`);
  next();
};

const authMiddleware = (req, res, next) => {
  //Console log to see if working
  console.log("Inside authMiddleware");
  const authToken = req.header("Authorization");
  if (!authToken) {
    return res.status(401).send("Unauthorized");
  }
  next();
};

const errorHandler = (error, req, res, next) => {
  function error(status, msg) {
    const err = new Error(msg);
    err.status = status;
    return err;
  }
};

module.exports = { loggerMiddleware, authMiddleware, errorHandler };
