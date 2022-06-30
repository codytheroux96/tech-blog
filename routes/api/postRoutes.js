const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

//Get a single post

//Get all posts

//Create a post
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
    .then(newPostData => res.json(newPostData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Update a post

//Delete a post


module.exports = router;