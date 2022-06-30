const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
//Create a comment
router.post('/', (req, res) => {
    Comment.create({
        text: req.body.text,
        post_id: req.body.post_id,
        user_id: req.body.user_id
    })
        .then(newCommentData => res.json(newCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//Get all comments

router.get('/', (req, res) => {
    Comment.findAll()
    .then(newCommentData => res.json(newCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


module.exports = router;