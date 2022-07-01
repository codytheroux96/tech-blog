const User = require('./users');
const Post = require('./post');
const Comment = require('./comments');

User.hasMany(Post, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User,{
    foreignKey: 'user_id'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})


module.exports = { User, Post, Comment };
