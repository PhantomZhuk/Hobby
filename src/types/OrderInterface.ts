export interface product {
    _id: string
    name: string
    price: number
    quantity: number
}

export interface Order {
    orders: product[]
    totalPrice: number
    date: any
    customerName: string
    customerEmail: string
    customerPhone: string
}