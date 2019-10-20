const Router=require('express').Router();
const postController=require('../Controller/postControllers');

Router.route('/createPost').post(postController.createPost);
Router.route('/getPosts').get(postController.getPosts);
Router.route('/getPost/:id').get(postController.getPostById);
Router.route('/getPost/:title').get(postController.getPostByTitle);
Router.route('/getPost/:author').get(postController.getPostByAuthor);
Router.route('/updatePost/:id').put(postController.updatePost);
Router.route('/deletePost/:id').delete(postController.deletePost);


module.exports=Router;
