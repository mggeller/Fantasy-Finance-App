<template>
    <div>
        <header>
            <nav
                class="
                    navbar navbar-expand-sm navbar-toggleable-sm navbar-light
                    bg-white
                    border-bottom
                    box-shadow
                    mb-3
                "
            >
                <div class="container">
                    <router-link to="/" class="navbar-brand"
                        >Fantasy Finance App</router-link
                    >
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="
                            navbar-collapse
                            collapse
                            d-sm-inline-flex
                            flex-sm-row-reverse
                        "
                    >
                        <Identity />
                        <ul class="navbar-nav flex-grow-1">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link text-dark"
                                    >Home</router-link
                                >
                            </li>
                            <li class="nav-item">
                                <router-link
                                    to="/clients"
                                    class="nav-link text-dark"
                                    >Clients</router-link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div class="container">
            <main role="main" class="pb-3">
                <router-view />
            </main>
        </div>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
