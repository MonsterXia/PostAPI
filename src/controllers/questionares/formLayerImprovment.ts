import { generateBattleGroup, generateBattleGroupLayer} from "../../utils";
import { Context } from "hono";
import { StatusCode } from "@/models";

export const getFormLayerImporvment = async (c: Context) => {
    try {
        const formPart1 = generateBattleGroup(10);
        const formPart2 = generateBattleGroupLayer(3);
        const form = {
            formPart1: formPart1,
            formPart2: formPart2,
        };

        return c.json({message: form}, StatusCode.OK);
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
};