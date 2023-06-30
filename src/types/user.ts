export interface IUser {
    _id: string,
    email: string,
    username: string,
    password: string,
    game: number,
    win: number,
    friends: string[],
    isOnline: boolean,
    avatar: string,
    gender: GenderType
}

export enum GenderType {
    MALE = 'male',
    FEMALE = 'female'
}