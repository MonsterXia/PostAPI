import { generateBattleGroup, generateBattleGroupLayer, processingBattleGroupLayerScore, regBattleGroupLayerScore, regBattleGroupScore, softmaxBattleGroupScore } from "../../utils";
import { Context } from "hono";
import { StatusCode } from "@/models";
import { PrismaClient } from "@/prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export const getFormLayerImporvment = async (c: Context) => {
    try {
        const formPart1 = generateBattleGroup(10);
        const formPart2 = generateBattleGroupLayer(3);
        const form = {
            formPart1: formPart1,
            formPart2: formPart2,
        };

        return c.json({ message: form }, StatusCode.OK);
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
};

export const createFormLayerImporvment = async (c: Context) => {
    try {
        const adapter = new PrismaD1(c.env.DB);
        const prisma = new PrismaClient({ adapter });
        const { battle_group_layer_score, battle_group_score } = await c.req.json();

        const processedlist_battle_group = softmaxBattleGroupScore(battle_group_score);
        const valid_battle_group = regBattleGroupScore(processedlist_battle_group);
        if (!valid_battle_group) {
            return c.json({ message: "Invalid Battle Group Score" }, StatusCode.NOT_ACCEPTABLE);
        }
        const result_battle_group = await prisma.battleGroupScores.createMany({
            data: processedlist_battle_group,
        });

        const processedlist_layer = processingBattleGroupLayerScore(battle_group_layer_score);
        const valid_layer = regBattleGroupLayerScore(processedlist_layer);
        if (!valid_layer) {
            return c.json({ message: "Invalid Layer Score" }, StatusCode.NOT_ACCEPTABLE);
        }
        const result_layer = await prisma.layerAcceptance.createMany({
            data: processedlist_layer,
        });

        return c.json({ message: "Record Received" }, StatusCode.CREATED);
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}