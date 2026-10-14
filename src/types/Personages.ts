export type Faction = "Goblin" | "Slime" | "Humain" | "Skelet" | "Mimic"

export interface inter_fact {
    Goblin: string,
    Slime: string,
    Humain: string,
    Skelet: string,
    Mimic: string
}
export const Faction_Color:inter_fact = {
    Goblin: "#22AA22",
    Slime: "#115511",
    Humain: "#666666",
    Skelet: "#CCCCCC",
    Mimic: "#888822"
}
export type Stats = {
    att: number
    def: number
    hp: number
    move: number
    range: number
    taille: number
}

export type Perso = {
    id: number,
    nom: string,
    categorie: "Boss" | "Troupe"
    faction: Faction
    images: string
    passif: string
    histoire: string
    stats: Stats
}