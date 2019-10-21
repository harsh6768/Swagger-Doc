const routes=require('./Routes/mainRoutes');

const initEndPoint=(app)=>{

    /**
     * @swagger
     * /createPost:
     *         post:
     *           tags:
     *           - posts
     *           
     *            
     */
    app.use('/',routes);
}

module.exports=initEndPoint;