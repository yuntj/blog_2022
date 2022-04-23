const {DataTypes} = require('sequelize');
const sequelize = require('../db/sequelize');

const User = sequelize.define('user',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true  //唯一主键
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    avatar:{//头像
        type:DataTypes.STRING,
        allowNull:true
    },
    bio:{//简介
        type:DataTypes.TEXT,
        allowNull:true
    }
})

module.exports = User