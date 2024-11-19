import express from "express";
import { api, login } from "../controllers/auth.js";

const router = express.Router();

router.get("/", api);

router.post("/login", login);

export default router;