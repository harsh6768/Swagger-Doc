const routes=require('./Routes/mainRoutes');

const initEndPoint=(app)=>{

    /**
     * @swagger
     * /createPost:
     *         post:
     *           tags:
     *           - posts
     *           summary: Create Post  
     *           description: '' 
     *           consumes:
     *           - application/json
     *           - application/xml
     *           produces:
     *           - application/json
     *           - applcation/xml
     *           parameters:
     *           - in: body
     *             name: body   
     *             description: create post
     *             required: true
     *             schema:
     *               $ref: '#/definitions/Post'
     *           responses:
     *              200:
     *                description: successful operation
     *              400:
     *                description: bad request
     *              500:
     *                description: internal server error
     * 
     * /getPosts:
     *       get:
     *          tags:
     *          - posts
     *          summary: get all post details
     *          description: ''
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameter: []
     *          responses:
     *              200:
     *                description: successful operation
     *              400:
     *                description: bad request
     *              500:
     *                description: internal server error
     *
     * /getPost/{id}:
     *      get:
     *          tags:
     *          - posts
     *          summary: get Post using id
     *          description: ''
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters:
     *          - name: id
     *            in:  path
     *            description: Id of the post
     *            required: true
     *            type: integer
     *            format: int64
     *          responses:
     *            200: 
     *              description: successful operation
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error        
     *                          
     * /getPost/{title}:
     *      get:
     *          tags:
     *          - posts
     *          summary: get Post using title
     *          description: ''
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters:
     *          - name: title
     *            in:  path
     *            description: title of the post
     *            required: true
     *            type: string
     *          responses:
     *            200: 
     *              description: successful operation
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error        
     *                          
     * /getPost/{author}:
     *      get:
     *          tags:
     *          - posts
     *          summary: get Post using author name
     *          description: ''
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters:
     *          - name: id
     *            in:  path
     *            description: author name of the post
     *            required: true
     *            type: title
     *          responses:
     *            200: 
     *              description: successful operation
     *            400:
     *              description: bad request
     *            500:
     *              description: internal server error        
     *   
     * /updatePost/{id}:
     *      put:
     *          tags:
     *          - posts
     *          summary: update post using post id
     *          description: ''
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters:
     *          - name: id
     *            in:  path
     *            description: post id to update post
     *            required: true
     *            type: integer
     *            format: int64
     *          - in: body
     *            name: body
     *            description: update post
     *            required: true
     *            schema: 
     *              $ref: '#/definitions/Post'
     *          responses:
     *                200:
     *                  description: successful operation
     *                400:
     *                  description: bad request
     *                500:
     *                  description: internal server error
     * 
     *                  
     * 
     * /deletePost/{id}:
     *      delete:
     *          tags:
     *          - posts                       
     *          summary: delete post using post id
     *          descriptin: ''
     *          consumes:
     *          - application/json
     *          - application/xml
     *          produces:
     *          - application/json
     *          - application/xml
     *          parameters:
     *          - name: id
     *            in:   path
     *            description: post id to delete post
     *            required: true
     *            type: integer
     *            format: int64
     *          responses:
     *              200:
     *                  description: successful operation
     *              400: 
     *                  description: bad request
     *              500:
     *                  description: internal server error 
     * 
     * 
     * definitions:
     *      Post:
     *        type: object
     *        properties:
     *             title:
     *                type: string
     *             body:
     *                type: string
     *             author:
     *                type: string
     *                  
     *            
     */
    app.use('/',routes);
}

module.exports=initEndPoint;