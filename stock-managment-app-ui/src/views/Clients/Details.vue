<template>
    <div>
        <h1>List of {{ client.username }}'s stocks</h1>

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
                    <td>{{ stock.company_name }}</td>

                    <td>{{ stock.pivot.volume }} $</td>

                    <td>{{ stock.pivot.purchase_price }} $</td>

                    <td>{{ stock.price }} $</td>

                    <td>
                        {{
                            stock.price * stock.pivot.volume -
                            stock.pivot.purchase_price * stock.pivot.volume
                        }}
                        $
                    </td>
                </tr>
            </tbody>
        </table>

        <div>
            <dl class="row" :key="client.id">
                <dt class="col-sm-2">Username</dt>
                <dd class="col-sm-10">{{ client.username }}</dd>
                <dt class="col-sm-2">Total</dt>
                <dd class="col-sm-10">{{ total }} $</dd>
                <dt class="col-sm-2">Invested</dt>
                <dd class="col-sm-10">{{ 1000 - client.portfolio }} $</dd>
                <dt class="col-sm-2">Cash Balance</dt>
                <dd class="col-sm-10">{{ client.portfolio }} $</dd>
            </dl>
        </div>

        <div>
            <router-link to="/clients">Back to List</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "../../store";
import { IClient } from "../../domain/IClient";

@Component
export default class ClientsDetails extends Vue {
    get client(): IClient | undefined {
        console.log("client log" + store.state.client);
        return store.state.client;
    }

    get total(): number {
        let totalGainOrLoss = 0;
        this.client!.stocks.forEach((stock) => {
            totalGainOrLoss =
                totalGainOrLoss +
                (stock.price * stock.pivot.volume -
                    stock.pivot.purchase_price * stock.pivot.volume);
        });

        return totalGainOrLoss;
    }

    // ============ Lifecycle methods ==========
    beforeCreate(): void {
        store.dispatch("getClient", this.$route.params.id);
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
