<template>
    <div class="menu">
        <button class="menu__close" @click="closeMenu"></button>
        <div class="menu__add-list">
            <div class="menu__label">Add a new list:</div>
            <AddListForm></AddListForm>
        </div>

        <div class="menu__choose-list">
            <span class="menu__label">Chose list:</span>
            <ul class="menu__list">
                <li class="menu__list-item" v-for="list in this.$store.state.lists" :key="list" @click="closeMenuAsync">
                    <div class="menu__list-link" @click="$router.push(`/${list}`)">
                        {{list}}
                    </div>
                </li>
                <RouterLink to="/" @click="closeMenuAsync" class="menu__label_small">Show all tasks</RouterLink>
            </ul>
        </div>

    </div>
</template>

<script>
import AddListForm from '@/components/addListForm.vue';
export default {
    methods: {
        closeMenu() {
            this.$store.dispatch("changeMenuVisibilityStatus");
        },
        closeMenuAsync() {
            setTimeout(() => this.$store.dispatch("changeMenuVisibilityStatus"), 100)

        }
    },
    components: { AddListForm }
}

</script>

<style lang="scss" scoped>
@import "@/style/mixins.scss";

.menu {
    background: $background-color;
    position: absolute;
    width: 95vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    padding: 47px 150px 0 150px;

    &__close {
        display: block;
        width: 36px;
        height: 36px;
        border: none;
        background: url('@/image/del.png') center no-repeat;
        background-size: 36px;
        position: absolute;
        top: 55px;
        right: 0;
    }

    &__add-list {
        margin: 0 0 30px 0;
        display: flex;
    }

    &__label {
        color: $font-color;
        font-size: 48px;
        display: block;
        margin: 0 20px 40px 0;

        &_small {
            color: $font-color;
            text-decoration: none;
            font-size: 24px;
        }
    }

    &__list {

        display: flex;
        flex-direction: column;
        gap: 30px;

        &-item {
            display: flex;
            padding: 20px 20px 20px 20px;
            border-radius: 16px;
            width: 450px;
            height: 60px;
            cursor: pointer;
            @include shadowOuter;
            color: $font-color;
            list-style: none;
            font-size: 18px;
        }

        &-link {
            width: 450px;
            height: 60px;
        }
    }
}
</style>