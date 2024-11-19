import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(`The current time is: ${new Date().toLocaleDateString()}`);
})

router.post("/login", (req, res) => {
    res.json({ ...req.body, message: "Login successful!" });
})

export default router;