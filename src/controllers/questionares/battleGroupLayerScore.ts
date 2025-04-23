import { PrismaClient } from "@/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";
import { processingBattleGroupLayerScore, regBattleGroupLayerScore, regBattleGroupScore, softmaxBattleGroupScore } from "../../utils";
import { Context } from "hono";
import { StatusCode } from "@/models";

export const createBattleGroupLayerScore = async (c: Context) => {
    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        const { battle_group_layer_score } = await c.req.json();
        const processedlist = processingBattleGroupLayerScore(battle_group_layer_score);
        const valid = regBattleGroupLayerScore(processedlist);
        if (!valid) {
            return c.json({message: "Invalid"}, StatusCode.NOT_ACCEPTABLE);
        }
        const result = await prisma.layerAcceptance.createMany({
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