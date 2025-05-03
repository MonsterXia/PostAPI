// import Rcon from "rcon-ts-valve";

import { Context } from "hono";
import { StatusCode } from "@/models";
// import { praserListPlayers } from "@/utils";

// export const RCONResult = async (c: Context) => {
//     const rcon = new Rcon({
//         host: c.env.POST_SERVER_HOST,
//         password: c.env.POST_SERVER_PASSWORD,
//         port: c.env.POST_SERVER_PORT,
//     });

//     try {
//         console.log(c.env.POST_SERVER_HOST)
//         console.log(c.env.POST_SERVER_PORT)
//         console.log(c.env.POST_SERVER_PASSWORD)

//         // console.log("Attempting to connect to RCON server...");
//         await rcon.connect();
//         console.log("Connected successfully!");

//         // const response = await rcon.send('ListPlayers');
//         const response = await rcon.send('ListPlayers');
//         console.log("Response from RCON server:", response);

//         return c.text(response, StatusCode.OK);
//         // return c.json({
//         //     message: "Success",
//         //     // data: result
//         // }, StatusCode.OK);
//     } catch (e) {
//         console.error("Error occurred:", e);
//         return c.json({
//             message: "Error",
//             error: e instanceof Error ? e.message : String(e),
//         }, StatusCode.INTERNAL_SERVER_ERROR);
//     } finally {
//         rcon.disconnect();
//     }
// }

import { Rcon } from 'squad-rcon';

export const RCONResult = async (c: Context) => {
    try {
        const rcon = new Rcon({
            id: 1,
            host: '202.189.15.108',
            port: 18009,
            password: 'Post190702',
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