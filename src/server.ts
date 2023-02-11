import express from "express";
import config from "../config";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user.router";
import cookieParser from "cookie-parser";

const app = express();

//? Configuration MongoDB
mongoose.set("strictQuery", false);
const db = mongoose.connection;
(async () => {
    await mongoose.connect(config.db.local);
})();
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("DB connection - success");
});

//? Configuration Server
app.use(morgan("dev"));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ message: "OK" });
});

//? Routes
app.use("/users", userRouter);
app.use((req, res) => {
    return res
        .status(404)
        .json({ message: "Route does not exist", status: 404 });
});

app.listen(config.PORT, () => {
    console.log(`Server is listening on PORT: ${config.PORT}`);
});
