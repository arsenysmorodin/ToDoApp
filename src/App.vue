<template>
    <div class="app">
        <nav-burger></nav-burger>
        <menuOpen v-if="$store.state.menuVisibilityStatus"></menuOpen>
        <router-view></router-view>
    </div>
</template>
  
<script>
import navBurger from "./components/navBurger.vue";
import menuOpen from "./components/menu.vue";
export default {
    name: "App",
    components: {
        navBurger,
        menuOpen,
    },
};
</script>
  
<style lang="scss">
@import "./style/mixins.scss";
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu';
}

.app {
    position: relative;
    padding: 50px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: $background-color;
}
</style>