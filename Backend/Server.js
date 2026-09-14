import express from "express";
import cors from "cors";
import "dotenv/config";
import ConnectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.json({status: "ok"});
});


//API ROUTES
app.use("/api/auth", authRoutes);

const startServer = async () => {
    await ConnectDB();
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Health check: http://localhost:${port}/api/health`);
    });
};

startServer().catch((err) => {
    console.error("Server startup failed:", err);
    process.exit(1);
});