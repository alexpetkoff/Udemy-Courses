export const api = (req, res) => {
    res.send(`The current time is: ${new Date().toLocaleTimeString()}`);
}

export const login = (req, res) => {
    res.json({ ...req.body, message: "Login successful!" });
}