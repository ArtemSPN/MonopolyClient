import { StoreSchema } from "@/store/store";

export const getGamePlayersQty = (state: StoreSchema) => state.game.playersQty;
export const getGameWinner = (state: StoreSchema) => state.game.winner;
export const getGameEndStatus = (state: StoreSchema) => state.game.endStatus;
export const getGamePlayers = (state: StoreSchema) => state.game.players;
export const getGameLink = (state: StoreSchema) => state.game.link;