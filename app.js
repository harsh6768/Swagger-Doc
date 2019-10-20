const express           =  require('express');
const bodyParser        =  require('body-parser');
const swaggerDoc        =  require('./swaggerDoc');
const initEndPoint      =  require('./endPoints');
const app               =  express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//swagger setup
initEndPoint(app);
swaggerDoc(app);

const PORT=process.env.PORT||5001;
app.listen(PORT,(err)=>{

    if(err) throw err;
    console.log(`Server is up and running on port ${PORT}...`);
    console.log('localhost:5001/documentation')
})