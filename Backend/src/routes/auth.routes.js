import express from "express"
import { login, signup , verifyOtp , logout , forgetPass, resetPass, checkauth } from "../controllers/authController.js"


const authRouter = express.Router()


authRouter.get("/check , identity" , checkauth)
authRouter.post("/signup" , signup)
authRouter.post("/login" , login)
authRouter.post("/logout" , logout)
authRouter.post("/verify-otp" , verifyOtp) 
authRouter.post("/forget-password" , forgetPass)

authRouter.post("/reset-password/:token" , resetPass)


export default authRouter