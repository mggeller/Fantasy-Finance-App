<template>
    <div class="container">
        <main role="main" class="pb-3">
            <h1>Create</h1>

            <h4>Client</h4>
            <hr />
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="control-label" for="Username">Username</label>
                        <input
                            v-model="client.username"
                            class="form-control"
                            type="text"
                            id="Name"
                        />
                    </div>
                    <div class="form-group">
                        <button @click="createOnClick($event)" class="btn btn-primary">Create</button>
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
import { IClient } from '../../domain/IClient';
import router from "../../router";
import store from "../../store";

@Component
export default class ClientsCreate extends Vue {
    private client: IClient = {
        id: 0,
        username: '',
        portfolio: 1000,
        stocks: []
    };

    createOnClick(): void {
        store.dispatch('createClient', this.client);
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
