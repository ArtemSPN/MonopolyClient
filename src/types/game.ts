import { IPlayer } from "@/types/player";

export interface IGame {
    playersQty: number,
    winner: string,
    endStatus: boolean,
    players: IPlayer[],
    link: string
}