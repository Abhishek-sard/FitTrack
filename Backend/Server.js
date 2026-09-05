import express from "express";
import cors from "cors";
import "dotenv/config";
import ConnectDB from "./config/db.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.json({status: "ok"});
});

ConnectDB()
.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

})
.catch((err) => {
    console.log("MongoDB connection failed !!!", err);
})