import { All_Perso_card } from "../components/PersoCard";
import { All_CHaracters } from "../data/Perso";

const Personages = () => {
    return (
        <div>
            <All_Perso_card All_Perso={All_CHaracters}/>
        </div>
    );
}

export default Personages;