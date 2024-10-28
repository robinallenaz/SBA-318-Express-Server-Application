router.post("/", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

//PATCH route for updating existing data

router.patch("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});

// Delete route
router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: 'User deleted successfully' });
  });