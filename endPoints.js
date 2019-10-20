const routes=require('./Routes/mainRoutes');

const initEndPoint=(app)=>{

    /**
     * @Swagger
     * /createPost:
     *      post:
     *          tags:
     *          - Post
     *          summary: Create Post
     *          description: This api will create new Post
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters:
     *          - in: body
     *            name: body
     *            description: create post
     *            required: true
     *            schema:
     *              $ref: '#/definitions/Post'
     *          responses:
     *            200:
     *              description: successful operation
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error
     * 
     * definitions:
     *      Post:
     *          type: Object
     *          properties:
     *              title:
     *                  type: string
     *              body: 
     *                  type: string
     *              author:
     *                  type: string
     * 
     */

    app.use('/',routes);
}

module.exports=initEndPoint;