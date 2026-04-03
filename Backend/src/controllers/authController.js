// all This commemted is for my review purpose only, I will remove it later
import bcrypt from "bcryptjs"
import { User } from "../models/user.model.js"
import { generateJwtToken } from "../../utils/generateJwtToken.js"
import { sendVerificationEmail } from "../mailtrap/email.js"



export const signup = async (req, res) => {
    const { email, password, name } = req.body
    try {
        if (!email || !password || !name) {
            return res.status(400).json({ success: false, message: "Please provide all the fields" })
        }

        const isAlreadyUser = await User.findOne({ email })
        if (isAlreadyUser) {
            return res.status(400).json({ success: false, message: "User already exists" })
        }

        const hash = await bcrypt.hash(password, 10)
        const verificationTooken = Math.floor(100000 + Math.random() * 900000).toString()

        const user = await User({
            email,
            password: hash,
            name,

            // Verification token and its expiry time for email verification
            verificationTooken,
            verificationTookenExpiredAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours

        })
        await user.save()
        generateJwtToken(res, user._id)

        await sendVerificationEmail(user.email, verificationTooken)
        

        //password is set to undefined to avoid sending it in the response because we don't want to expose the hashed password to the client. Even though it's hashed, it's a good security practice to not include it in the response.
        return res.status(201).json({
            success: true, message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}

// The login function is responsible for authenticating a user. It checks if the provided email and password match a user in the database. If the credentials are valid, it generates a JWT token, updates the user's last login time, and returns a success response with the user data (excluding the password). If the credentials are invalid or if there's an error during the process, it returns an appropriate error response.
export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success: false, message: "invalid credentials" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "invalid credentials" })
        }
        
        generateJwtToken(res, user._id)

        
        user.lastlogin = Date.now()
        await user.save()
        return res.status(200).json({
            success: true, message: "User logged in successfully",
            user: {
                ...user._doc,
                password: undefined
            }
        })
        
    } catch (error) {
        console.log("Error in login:", error.message)
        return res.status(500).json({ success: false, message: "Internal server error" })
    }
}