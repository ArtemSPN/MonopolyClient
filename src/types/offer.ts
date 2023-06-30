export interface IOffer {
    from: string,
    to: string,
    status: boolean,
    payItems: IOfferItem[],
    getItems: IOfferItem[],
    payMoney: number,
    getMoney: number
}

export interface OfferState {
    data: IOffer[]
}

export interface IOfferItem {
    offerId: string,
    company: string,
    price: string
}