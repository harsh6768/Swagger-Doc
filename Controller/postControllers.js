const Post=require('../Model/Post')

let createPost=(req,res)=>{

    const {title,body,author}=req.body;

    try{

        Post.create({
            title,
            body,
            author
        })
        .then(post=>{
            res.status(200).send({
                status:200,
                body:post,
                message:'Post Created'
            })
        })

    }catch(err){
        throw err;
    }
}

let getPosts=(req,res)=>{


    try{

        Post.findAll()
        .then(posts=>{
            res.status(200).send({

                status:200,
                body:[posts],
                message:'Posts Details'
            })
        })
        .catch(err=>{
            res.status(500).send({
                status:500,
                body:err,
                message:'Error occured!!!'
            })
        })

    }catch(err){
    
        throw err;
    
    }
}

let getPostById=(req,res)=>{


    const id=req.params.id;

    try{

        Post.findAll({
            where:{
                id
            }
        })
        .then(post=>{
            res.status(200).send({
                status:200,
                body:post,
                message:'Post Details'
            })
        })
        .catch(err=>{
            res.status(500).send({

                status:500,
                body:err,
                message:'Error occured!!!'

            })
        })

    }catch(err){
        throw err;
    }
}

let getPostByTitle=(req,res)=>{

    const title=req.params.title;

    try{

        Post.findAll({
            where:{
                title:title
            }
        })
        .then(posts=>{
            res.status(200).send({

                status:200,
                body:posts,
                message:'Post Details'
            })
        })
        .catch(err=>{
            res.status(500).send({
                status:500,
                body:err.message,
                message:'Error occured'
            })
        })

    }catch(err){
        throw err;
    }

}

let getPostByAuthor=(req,res)=>{


    const author=req.params.author;

    try{
        
        Post.findAll({
            where:{
                author:author
            }
        })
        .then(posts=>{

            res.status(200).send({
                status:200,
                body:[posts],
                message:'Posts Detail'
            })
        })
        .catch(err=>{

            res.status(500).send({
                status:500,
                body:err.message,
                message:'Error occured'
            })
        })


    }catch(err){

        throw err;
    }
}

let updatePost=(req,res)=>{

    const id=req.params.id;
    const {title,body}=req.body;

    try{

       Post.update(
           {
           title,body
           },
           {
               where:{
                   id
               }
           }
        )
        .then(post=>{

            res.status(200).send({
                status:200,
                body:post,
                message:'Post Updated'
            })

        })
        .catch(err=>{

            res.status(500).send({
                status:500,
                body:err.message,
                message:'Error occured'
            })
        })

    }catch(err){
        throw err;
    }

}

let deletePost=(req,res)=>{

    const id=req.params.id;

    try{

        Post.destroy({
            where:{
                id
            }
        })
        .then(post=>{
            res.status(200).send({
                status:200,
                body:post,
                message:'Post deleted'
            })
        })
        .catch(err=>{
            res.status(500).send({
                status:500,
                body:err,
                message:'Error occured'
            })
        })

    }catch(err){
        throw err;
    }

}

module.exports={
    createPost,
    getPosts,
    getPostById,
    getPostByTitle,
    getPostByAuthor,
    updatePost,
    deletePost
}