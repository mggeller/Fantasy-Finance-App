<template>
    <div class="container">
        <main role="main" class="pb-3">
            <h1>Purchase</h1>

            <h4>Stock for Client</h4>
            <hr />
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label" for="client_id">Client id</label>
                        <input
                            v-model="stockInClient.client_id"
                            class="form-control"
                            type="number"
                            id="ClientId"
                        />
                        <label class="control-label" for="stock_id">Stock id</label>
                        <input
                            v-model="stockInClient.stock_id"
                            class="form-control"
                            type="number"
                            id="StockId"
                        />
                        <label class="control-label" for="volume">Volume</label>
                        <input
                            v-model="stockInClient.volume"
                            class="form-control"
                            type="number"
                            id="Volume"
                        />
                        <label class="control-label" for="purchase_price">Purchase Price</label>
                        <input
                            v-model="stockInClient.purchase_price"
                            class="form-control"
                            type="number"
                            id="PurchasePrice"
                        />
                    </div>
                    <div class="form-group">
                        <button @click="createOnClick($event)" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
            <div>
                <router-link to="/clients">Back to List</router-link>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IStockInClient } from '../../domain/IStockInClient';
import router from "../../router";
import store from "../../store";

@Component
export default class StockInClientsCreate extends Vue {
    private stockInClient: IStockInClient = {
        id: 0,
        client_id: 0,
        stock_id: 0,
        volume: 0,
        purchase_price: 0
    };

    createOnClick(): void {
        store.dispatch('createStockInClient', this.stockInClient);
        router.push('/clients');
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

</script>
