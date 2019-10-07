module.exports = (sequelize, DataTypes) => {

    return sequelize.define('User', {
        name : DataTypes.STRING,
        email : {
            type : DataTypes.STRING, 
            unique : true
        }, 
        password : DataTypes.STRING
    });

}