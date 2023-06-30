import { BusinessState, IBusiness } from '@/types/business';
import { IGame } from '@/types/game';
import { IOffer, IOfferItem, OfferState } from '@/types/offer';
import { IPlayer } from '@/types/player';
import { IUser } from '@/types/user';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';


const makeStore = () =>
  configureStore({
    reducer: {

    },
    devTools: true,
  });


export interface StoreSchema {
  player: IPlayer,
  business: BusinessState,
  game: IGame,
  user: IUser,
  offer: OfferState,
  offerItem: IOfferItem
}

export const wrapper = createWrapper(makeStore);