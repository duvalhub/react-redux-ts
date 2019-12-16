import Address from "./User"

export default interface Transaction {
    id: number,
    invoice: string,
    subtotal: number,
    tax: number,
    shipping: number,
    total: number,
    status: TransactionState,
    address: Address
    items: TransactionItem[]
}

export enum TransactionState {
    'waiting', 'cancelled', 'completed'
}

export interface TransactionItem {
    id: number,
    name: string,
    sku: string,
    price: number,
    quantity: number
}