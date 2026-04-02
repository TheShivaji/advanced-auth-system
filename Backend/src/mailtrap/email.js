import { mailtrap, sender } from "./mailtrap.config.js";

import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplet.js";


export const sendVerificationEmail = async (email, verificationTooken) => {
    const recipients = [{email}];

    try{
        const response = await mailtrap.testing.send({
            from: sender,
            to: recipients,
            subject: "Verify your email",
            inboxId: process.env.MAILTRAP_INBOX_ID,
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationTooken),
            category: "Email Verification",
        });
        console.log("Verification email sent successfully:", response);
    } catch (error) {
        console.error("Error sending verification email:", error.message);
    }
}