import { IStock } from '@/domain/IStock';
import { IFetchResponse } from '@/types/IFetchResponse';
import Axios from 'axios';

export abstract class StockApi {
    private static axios = Axios.create({
        baseURL: "http://127.0.0.1:8000/api/stocks",
        headers: {
            common: {
                'Content-Type': 'application/json'
            }
        }
    });

    static async getAll(): Promise<IStock[]> {
        const url = "";
        console.log('URL ' + url);
        console.log('URI' + this.axios.getUri)
        try {
            const response = await this.axios.get<IStock[]>(url);
            console.log('getAll response', response);
            if (response.status === 200) {
                console.log('GetAll response.data: ' + response.data);
                return response.data;
            }
            return [];
        } catch (error) {
            console.log('error: ', (error as Error).message);
            return [];
        }
    }

    static async create(stock: IStock): Promise<IFetchResponse<string>> {
        const url = "";
        try {
            const response = await this.axios.post(url, stock);
            console.log('create response', response);
            if (response.status === 200) {
                return {
                    statusCode: response.status,
                    data: response.data
                };
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            };
        } catch (error) {
            console.log('error: ', (error as Error).message);
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(error)
            };
        }
    }

    static async delete(id: string): Promise<void> {
        const url = "" + id;
        console.log('URL ' + url);
        console.log('URI' + this.axios.getUri)
        try {
            const response = await this.axios.delete<IStock>(url);
            console.log('delete response', response);
            if (response.status === 200) {
                console.log('delete response.data: ' + response.data);
                return;
            }
            console.log(response.status);
            return;
        } catch (error) {
            console.log('error: ', (error as Error).message);
        }
    }

    static async getStock(id: string): Promise<IStock | null> {
        const url = "" + id;
        console.log('URL ' + url);
        console.log('URI' + this.axios.getUri)
        try {
            const response = await this.axios.get<IStock>(url);
            console.log('getStock response', response);
            if (response.status === 200) {
                console.log('getStock response.data: ' + response.data);
                return response.data;
            }
            console.log(response.status);
            return null;
        } catch (error) {
            console.log('error: ', (error as Error).message);
            return null
        }
    }

    static async update(stock: IStock): Promise<IFetchResponse<string>> {
        const url = "" + stock.id;
        try {
            const response = await this.axios.put(url, stock);
            console.log('update response', response);
            if (response.status === 200) {
                return {
                    statusCode: response.status,
                    data: response.data
                };
            }
            return {
                statusCode: response.status,
                errorMessage: response.statusText
            };
        } catch (error) {
            console.log('error: ', (error as Error).message);
            return {
                statusCode: 0,
                errorMessage: JSON.stringify(error)
            };
        }
    }
}
