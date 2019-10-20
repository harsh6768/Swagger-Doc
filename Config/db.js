const Sequelize         =    require('sequelize');

const sequelize=new Sequelize(
    'swagger-post',  //database name
    'root',          //username
    '',              //password
    {
        host: 'localhost', //localhost
        dialect:'mysql'     //database name
    },
    {
        tableName: 'posts',         // this will define the table's name
        timestamps: false ,         // this will deactivate the timestamp columns
    }
)

sequelize
.authenticate()
.then((err)=> {
    console.log('Connection has been established successfully.');
},(err)=>{ 
    console.log('Unable to connect to the database:', err);
})

module.exports=sequelize;
