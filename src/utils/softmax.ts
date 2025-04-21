import { BattleGroupScore } from "../models";

export const SoftmaxBattleGroupScore = (list: BattleGroupScore[]) => {
    let sum : number = 0;
    for (let i = 0; i < list.length; i++) {
        sum += Math.exp(list[i].score);
    }

    return list.map((item) => {
        return {
            ...item,
            score: Math.exp(item.score) / sum
        }
    })
}