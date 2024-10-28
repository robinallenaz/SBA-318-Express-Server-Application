router.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  });