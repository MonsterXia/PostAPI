import { BattleGroupScore } from "@/models";
import { validCountryList, validLayerBattleGroup } from "@/global";
import { BattleGroupLayerScore } from "@/models/questionares/BattleGroupLayerScore";
import { getAlliance } from "./questionares";

export const regBattleGroupScore = (list : BattleGroupScore[]) => {
    let valid = true;

    for (let i = 0; i < list.length; i++) {
        if (!(list[i].country in validCountryList) || !validCountryList[list[i].country as keyof typeof validCountryList].includes(list[i].battle_group)) {
            valid = false;
            break;
        }

        // if (list[i].score < 0 || list[i].score > 1) {
        //     valid = false;
        //     break;
        // }
    }

    return valid;
}

export const regBattleGroupLayerScore = (list : BattleGroupLayerScore[]) => {
    let valid = true;

    for (let i = 0; i < list.length; i++) {
        // console.log(list[i]);
        if (list[i].score < 0 || list[i].score > 1) {
            valid = false;
            break;
        }

        // templayer = "Belaya_AAS_v1 ADF+CombinedArms BAF+Armored"
        let templayer = list[i].level + "_" + list[i].mode + "_" + list[i].version;
        if (validLayerBattleGroup[templayer as keyof typeof validLayerBattleGroup] === undefined) {
            valid = false;
            break;
        }

        let alliance1 = getAlliance(list[i].country1);
        let alliance2 = getAlliance(list[i].country2);
        if (alliance1 === "unknown" || alliance2 === "unknown") {
            valid = false;
            break;
        }

        if (alliance1 === alliance2 && alliance1 !== "independent") {
            valid = false;
            break;
        }

        let team1BG = list[i].country1 + "+" + list[i].battle_group1;
        let team2BG = list[i].country2 + "+" + list[i].battle_group2;
        const currentLayer : {
            team1: string[];
            team2: string[];
            blue_force: string[];
            independent: string[];
            red_force: string[];
            PAC: string[];
        } = validLayerBattleGroup[templayer as keyof typeof validLayerBattleGroup]
        if (currentLayer.team1.includes(team1BG) === false || currentLayer.team2.includes(team2BG) === false) {
            valid = false;
            break;
        }
    }

    return valid;
}