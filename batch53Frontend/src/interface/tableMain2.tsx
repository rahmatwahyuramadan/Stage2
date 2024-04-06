export interface ITransaction {
    id: number,
    image: string,
    category: string,
    note: string,
    amount: string
}

export interface ITableMain2 {
    id: number,
    date: string,
    day: string,
    month: string,
    year: string,
    total: string,
    transactions: ITransaction[]
}