//Create a new exchange request

exports.createExchangeRequest = async (req, res) => {
    const exchangeData = req.body;
    const exchange = new Exchange(exchangeData);
    await exchange.save();
    res.json(exchange);
  };

//Get all exchange requests

  exports.getExchangeRequests = async (req, res) => {
    const exchanges = await Exchange.find();
    res.json(exchanges);
  }

//Get a single exchange request by ID

exports.getExchangeRequestById = async (req, res) => {
    const exchangeId = req.params.id;
    const exchange = await Exchange.findById(exchangeId);
    res.json(exchange);
  };

//Delete an exchange request

exports.deleteExchangeRequest = async (req, res) => {
    const exchangeId = req.params.id;
    await Exchange.findByIdAndRemove(exchangeId);
    res.json({ message: 'Exchange request deleted successfully' });
  };

//Accept an exchange request

exports.acceptExchangeRequest = async (req, res) => {
    const exchangeId = req.params.id;
    const exchange = await Exchange.findById(exchangeId);
    exchange.status = 'accepted';
    await exchange.save();
    res.json(exchange);
  };

//Decline an exchange request

exports.declineExchangeRequest = async (req, res) => {
    const exchangeId = req.params.id;
    const exchange = await Exchange.findById(exchangeId);
    exchange.status = 'declined';
    await exchange.save();
    res.json(exchange);
  };

//Get exchange requests by user

exports.getExchangeRequestsByUser = async (req, res) => {
    const userId = req.params.userId;
    const exchanges = await Exchange.find({ user: userId });
    res.json(exchanges);
  };