import express from "express"
import { signup } from "../controllers/signupController.js"


const authRouter = express.Router()

authRouter.post("/signup" , signup)


export default authRouter