import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express(8800);

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8800);