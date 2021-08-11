import { IClient } from '@/domain/IClient';
import { IFetchResponse } from '@/types/IFetchResponse';
import Axios from 'axios';

export abstract class ClientApi {
    private static axios = Axios.create({
        baseURL: "http://127.0.0.1:8000/api/clients",
        headers: {
            common: {
                'Content-Type': 'application/json'
            }
        }
    });

    static async getAll(): Promise<IClient[]> {
        const url = "";
        console.log('URL ' + url);
        console.log('URI' + this.axios.getUri)
        try {
            const response = await this.axios.get<IClient[]>(url);
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

    static async getOne(id: string): Promise<IClient | null> {
        const url = "" + id;
        try {
            const response = await this.axios.get<IClient>(url);
            console.log('getOne response', response);
            if (response.status === 200) {
                console.log('getOne response.data: ' + response.data);
                return response.data;
            }
            console.log(response.status);
            return null;
        } catch (error) {
            console.log('error: ', (error as Error).message);
            return null
        }
    }

    static async create(client: IClient): Promise<IFetchResponse<string>> {
        const url = "";
        try {
            const response = await this.axios.post(url, client);
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
            const response = await this.axios.delete<IClient>(url);
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
}
