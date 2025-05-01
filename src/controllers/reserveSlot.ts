import { Context } from "hono";
import { StatusCode } from "@/models";
import { authorization } from "@/global";
export const postSeedReserveSlot = async (c: Context) => {
    try {
        const { player_list, secret_key } = await c.req.json();

        if (secret_key !== authorization.Panel.secret_key) {
            return c.json({
                message: "Invalid secret key",
            }, StatusCode.UNAUTHORIZED);
        }

        // TODO: add reserve slot


        return c.json({
            message: "Success",
        }, StatusCode.OK);
    } catch (e) {
        console.error(e);
        return c.json({
            message: "Error",
            error: e,
        }, StatusCode.INTERNAL_SERVER_ERROR);
    }
}