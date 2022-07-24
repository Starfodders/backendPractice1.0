module.exports = {               //exports these key value pairs to be accessible outside this file
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Strong.Pwd-123",
    DB: "example_sql_server",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};


//for mySQL connection