<template>
    <div>
        <h1>Clients</h1>

        <p>
            <router-link to="/clients/create">Create new</router-link>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>Username</th>

                    <th>Cash Balance</th>

                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in clients" :key="client.id">
                    <td>{{client.username}}</td>

                    <td>{{client.portfolio}}</td>

                    <td>
                        <button @click="deleteOnClick(client)" type="button" class="btn btn-danger">Delete</button>
                    </td>
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
export default class ClientsIndex extends Vue {
    get clients(): IClient[] {
        console.log('clients log' + store.state.clients);
        return store.state.clients;
    }

    deleteOnClick(client: IClient): void {
        store.dispatch("deleteClient", client.id);
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
        store.dispatch("getClients");
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
