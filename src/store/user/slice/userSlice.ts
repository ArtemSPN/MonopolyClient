import { GenderType, IUser } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IUser = {
    _id: '',
    email: '',
    username: '',
    password: '',
    game: 0,
    win: 0,
    friends: [],
    isOnline: true,
    avatar: '',
    gender: GenderType.MALE
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    playTrack(state){

    },
  },
});


export const {  } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
export const { actions: userAction } = userSlice;