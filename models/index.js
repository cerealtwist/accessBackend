/**
 * Import Dotenv.
 */
import "dotenv/config.js";

/**
 * Module dependencies.
 */
import Sequelize from "sequelize";
import { env } from "../config/app.config.js";
import database from "../config/database.config.cjs";

/**
 * Define database connection.
 */
const { development, test, production } = database;

/**
 * Define model list.
 */
import Quiz from "./quiz.model.js";
import Category from "./category.model.js";

/**
 * Database connection.
 */
const connection =
  env === "development" ? development : env === "test" ? test : production;

/**
 * Initialize database connection.
 */
const sequelize = new Sequelize(
  connection.database,
  connection.username,
  connection.password,
  {
    host: connection.host,
    port: connection.port,
    dialect: connection.dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

/**
 * Initialize database models.
 */
const db = {};

/**
 * Import database models.
 */
db.quiz = Quiz(sequelize, Sequelize.DataTypes);
db.category = Category(sequelize, Sequelize.DataTypes);

/**
 * Associate database models.
 */
db.quiz.associate(db);
db.category.associate(db);

/**
 * Export database models.
 */
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;

// Path: models\index.js
