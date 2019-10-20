const swaggerUi             =   require('swagger-ui-express');
const swaggerJsDoc          =   require('swagger-jsdoc');
const options={

    swagger:'2.0',
    swaggerDefinition:{
        info:{
            title:'Swagger-Post-Api',
            version:'1.0.0',
            description:'Post Apis'
        },
        basePath:'/'
    },
    apis:['endPoints.js']
    
}

const specification=swaggerJsDoc(options);

module.exports=(app)=>{

    app.use('/documentation',swaggerUi.serve,swaggerUi.setup(specification));

}

