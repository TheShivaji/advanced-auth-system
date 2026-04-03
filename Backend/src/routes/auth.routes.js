import express from "express"
import { login, signup , verifyOtp } from "../controllers/authController.js"


const authRouter = express.Router()

authRouter.post("/signup" , signup)
authRouter.post("/login" , login)

authRouter.post("/verify-otp" , verifyOtp) 


export default authRouter