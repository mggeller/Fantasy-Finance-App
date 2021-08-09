import { IStockInClient } from '@/domain/IStockInClient';
import { IFetchResponse } from '@/types/IFetchResponse';
import Axios from 'axios';

export abstract class StockInClientsApi {
    private static axios = Axios.create({
        baseURL: "http://127.0.0.1:8000/api/stockinclients",
        headers: {
            common: {
                'Content-Type': 'application/json'
            }
        }
    });

    static async purchase(stockinclients: IStockInClient): Promise<IFetchResponse<string>> {
        const url = "";
        try {
            const response = await this.axios.post(url, stockinclients);
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
}
