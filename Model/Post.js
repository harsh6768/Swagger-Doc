const Sequelize         =   require('sequelize');
const sequelize         =   require('../Config/db');

const Post=sequelize.define('posts',{
  
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type:Sequelize.STRING,
        required:true
    },
    body:{
        type:Sequelize.STRING,
        required:true
    },
    author:{
        type:Sequelize.STRING,
        required:true
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    }

})

module.exports=Post;
