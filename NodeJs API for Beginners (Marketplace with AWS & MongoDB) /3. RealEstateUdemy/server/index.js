import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan"
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";

const app = express();

// connect to MongoDB
mongoose.connect(process.env.DATABASE).then(
    () => console.log('DB connected...')
).catch(
    (error) => console.log('DB connection error => ', error)
)

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routes middlewares
app.use("/api", authRoutes)

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`)
});