/**
 * Module dependencies.
 */
import { Router } from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  categoryId,
} from "../controllers/quiz.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET quiz listing. */
router.get("/", index);

/* POST quiz listing. */
router.post("/", store);

/* GET spesific quiz listing. */
router.get("/:id", show);

/* PUT spesific quiz listing. */
router.put("/:id", update);

/* DELETE spesific quiz listing. */
router.delete("/:id", destroy);

/* GET quiz by spesific category listing. */
router.get("/category/:id", categoryId);

export default router;

// Path: routes\quiz.route.js
