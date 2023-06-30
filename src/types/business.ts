export interface IBusiness {
    name: string,
    img: string,
    lvl: number,
    price: number,
    profit: number[],
    sellPrice: number,
    updatePrice: number,
    type: BusinessType
}

export interface BusinessState {
    data: IBusiness[]
}



export enum BusinessType {
    FOOD = 'food',
    CAR = 'car',
    HOTEL = 'hotel',
    TELEPHONE = 'telephone',
    AIRLINE = 'airline',
    IT = 'it',
    CLOTHES = 'clothes',
    PERFUME = 'perfume',
    DRINK = 'drink'
}