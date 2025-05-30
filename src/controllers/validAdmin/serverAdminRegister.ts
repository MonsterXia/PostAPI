import { PrismaClient } from "@/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { Context } from "hono";
import { Resend } from 'resend';
import { StatusCode } from "@/models";
import bcrypt from "bcryptjs";
import { generateRegisteOTP } from "@/utils";

export const ServerAdminRegister = async (c: Context) => {
    const resend = new Resend(c.env.RESEND_EMAIL_API_KEY);
    const { username, password } = await c.req.json();

    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });

        const userExist = await prisma.validAdmin.findFirst({
            where: {
                username: username,
            },
        });

        const key = `register_${username}`;
        const result = await c.env.post_api.get(key);
        console.log("result: ", result);

        if (userExist || result !== null) {
            return c.json({ message: "This email address already exist." }, StatusCode.CONFLICT);
        }
        
        
        const hashedPassword = await bcrypt.hash(password, 8);
        const OTP = generateRegisteOTP(32);
        const value = `${hashedPassword}${OTP}`;

        const KVResult = await c.env.post_api.put(key, value, { expirationTtl: 1800 });

        const emailSendResult = await resend.emails.send({
            from: 'no-reply.register@mail.post.246801357.xyz',
            to: username,
            subject: 'Validation link for your server admin account',
            html: `
                <p>
                    Dear ${username}:<br/>
                    致${username}：<br/>
                </p>

                <p>
                    Hi,<br/>
                    您好，<br/>
                </p>

                <p>
                    You have received this email because someone is trying to registe a server admin account for <strong>${c.env.POST_WEB_DOMAIN}.</strong><br/>
                    您收到此电子邮件是因为有人正在尝试向<strong>${c.env.POST_WEB_DOMAIN}.</strong>注册服务器管理员帐户。<br/>
                </p>
                
                <p>
                    If you are the one, please click the link below to verify your email address and complete the registration process:<br/>
                    如果您是该用户，请单击下面的链接以验证您的电子邮件地址并完成注册过程：<br/>
                    <a href="https://${c.env.POST_WEB_DOMAIN}/server/register/username/${username}/${OTP}"><strong>Click here to verify your email address.</strong></a><br/>
                    <a href="https://${c.env.POST_WEB_DOMAIN}/server/register/username/${username}/${OTP}"><strong>点击此处验证您的电子邮件地址。</strong></a><br/>
                </p>
                
                <p>
                    <strong>Attention! This link will expire in 30 minutes and can only be used once.</strong>.<br/>
                    <strong>注意！此链接将在30分钟后过期，并且只能使用一次。</strong><br/>
                </p>
                
                <p>
                    If you did not request this, please ignore this email.<br/>
                    如果您没有请求此操作，请忽略此电子邮件。<br/>
                </p>

                <p>
                    Thank you for your cooperation.<br/>
                    感谢您的合作。<br/>
                </p>

                <p> 
                    Best regards/此致<br/>
                    ${c.env.POST_WEB_DOMAIN}<br/>
                </p>
            `
        });

        return c.json({
            message: "Success",
            result: emailSendResult,
        }, StatusCode.OK);
    }catch (e) {
        return c.json({
            message: "Error",
            error: e
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}

export const ServerAdminValidation = async (c: Context) => {
    try {
        const { username, otp } = await c.req.json();
        const key = `register_${username}`;
        const result = await c.env.post_api.get(key);
        const deleteKVResult = await c.env.post_api.delete(key);
        if (result === null) {
            return c.json({
                message: "Not in stage of registration.",
            }, StatusCode.GONE);
        }

        const hashedPassword = result.slice(0, 60);
        const OTP = result.slice(60);

        if (otp !== OTP) {
            return c.json({
                message: "Invalid OTP.",
            }, StatusCode.GONE);
        }

        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });

        const userExist = await prisma.validAdmin.findFirst({
            where: {
                username: username,
            },
        });

        if (userExist) {
            return c.json({ message: "This email address already exist." }, StatusCode.CONFLICT);
        }

        const newUser = await prisma.validAdmin.create({
            data: {
                username: username,
                password: hashedPassword,
                organization: "",
                role: "",
            },
        });

        return c.json({
            message: "Success",
        }, StatusCode.OK);
    }catch (e) {
        return c.json({
            message: "Error",
            error: e
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}

// try {
//     const result = await resend.emails.send({
//         from: 'no-reply.register@mail.post.246801357.xyz',
//         to: email,
//         subject: 'OTP for email verification',
//         html: `<p>Your OTP is <strong>${OTP}</strong></p>`
//     });
//     return c.json({
//         message: "Success",
//         result: result,
//     }, StatusCode.OK);
// } catch (error) {
//     return c.json({
//         message: "Error",
//         error: error
//     }, StatusCode.INTERNAL_SERVER_ERROR);
// }