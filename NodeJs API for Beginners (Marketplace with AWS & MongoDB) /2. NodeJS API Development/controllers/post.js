const Post = require('../models/post');

exports.getPosts = (req, res) => {
    const posts = Post.find()
        .then((posts) => {
            res.json({ posts })
        })
        .catch(err => console.log(err))
}

exports.createPost = async (req, res) => {
    const post = new Post(req.body);
    const result = await post.save();
    res.status(200).json({ post: result });
};