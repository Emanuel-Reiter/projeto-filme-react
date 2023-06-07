import express from "express";
import { addUser, deleteUser, getUsers, updateUser, getMovies} from "../controllers/user.js";

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:user_id", updateUser)

router.delete("/:user_id", deleteUser)

export default router