<template>
    <div class="nav" @click="showMenu">
        <div class="nav__item"></div>
    </div>
</template>

<script>
export default {
    methods: {
        showMenu() {
            this.$store.dispatch("changeMenuVisibilityStatus");
        }
    }
}

</script>

<style scoped lang="scss">
@import "@/style/mixins.scss";

.nav {
    position: absolute;
    right: 50px;
    top: 120px;
    display: flex;

    &__item {
        width: 40px;
        height: 5px;
        border-radius: 5px;
        background: $font-color;
        position: relative;

        &::before {
            position: absolute;
            display: block;
            content: '';
            top: -7px;
            right: 0;
            width: 28px;
            height: 5px;
            border-radius: 5px;
            background: $font-color;
        }

        &::after {
            position: absolute;
            display: block;
            content: '';
            top: 7px;
            right: 0;
            width: 23px;
            height: 5px;
            border-radius: 5px;
            background: $font-color;
        }
    }
}
</style>