import { validCountryList, validLayerBattleGroup } from "@/global";
import { getRandomElements } from "./randomTool";
import { BattleGroupScore, BattleGroupLayerScore } from "../models";

export const generateBattleGroup = (count: number) => {
    let candidates: { country: string; battleGroup: string }[] = [];
    for (const country in validCountryList) {
        const battleGroups = validCountryList[country as keyof typeof validCountryList];
        for (const battleGroup of battleGroups) {
            candidates.push({
                country: country,
                battleGroup: battleGroup,
            });
        }
    }

    const randomCandidates = getRandomElements(candidates, count);
    return randomCandidates;
}

export const generateBattleGroupLayer = (count: number) => {
    let candidates: {
        layer: string;
        team1: string[];
        team2: string[];
        blue_force: string[];
        independent: string[];
        red_force: string[];
        PAC: string[];
    }[] = [];

    for (const [layer, groups] of Object.entries(validLayerBattleGroup)) {
        if (!layer.includes("-")) {
            // rule out the layer with "-" in it
            // PacificProvingGrounds_USMC-RGF
            // JensensRange_ADF-PLA
            candidates.push({
                layer,
                ...groups
            });
        }
    }

    const randomCandidates = getRandomElements(candidates, count);
    const output: string[] = [];
    for (let i = 0; i < randomCandidates.length; i++) {
        let fist_pick = getRandomElements(randomCandidates[i].team1, 1)[0];
        let alliance1 = getAlliance(fist_pick.split("+")[0]);
        let second_pick = "";
        if (alliance1 !== "independent") {
            let second_picks: string[] = getRandomElements(randomCandidates[i].team2, randomCandidates[i].team2.length);
            for (let j = 0; j < second_picks.length; j++) {
                if (getAlliance(second_picks[j].split("+")[0]) !== alliance1) {
                    second_pick = second_picks[j];
                    break;
                }
            }
        } else {
            second_pick = getRandomElements(randomCandidates[i].team2, 1)[0];
        }
        output.push(`${randomCandidates[i].layer} ${fist_pick} ${second_pick}`);
    }
    return output;
}

export const getAlliance = (country: string) => {
    if (country === "BAF" || country === "USMC" || country === "USA" || country === "CAF" || country === "ADF") {
        return "blue_force";
    } else if (country === "INS" || country === "MEA" || country === "IMF" || country === "TLF" || country === "WPMC") {
        return "independent";
    } else if (country === "VDV" || country === "RGF") {
        return "red_force";
    }
    else if (country === "PLA" || country === "PLANMC" || country === "PLAAGF") {
        return "PAC";
    }
    return "unknown";
}

export const softmaxBattleGroupScore = (list: BattleGroupScore[]) => {
    let sum: number = 0;
    const fixRate: number = list.length / 2;
    for (let i = 0; i < list.length; i++) {
        sum += Math.exp(list[i].score);
    }

    return list.map((item) => {
        return {
            ...item,
            score: fixRate * Math.exp(item.score) / sum
        }
    })
}

export const processingBattleGroupLayerScore = (list: { layer: string, score: number }[]) => {
    return list.map((item) => {
        // item.layer = "Belaya_AAS_v1 ADF+CombinedArms BAF+Armored"
        const tempPart = item.layer.split(" ");
        const currentLayer: BattleGroupLayerScore = {
            level: tempPart[0].split("_")[0],
            mode: tempPart[0].split("_")[1],
            version: tempPart[0].split("_")[2],
            country1: tempPart[1].split("+")[0],
            country2: tempPart[2].split("+")[0],
            battle_group1: tempPart[1].split("+")[1],
            battle_group2: tempPart[2].split("+")[1],
            score: item.score / 100,
        }

        return currentLayer;
    })


}