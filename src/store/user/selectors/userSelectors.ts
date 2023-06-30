import { StoreSchema } from "@/store/store";

export const getUserEmail = (state: StoreSchema) => state.user.email;
export const getUserUsername = (state: StoreSchema) => state.user.username;
export const getUserGame = (state: StoreSchema) => state.user.game;
export const getUserWin = (state: StoreSchema) => state.user.win;
export const getUserFriends = (state: StoreSchema) => state.user.friends;
export const getUserIsOnline = (state: StoreSchema) => state.user.isOnline;
export const getUserAvatar = (state: StoreSchema) => state.user.avatar;
export const getUserGender = (state: StoreSchema) => state.user.gender;
