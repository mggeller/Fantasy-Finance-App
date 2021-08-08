<template>
    <div class="container">
        <main role="main" class="pb-3">
            <h1>Update</h1>

            <h4>Stock Price</h4>
            <hr />
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label" for="price">Price</label>
                        <input
                            v-model="stock.price"
                            class="form-control"
                            type="number"
                            id="Price"
                        />
                    </div>
                    <div class="form-group">
                        <button @click="updateOnClick($event)" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
            <div>
                <router-link to="/stocks">Back to List</router-link>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IStock } from '../../domain/IStock';
import router from "../../router";
import store from "../../store";

@Component
export default class StocksEdit extends Vue {
    get stock(): IStock {
        return store.state.stock;
    }

    set stock(stock: IStock) {
        store.state.stock = stock;
    }

    updateOnClick(): void {
        store.dispatch('updateStock', this.stock);
        router.push('/stocks');
    }

    // ============ Lifecycle methods ==========
    beforeCreate(): void {
        store.dispatch('getStock', this.$route.params.id);
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
