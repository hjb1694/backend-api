module.exports = {
    PORT : process.env.PORT || 8081,
    HOST : process.env.HOST || 'localhost', 
    db : {
        db_name : process.env.DB_NAME || 'practice', 
        db_user : process.env.DB_USER || 'root', 
        db_pass : process.env.DB_PASS || '',
        db_options : {
            dialect : 'sqlite', 
            storage : './database.sqlite'
        }
    }, 
    jwtsecret : process.env.JWT_SECRET || 'thisismysecret'
}