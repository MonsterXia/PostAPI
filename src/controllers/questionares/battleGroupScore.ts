import { PrismaClient } from "@/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { regBattleGroupScore, softmaxBattleGroupScore } from "../../utils";
import { Context } from "hono";
import { StatusCode } from "@/models";

export const createBattleGroupScore = async (c: Context) => {
    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        const { battle_group_score } = await c.req.json();
        const processedlist = softmaxBattleGroupScore(battle_group_score);
        const valid = regBattleGroupScore(processedlist);
        if (!valid) {
            return c.json({message: "Invalid"}, StatusCode.NOT_ACCEPTABLE);
        }
        const result = await prisma.battleGroupScores.createMany({
            data: processedlist,
        });

        return c.json({message: "Record Received"}, StatusCode.CREATED);
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
};




export const adminGetBattleGroupScore = async (c: Context) => {
    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        const scores = await prisma.battleGroupScores.findMany({
            orderBy: {
                score: "desc",
            },
        });
        return c.json({message: scores}, StatusCode.OK);
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
};

