<template>
    <div>
        <h1>Stocks</h1>

        <p>
            <router-link to="/stocks/create">Create new</router-link>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>Company name</th>

                    <th>Price</th>

                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stock in stocks" :key="stock.id">
                    <td>{{stock.company_name}}</td>

                    <td>{{stock.price}} $</td>

                    <td>
                        <router-link :to="{ name: 'StocksEdit', params: {id: stock.id} }">Update Price</router-link> |
                        <button @click="deleteOnClick(stock)" type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../../store";
import { IStock } from "../../domain/IStock";
// import Alert from "./components/Alert.vue";

@Component
export default class StocksIndex extends Vue {
    get stocks(): IStock[] {
        console.log('stocks log' + store.state.stocks);
        return store.state.stocks;
    }

    deleteOnClick(stock: IStock): void {
        store.dispatch("deleteStock", stock.id);
    }

    // ============ Lifecycle methods ==========
    beforeCreate(): void {
        console.log("beforeCreate");
    }

    created(): void {
        console.log("created");
    }

    beforeMount(): void {
        console.log("beforeMount");
    }

    mounted(): void {
        console.log("mounted");
        store.dispatch("getStocks");
    }

    beforeUpdate(): void {
        console.log("beforeUpdate");
    }

    updated(): void {
        console.log("updated");
    }

    beforeDestroy(): void {
        console.log("beforeDestroy");
    }

    destroyed(): void {
        console.log("destroyed");
    }
}
</script>>
