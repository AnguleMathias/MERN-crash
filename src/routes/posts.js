const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Posts");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
