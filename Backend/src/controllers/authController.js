// all This commemted is for my review purpose only, I will remove it later
import bcrypt from "bcryptjs"
import { User } from "../models/user.model.js"
import { generateJwtToken } from "../../utils/generateJwtToken.js"
import { sendPasswordResetConfirmationEmail, sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js"
import crypto from "crypto"
import { sendPasswordResetEmail } from "../mailtrap/email.js"



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
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()

        const user = await User({
            email,
            password: hash,
            name,

            // Verification token and its expiry time for email verification
            verificationToken: verificationToken,
            verificationTokenExpiredAt: Date.now() + (24 * 60 * 60 * 1000) // 24 hours

        })
        await user.save()
        generateJwtToken(res, user._id)

        await sendVerificationEmail(user.email, verificationToken)


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
// The verifyOtp function is responsible for verifying the OTP (One-Time Password) sent to the user's email during the signup process. It checks if the provided OTP matches a user in the database and if the OTP has not expired. If the OTP is valid, it marks the user's email as verified, clears the verification token and its expiry time, and sends a welcome email to the user. Finally, it returns a success response. If the OTP is invalid or expired, or if there's an error during the process, it returns an appropriate error response.
export const verifyOtp = async (req, res) => {
    const { otp } = req.body;

    try {
        const user = await User.findOne({
            verificationToken: otp,
            verificationTokenExpiredAt: { $gt: Date.now() }
        });
        console.log(user);

        // Agar user nahi mila ya OTP expire ho gaya
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP"
            });
        }

        await sendWelcomeEmail(user.email, user.name)
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiredAt = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: "OTP verified successfully"
        });

    } catch (error) {
        console.log("Error in OTP verification:", error.message);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: false,   // dev me false
            sameSite: "lax"
        });

        res.status(200).json({
            message: "User are successfully logout"
        })
    } catch (error) {
        console.log("Logout error", error.message)
        return res.status(500).json({ message: "Internal server error" })
    }

}
// The forgetPass function is responsible for initiating the password reset process. It takes an email from the request body, checks if a user with that email exists, and if so, generates a password reset token and its expiry time. It then saves this information to the user's record in the database and sends a password reset email to the user with a link containing the reset token. If the user is not found or if there's an error during the process, it returns an appropriate error response.

export const forgetPass = async (req , res) => {
    const {email} = req.body
try {
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({success : false , message : "User not found"})
    }
    const passwordResetToken = crypto.randomBytes(20).toString("hex")
    user.passwordResetToken = passwordResetToken
    user.passwordResetTokenExpiredAt = Date.now() + (1 * 60 * 60 * 1000) // 1 hour
    await user.save()

    await sendPasswordResetEmail(user.email , `${process.env.FORGET_PASS}/reset-password?token=${passwordResetToken}`)

    res.status(200).json({success : true , message : "Password reset email sent successfully"})

} catch (error) {
    console.error("Error in forget password:", error.message)
    return res.status(500).json({ success: false, message: "Internal server error" })
}
}

// The resetPass function is responsible for handling the password reset process. It takes a token from the request parameters and a new password from the request body. It first checks if there is a user with the provided token and if the token has not expired. If the token is valid, it hashes the new password, updates the user's password in the database, and clears the reset token and its expiry time. Finally, it sends a confirmation email to the user and returns a success response. If the token is invalid or expired, or if there's an error during the process, it returns an appropriate error response.

export const resetPass = async (req , res) => {
    const {token} = req.params
    const {newPassword} = req.body
    
try {
    const user = await User.findOne({
        resetPasswordToken : token,
        resetPasswordExpiredAt : {$gt : Date.now()}
    })
    
    if(!user){
        return res.status(400).json({success : false , message : "Invalid or expired token"})
    }
    console.log(user)
    const hash = await bcrypt.hash(newPassword , 10)
    user.password = hash
    user.resetPasswordToken = undefined
    user.resetPasswordExpiredAt = undefined
    await user.save()

    await sendPasswordResetConfirmationEmail(user.email)

    res.status(200).json({success : true , message : "Password reset successfully"})

} catch (error) {
    console.error("Error in reset password:", error.message)
    return res.status(500).json({ success: false, message: "Internal server error" })
}
}
