/**
 * Module dependencies.
 */
import { Router } from "express";

/*
 * Import routes.
 */
import quiz from "./quiz.route.js";
import submit from "./submit.route.js";
import category from "./category.route.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    status: "success",
    message: "Welcome to the API",
  });
});

/* RESOURCE quiz. */
router.use("/api/quiz", quiz);

/* RESOURCE category. */
router.use("/api/category", category);

/* RESOURCE submit. */
router.use("/api/submit", submit);

export default router;

// Path: routes\index.js
