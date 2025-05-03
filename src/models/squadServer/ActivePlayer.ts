export interface ActivePlayer {
    id: number;
    online_ids: {
        eos: string;
        steam: string;
    };
    name: string;
    team_id: number;
    squad_id: string;
    is_leader: boolean;
    role: string;
}