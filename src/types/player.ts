import { IBusiness } from "@/types/business";

export interface IPlayer {
    name: string,
    color: string,
    money: number,
    asset: IBusiness[],
    avatar: string
}