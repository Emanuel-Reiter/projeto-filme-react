import express from "express";
import { getMovies} from "../controllers/movie.js";

const router = express.Router()

router.get("/movies", getMovies)

/*router.post("/", addUser)

router.put("/:user_id", updateUser)

router.delete("/:user_id", deleteUser)

router.get("/movies", getMovies)*/

export default router