import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";

const PORT = 8000;
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes middlewares
app.use("/api", authRoutes);

// Function to start the server
const startServer = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.DATABASE);
        console.log("DB connected...");

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}!`);
        });
    } catch (error) {
        console.log("DB connection error =>", error);
        process.exit(1); // Exit the process if the DB connection fails
    }
};

// Start the server
startServer();