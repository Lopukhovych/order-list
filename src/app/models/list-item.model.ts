export class Data {
    constructor(public name: string, public ingredients: string[], public price: number) {}
}
export class Cart {
    constructor (public id: number, public data: Data, public confirmed: boolean) {}
}
export class HistoryItem {
    constructor (public cart: Cart, public date: Date ) {}
}
