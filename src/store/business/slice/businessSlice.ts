import { BusinessState } from '@/types/business';
import { createSlice } from '@reduxjs/toolkit';

const initialState:BusinessState = {
    data: [],
};

export const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    playTrack(state){

    },
  },
});

export const {  } = businessSlice.actions;

export const { reducer:  businessReducer } =  businessSlice;
export const { actions:  businessAction } =  businessSlice;