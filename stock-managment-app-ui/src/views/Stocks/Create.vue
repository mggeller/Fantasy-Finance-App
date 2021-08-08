<template>
    <div class="container">
        <main role="main" class="pb-3">
            <h1>Create</h1>

            <h4>Stock</h4>
            <hr />
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label" for="company_name">Company Name</label>
                        <input
                            v-model="stock.company_name"
                            class="form-control"
                            type="text"
                            id="Name"
                        />
                        <input
                            v-model="stock.price"
                            class="form-control"
                            type="number"
                            id="Price"
                        />
                    </div>
                    <div class="form-group">
                        <button @click="createOnClick($event)" class="btn btn-primary">Create</button>
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
export default class StocksCreate extends Vue {
    private stock: IStock = {
        id: 0,
        company_name: '',
        price: 0
    };

    createOnClick(): void {
        store.dispatch('createStock', this.stock);
        router.push('/stocks');
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
