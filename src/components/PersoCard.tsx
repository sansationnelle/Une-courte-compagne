import { Faction_Color, type Perso } from "../types/Personages";

type All_Props = {
  All_Perso: Perso[];
};

type Single = {
    gamer: Perso
}

export const Single_Perso_Card = ({gamer}: Single) => {
    /* Montre toutes les infos d'un seul personage*/
    return (
    <div >
        <p className="text-amber-200">Nom: {gamer.nom}<br/>
        Faction:<span style={{color: Faction_Color[gamer.faction]}}> {gamer.faction}</span><br/>
        <span className="text-amber-200" />Stats: PV: {gamer.stats.hp} ATT: {gamer.stats.att} DEF: {gamer.stats.def}<br/>
                     Déplacement: {gamer.stats.move} Portée: {gamer.stats.range} Taille: {gamer.stats.taille}m<br/>
        Lore: {gamer.histoire}</p>
    </div>
    );
}

export const All_Perso_card = ({All_Perso} :All_Props) => {
    return (
    <div>
        {All_Perso.map((Monst)=> (<div className=""><Single_Perso_Card gamer={Monst}/></div>))}
    </div>);
}