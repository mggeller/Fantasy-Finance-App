import { IClient } from '@/domain/IClient'
import { IStock } from '@/domain/IStock'
import { IStockInClient } from '@/domain/IStockInClient'
import { ClientApi } from '@/services/ClientApi'
import { StockApi } from '@/services/StockApi'
import { StockInClientsApi } from '@/services/StockInClientsApi'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clients: [] as IClient[],
    client: {} as IClient,
    stocks: [] as IStock[],
    stock: {} as IStock,

    stockInClient: {} as IStockInClient
  },
  mutations: {
    setClients(state, clients: IClient[]) {
      state.clients = clients;
    },

    setClient(state, client: IClient) {
      state.client = client;
    },
    setStocks(state, stocks: IStock[]) {
      state.stocks = stocks;
    },

    setStock(state, stock: IStock) {
      state.stock = stock;
    },

    setStockInClient(state, stockInClient: IStockInClient) {
      state.stockInClient = stockInClient;
    }
  },
  actions: {

    // Clients
    async getClients(context): Promise<void> {
      const clients = await ClientApi.getAll();
      context.commit('setClients', clients);
    },
    async getClient(context, id:string): Promise<void> {
      const client = await ClientApi.getOne(id);
      context.commit('setClient', client);
    },
    async createClient(context, client: IClient): Promise<void> {
      await ClientApi.create(client);
      await context.dispatch('getClients');
    },
    async deleteClient(context, id: string): Promise<void> {
      await ClientApi.delete(id);
      await context.dispatch('getClients');
    },

    // Stocks
    async getStocks(context): Promise<void> {
      const stocks = await StockApi.getAll();
      context.commit('setStocks', stocks);
    },
    async createStock(context, stock: IStock): Promise<void> {
      await StockApi.create(stock);
      await context.dispatch('getStocks');
    },
    async deleteStock(context, id: string): Promise<void> {
      await StockApi.delete(id);
      await context.dispatch('getStocks');
    },
    async getStock(context, id: string): Promise<void> {
      const stock = await StockApi.getStock(id);
      context.commit('setStock', stock);
    },
    async updateStock(context, stock: IStock): Promise<void> {
      await StockApi.update(stock);
      await context.dispatch('getStocks');
    },

    // StockInClients
    async createStockInClient(context, stockInClient: IStockInClient): Promise<void> {
      await StockInClientsApi.purchase(stockInClient);
      await context.dispatch('getClients');
    },
  },
  modules: {
  }
})
