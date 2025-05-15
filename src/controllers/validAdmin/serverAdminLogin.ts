import { Context } from "hono";
import { PrismaClient } from "@/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { StatusCode } from "@/models";
import { sign } from 'hono/jwt'
import bcrypt from "bcryptjs";
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from 'hono/cookie'

export const serverAdminLogin = async (c: Context) => {
    try{
        const {username, password} = await c.req.json()
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });

        const userExist = await prisma.validAdmin.findFirst({
            where: {
                username: username,
            },
        });

        if (!userExist) {
            return c.json({ 
                message: "Invalid username or password." 
            }, StatusCode.UNAUTHORIZED);
        }

        const passwordCheck = await bcrypt.compare(password, userExist.password);
        if (!passwordCheck) {
            return c.json({ 
                message: "Invalid username or password." 
            }, StatusCode.UNAUTHORIZED);
        }

        const info = {
            username: userExist.username,
            organization: userExist.organization,
            role: userExist.role,
            exp: Math.floor(Date.now() / 1000) + 86400,
        }

        const secret = c.env.JWT_SECRET;

        const token = await sign(info, secret)

        setCookie(c, 'jwt', token, {
            path: "/",
            secure: true,
            domain: c.env.POST_WEB_DOMAIN,
            httpOnly: true,
            maxAge: 86400,
            expires: new Date(Date.now() + 86400 * 1000),
            sameSite: "Strict",
        });

        return c.json({
            jwt: `Bearer ${token}`,
            payload: info,
        }, StatusCode.OK);
    }catch (e) {
        return c.json({
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}