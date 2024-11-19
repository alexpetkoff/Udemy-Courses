import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
    res.json({ ...req.body, message: "Login successful!" })
})

export default router;