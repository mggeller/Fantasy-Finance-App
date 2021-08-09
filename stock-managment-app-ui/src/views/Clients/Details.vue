<template>
    <div>
        <h1>List of {{client.username}}'s stocks</h1>

        <table class="table">
            <thead>
                <tr>
                    <th>Comapny</th>

                    <th>Volume</th>

                    <th>Purchase Price</th>

                    <th>Current Price</th>

                    <th>Gain/Loss</th>

                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="stock in client.stocks" :key="stock.id">
                    <td>{{stock.company_name}}</td>

                    <td>{{stock.pivot.volume}} $</td>

                    <td>{{stock.pivot.purchase_price}} $</td>

                    <td>{{stock.price}} $</td>

                    <td>{{stock.price * stock.pivot.volume - stock.pivot.purchase_price * stock.pivot.volume}} $</td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../../store";
import { IClient } from "../../domain/IClient";
// import Alert from "./components/Alert.vue";

@Component
export default class ClientsDetails extends Vue {
    get client(): IClient | undefined {
        console.log('client log' + store.state.client);
        return store.state.client;
    }

    // ============ Lifecycle methods ==========
    beforeCreate(): void {
        store.dispatch('getClient', this.$route.params.id);
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
