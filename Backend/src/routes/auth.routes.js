import express from "express"
import { login, signup , verifyOtp , logout , forgetPass, resetPass } from "../controllers/authController.js"


const authRouter = express.Router()

authRouter.post("/signup" , signup)
authRouter.post("/login" , login)
authRouter.post("/logout" , logout)
authRouter.post("/verify-otp" , verifyOtp) 
authRouter.post("/forget-password" , forgetPass)

authRouter.post("/reset-password/:token" , resetPass)


export default authRouter