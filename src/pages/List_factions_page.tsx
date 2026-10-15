import { All_Faction_Card} from "../components/Faction_Card";
import { All_CHaracters } from "../data/Perso";

const Personages = () => {
    return (
        <div>
            <All_Faction_Card all_chara={All_CHaracters}/>
        </div>
    );
}

export default Personages;