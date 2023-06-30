import { StoreSchema } from "@/store/store";

export const getPlayerName = (state: StoreSchema) => state.player.name;
export const getPlayerColor = (state: StoreSchema) => state.player.color;
export const getPlayerMoney = (state: StoreSchema) => state.player.money;
export const getPlayerAsset = (state: StoreSchema) => state.player.asset;
export const getPlayerAvatar = (state: StoreSchema) => state.player.avatar;