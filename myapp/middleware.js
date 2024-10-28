//middleware.js
const loggerMiddleware = (req, res, next) => {
  //Console log to see if working
  console.log('Inside loggerMiddleware');
  console.log(`${req.method} ${req.url}`);
    next();
  };
  
  const authMiddleware = (req, res, next) => {
    //Console log to see if working
    console.log('Inside authMiddleware');
    const authToken = req.header('Authorization');
    if (!authToken) {
      return res.status(401).send('Unauthorized');
    }
    next();
  };
  
  module.exports = { loggerMiddleware, authMiddleware };