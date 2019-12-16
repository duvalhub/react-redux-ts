export default interface User {
    name: string, 
    email: string, 
    address: Address, 
    roles: UserRole[]
} 

export interface Address {
    id: number,
    address: string,
    city: string,
    province: string,
    country: string,
    zip: string
}

export interface UserRole {
    id: number, 
    name: string
}