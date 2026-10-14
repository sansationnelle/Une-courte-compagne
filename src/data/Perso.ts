import type {Perso} from "../types/Personages"

export const All_CHaracters: Perso[] = [
  {
    id: 1,
    nom: "Goblin",
    categorie: "Boss",
    faction: "Goblin",
    images: "",
    passif: "",
    histoire: "Gablin, ancien pariat du peuple des goblins, revenue après mainte mésaventure. Il as prit le pouvoir par la force dans le domaine des gobelins et y réside en dictateur forçant ses compères à miner de la roche sans fin",
    stats: {att: 5, def: 3, hp: 7, move: 5, range: 3, taille: 5},
  },
  {
    id: 2,
    nom: "Bouliste",
    categorie: "Troupe",
    faction: "Goblin",
    images: "",
    passif: "Pierre qui roule",
    histoire: "",
    stats: {att: 1, def: 5, hp: 2, move: 2, range: 4, taille: 1.5}
  },
  {
    id: 3,
    nom: "Mineur",
    categorie: "Troupe",
    faction: "Goblin",
    images: "",
    passif: "Minage",
    histoire: "",
    stats: {att: 3, def: 2, hp: 3, move: 5, range: 2, taille: 1.5}
  },
]