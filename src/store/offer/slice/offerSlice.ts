import { OfferState } from '@/types/offer';
import { IPlayer } from '@/types/player';
import { createSlice } from '@reduxjs/toolkit';

const initialState: OfferState = {
  data: []
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    playTrack(state){

    },
  },
});


export const {  } = offerSlice.actions;

export const { reducer: offerReducer } = offerSlice;
export const { actions: offerAction } = offerSlice;