import { PrismaClient } from "@/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { SoftmaxBattleGroupScore } from "../../utils";
import { Context } from "hono";

export const createBattleGroupScore = async (c: Context) => {
    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        const { battle_group_score } = await c.req.json();
        const processedlist = SoftmaxBattleGroupScore(battle_group_score);
        const result = await prisma.battleGroupScores.createMany({
            data: processedlist,
        });

        return c.json("success", 200);

    } catch (e) {
        console.error(e);
        return c.json("error", 500);
    }
};

export const getBattleGroupScore = async (c: Context) => {
    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        const scores = await prisma.battleGroupScores.findMany({
            orderBy: {
                score: "desc",
            },
        });
        return c.json(scores, 200);
    } catch (e) {
        console.error(e);
        return c.json("error", 500);
    }
};