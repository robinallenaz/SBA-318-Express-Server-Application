router.get("/", async (req, res) => {
  const query = req.query;
  const posts = await Post.find(query);
  res.json(posts);
});

//POST route for creating new posts

router.get('/:id', async (req, res) => {
    const postId = req.params.id;
    // Pass the postId to the postController
    const post = await postController.getPostById(postId);
    res.json(post);
  });