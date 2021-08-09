import { IStockInClient } from "./IStockInClient";

export interface IStock {
    id: number;
    company_name: string;
    price: number;
    pivot: IStockInClient;
}