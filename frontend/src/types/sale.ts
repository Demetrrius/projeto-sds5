import { Seller } from "./sellers"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[];
    last: boolean ;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    numberOfElements?: number;
    first: boolean;
    empty?: boolean;

}

export type SaleSum = {
    sellername: string;
    sum: number;
}

export type SalesSuccess = {
    sellername: string;
    visited: number;
    deals: number;
}