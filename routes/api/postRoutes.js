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
router.put('/:id', (req, res) => {
    Post.update({
        title: req.body.title,
        content: req.body.title,},
        {
            where: {
                id: req.params.id
            }
        }).then(newPostData => {
            if (!newPostData) {
                res.status(404).json({ message: 'Error updating message!' })
                return;
            }
            res.json(newPostData)
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
//Delete a post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(newPostData => {
        if (!newPostData) {
            res.status(404).json({ message: 'No post found!' })
            return;
        }
        res.json(newPostData)
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;