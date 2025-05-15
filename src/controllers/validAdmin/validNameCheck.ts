import { PrismaClient } from "@/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { Context } from "hono";
import { StatusCode } from "@/models";

export const validNameCheck = async (c: Context) => {
    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        const {email} =  await c.req.json();

        const userExist = await prisma.validAdmin.findFirst({
            where: {
                username: email,
            },
        });

        const temp_email = `register_${email}`;
        const result = await c.env.post_api.get(temp_email);

        if (!userExist && result === null) {
            return c.json({ message: "This email address can be used." }, StatusCode.OK);
        }
        return c.json({ message: "This email address already exist." }, StatusCode.CONFLICT);
        
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}