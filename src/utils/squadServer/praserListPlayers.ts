export const praserListPlayers = (response: string) => {
    try {
        let strWithoutHeader = response.replace(/^----- Active Players -----\s*/, '');
    return strWithoutHeader.split('\n').map((line) => {
        let [id, online_ids_str, name, teamId, squadId, isLeader_str, role] = line.split(' | ');
        // id = ID: 53 
        id = id.split(': ')[1].trim();
        // Online IDs: EOS: 0002c27fe911463d9a86806b0ede6ed1 steam: 76561199488664517
        let eos = online_ids_str.split(' EOS: ')[1].substring(0, 32);
        let steam = online_ids_str.split(' steam: ')[1].substring(0, 17);
        let online_ids = {
            eos,
            steam,
        };
        // Name: [PreP]  Dark purpleX.l.-e.v.e.
        name = name.split('Name: ')[1].substring(0, 32).trim();
        // Team ID: 1
        teamId = teamId.split('Team ID: ')[1].trim();
        // Squad ID: 1
        squadId = squadId.split('Squad ID: ')[1].trim();
        // Is Leader: False/True
        isLeader_str = isLeader_str.split('Is Leader: ')[1].trim();
        let isLeader = isLeader_str === 'True' ? true : false;
        // Role: BAF_SLCrewman_01
        role = role.split('Role: ')[1].trim();
        return {
            id: parseInt(id),
            online_ids,
            name,
            team_id: parseInt(teamId),
            squad_id: squadId,
            is_leader: isLeader,
            role,
        }
    });
    } catch (error) {
        console.error("Error parsing ListPlayers response:", error);
        return [];
    }
}