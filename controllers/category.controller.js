/**
 * Module dependencies.
 */
import models from "../models/index.js";

/**
 * Display a listing of the resource.
 *
 * @param  Request  req
 * @param  Response  res
 * @param  Next  next
 *
 * @return Array
 */
export async function index(req, res, next) {
  try {
    await models.category
      .findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      })
      .then((categories) => {
        res.status(202).json({
          status: "success",
          message: "Categories fetched successfully",
          data: categories || {},
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: "Internal server error",
          data: error.message || {},
        });
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: error.message || {},
    });
  }
}

// Path: controllers\category.controller.js
