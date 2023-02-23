module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORDS: '',
    DB: 'access_db',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};