/**
 * Module dependencies.
 */
import { Router } from "express";
import { index } from "../controllers/category.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* GET quiz listing. */
router.get("/", index);

export default router;

// Path: routes\category.route.js
