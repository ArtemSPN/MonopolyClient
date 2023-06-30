import { IGame } from '@/types/game';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IGame = {
    playersQty: 1,
    winner: '',
    endStatus: false,
    players: [],
    link: ''
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playTrack(state){

    },
  },
});

export const {  } = gameSlice.actions;

export const { reducer:  gameReducer } =  gameSlice;
export const { actions:  gameAction } =  gameSlice;