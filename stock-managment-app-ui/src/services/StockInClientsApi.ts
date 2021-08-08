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

}