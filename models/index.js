const dbConfig = require('../config/db');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define semua models
db.quizzes = require('./quiz')(sequelize, Sequelize);
db.categories = require('./category')(sequelize, Sequelize);

// One to Many Relation

db.categories.hasMany(db.quizzes, {
    foreignKey: 'id',
    as: 'quiz'
})

db.quizzes.belongsTo(db.categories, {
    foreignKey: 'id',
    as: 'category'
})

module.exports = db;