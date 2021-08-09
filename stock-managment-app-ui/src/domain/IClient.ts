import { IStock } from "./IStock";
import { IStockInClient } from "./IStockInClient";

export interface IClient {
    id: number;
    username: string;
    portfolio: number;
    stocks: IStock[];
}