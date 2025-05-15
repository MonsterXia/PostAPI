import { Context } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import {
  getCookie,
  getSignedCookie,
  setCookie,
  setSignedCookie,
  deleteCookie,
} from 'hono/cookie'
import { StatusCode } from "@/models";

export const authMiddleware = async (c: Context, next: () => Promise<void>) => {
    const userJWT = getCookie(c, 'jwt');
    if (!userJWT) {
        return c.json({ message: "No JWT token found." }, StatusCode.UNAUTHORIZED);
    }

    const secret = c.env.JWT_SECRET;
    try {
        const payload = await verify(userJWT, secret);
        c.set('jwt-payload', payload);
        await next();
    }catch (error) {
        return c.json({ message: "Invalid JWT token." }, StatusCode.UNAUTHORIZED);
    }
};