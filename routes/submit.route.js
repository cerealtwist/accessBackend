/**
 * Module dependencies.
 */
import { Router } from "express";
import { one, many } from "../controllers/submit.controller.js";

/*
 * Initialize router.
 */
const router = Router();

/* Post one listing. */
router.post("/one", one);

/* POST many listing. */
router.post("/many", many);

export default router;

// Path: routes\submit.route.js
