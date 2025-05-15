import { Context } from "hono";
import { Resend } from 'resend';
export const TryKVWrite = async (c: Context) => {
    try {
        const { key, value } = await c.req.json();
        const result = await c.env.post_api.put(key, value, { expirationTtl: 600 });
        return c.json({
            message: "Success",
            result: result,
            key: key,
            value: value,
        });
    } catch (error) {
        return c.json({
            message: "Error",
            error: error
        }, 500);
    }
}

export const TryKVRead = async (c: Context) => {
    try {
        const { key } = c.req.param();
        const result = await c.env.post_api.get(key);
        await c.env.post_api.delete(key);
        return c.json({
            message: "Success",
            result: result,
            key: key,
        });
    } catch (error) {
        return c.json({
            message: "Error",
            error
        }, 500);
    }
}

export const MailSendingTest = async (c: Context) => {
    const resend = new Resend(c.env.RESEND_EMAIL_API_KEY);
    const { email, OTP } = await c.req.json();

    try {
        const result = await resend.emails.send({
            from: 'no-reply.register@mail.post.246801357.xyz',
            to: email,
            subject: 'OTP for email verification',
            html: `<p>Your OTP is <strong>${OTP}</strong></p>`
        });
        return c.json({
            message: "Success",
            result: result,
        });
    } catch (error) {
        return c.json({
            message: "Error",
            error: error
        }, 500);
    }
}
