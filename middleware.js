//middleware.js
const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  };
  
  const authMiddleware = (req, res, next) => {
    const authToken = req.header('Authorization');
    if (!authToken) {
      return res.status(401).send('Unauthorized');
    }
    next();
  };
  
  module.exports = { loggerMiddleware, authMiddleware };