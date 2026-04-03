import express from "express"
import { login, signup , verifyOtp , logout , forgetPass } from "../controllers/authController.js"


const authRouter = express.Router()

authRouter.post("/signup" , signup)
authRouter.post("/login" , login)
authRouter.post("/logout" , logout)
authRouter.post("/verify-otp" , verifyOtp) 
authRouter.post("/reset-password" , forget-password)


export default authRouter