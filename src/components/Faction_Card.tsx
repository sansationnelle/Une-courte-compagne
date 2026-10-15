import { Faction_Color, type Faction, type Perso } from "../types/Personages";
import { All_Perso_card } from "./PersoCard";
import { Current_color } from "./utilis/Current_text_color";

type Faction_Props = {
    faction: Faction
    team: Perso[]
}

function Boss_First(elteam:Perso[]){
    if (elteam[0].categorie == "Boss") return elteam
    for (let i = 0; i < elteam.length; i ++){
        if (elteam[i].categorie == "Boss"){
            const temp = elteam[0]
            elteam[0] = elteam[i]
            elteam[i] = temp
            return elteam
        }
    }
    return elteam
}

function sort_by_faction(All_chara: Perso[]):Faction_Props[] {
    const tab_of_fact:Record<string, Faction_Props> = {}
    for (let chara of All_chara){
        if (!tab_of_fact[chara.faction]){
            tab_of_fact[chara.faction] = {faction: chara.faction, team: [],}
        }
        tab_of_fact[chara.faction].team.push(chara);
    }
    return Object.values(tab_of_fact)
}

export const All_Faction_Card = ({all_chara} : {all_chara: Perso[]}) => {
    const sorted_tab = sort_by_faction(all_chara)
    return (
    <div>
        {sorted_tab.map((faction) => <Single_Faction_Card equipe={faction} />)}
    </div>)
}

const Single_Faction_Card = ({equipe}: {equipe: Faction_Props}) => {
    const sorted_team = Boss_First(equipe.team)
    if (sorted_team.length == 0) return (<p>Pas de Personage dans la faction <span style={{color: Faction_Color[equipe.faction]}}/>{equipe.faction}</p>)
    return (
        <div className="text-amber-200 grid grid-rows-1 border-t pt-4 border-amber-200 font-parchemin text-xl">
            <h1 className="text-center text-3xl">Faction: <span style={{color: Faction_Color[equipe.faction]}}>{equipe.faction}</span></h1>
            {<All_Perso_card All_Perso={sorted_team} />}
        </div>
    );
}