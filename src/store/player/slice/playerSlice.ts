import { IPlayer } from '@/types/player';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IPlayer = {
  name: 'name',
  color: 'red',
  money: 10000,
  asset: [],
  avatar: ''
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playTrack(state){

    },
  },
});


export const {  } = playerSlice.actions;

export const { reducer: playerReducer } = playerSlice;
export const { actions: playerAction } = playerSlice;