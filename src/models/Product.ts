import Image from "./Image"
import Category from "./Category"
import Mensuration from './Mensuration'

export default interface Product {
    id: number,
    name: string, 
    seoname: string,
    images: Image[],
    options: Option[],
    categories: Category[]
}

export interface Option {
    id: number,
    name: string,
    sku: string, 				
    price: number,
    quantity: number,
    mensuration: Mensuration
}