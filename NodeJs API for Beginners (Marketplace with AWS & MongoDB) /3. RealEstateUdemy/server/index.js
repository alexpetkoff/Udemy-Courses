import express from "express";
import cors from "cors";
import morgan from "morgan"

const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes
app.get('/api', (req, res) => {
    res.send(`The current time is: ${new Date().toLocaleTimeString()}`)
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`)
});