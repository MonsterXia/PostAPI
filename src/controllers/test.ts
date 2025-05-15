// import Rcon from "rcon-ts-valve";
import { PrismaClient } from "@/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { Context } from "hono";
import { StatusCode } from "@/models";
import bcrypt from "bcryptjs";
// import { praserListPlayers } from "@/utils";

import { Rcon } from 'squad-rcon-serverless';

export const RCONResult = async (c: Context) => {
    try {
        const rcon = new Rcon({
            id: 1,
            host: c.env.POST_SERVER_HOST,
            port: c.env.POST_SERVER_PORT,
            password: c.env.POST_SERVER_PASSWORD,
            autoReconnect: false
        });

        await rcon.init();

        rcon.on('ListPlayers', (data) => {
            console.log(data);
        });

        const result = await rcon.execute('ListPlayers');
        rcon.close();
        // console.log("result = ", result);
        // return c.json({
        //     message: "Success",
        //     data: result,
        // }, StatusCode.OK);
        return c.text(result, StatusCode.OK);
    } catch (e: unknown) {
        console.log(e);
        return c.json({
            message: "Error",
            error: e instanceof Error ? e.message : String(e),
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}

export const getAllAdmins = async (c: Context) => {
    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        // const admins = await prisma.validAdmin.findMany({
        //     orderBy: {
        //         username: "desc",
        //     },
        // });
        const admins = await prisma.validAdmin.findFirst({
            where: {
                username: "monster1018629681@gmail.com",
            },
        });

        const temp = "123456789"
        if (admins) {
            const passwordCheck = await bcrypt.compare(temp, admins.password);
            console.log("passwordCheck = ", passwordCheck);
        }

        return c.json({
            message: admins
        }, StatusCode.OK);
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}

export const deleteAdmins = async (c: Context) => {
    try {
        const { username } = c.req.param();

        console.log("username = ", username);
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        // const admins = await prisma.validAdmin.findMany({
        //     orderBy: {
        //         username: "desc",
        //     },
        // });
        const admins = await prisma.validAdmin.delete({
            where: {
                username: "monster1018629681@gmail.com",
            },
        });

        return c.json({
            message: admins
        }, StatusCode.OK);
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}