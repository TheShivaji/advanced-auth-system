import { transport, sender } from "./mailtrap.config.js";

import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplet.js";
import {WELCOME_EMAIL_TEMPLATE} from "./emailTemplet.js"



export const sendVerificationEmail = async (email, verificationToken) => {
    console.log("Preparing to send verification email to:", email); // Debugging line to check the email address being used
    
    try {
        const mailOptions = {
            from: sender,
            to: email,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        };

        const info = await transport.sendMail(mailOptions);
        console.log("Verification email sent successfully! Message ID:", info.messageId);

    } catch (error) {
        console.error("Error sending verification email:", error.message);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    try {
        const mailOptions = {
            from: sender,
            to: email,
            subject: "Welcome to Our Platform",
            html: WELCOME_EMAIL_TEMPLATE(name , email),
            category: "Welcome Email",
        };

        const info = await transport.sendMail(mailOptions);
        console.log("Welcome email sent successfully! Message ID:", info.messageId);

    } catch (error) {
        console.error("Error sending welcome email:", error.message);
    }
}