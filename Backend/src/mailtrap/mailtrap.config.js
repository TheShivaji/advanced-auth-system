import dotenv from "dotenv";
import { MailtrapClient } from "mailtrap";

dotenv.config();

export const mailtrap = new MailtrapClient({
    token: process.env.MAILTRAP_API_TOKEN,
    sandbox: true,
    testInboxId: process.env.MAILTRAP_INBOX_ID,
});

export const sender = {
    email: "shivajijagdale2005@gmail.com",
    name: "Shivaji Jagdale",
};


