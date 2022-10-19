<template>
  <div class="add-list">
    <input class="add-list__input" @keyup.enter="addList" :placeholder="currentPlaceholder" type="text"
      v-model="newList" />
    <button class="add-list__btn" @click="addList"></button>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      newList: "",
      currentPlaceholder: "Add list",
    };
  },
  methods: {
    addList() {
      if (!this.newList.length) {
        this.currentPlaceholder = 'Input something!';
      } else {
        this.$store.dispatch("addList", this.newList);
      }
      this.newList = "";
    },
  },
};
</script>
  
<style scoped lang="scss">
@import "@/style/mixins.scss";

.add-list {
  display: flex;

  &__input {
    background: $background-color;
    color: $font-color;
    font-size: 16px;
    width: 575px;
    height: 60px;
    border-radius: 16px;
    border: none;
    padding: 20px 20px 20px 40px;
    @include shadowInner;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: $font-color;
    }
  }

  &__btn {
    margin: 0 0 0 20px;
    height: 60px;
    width: 60px;
    border: none;
    border-radius: 50%;
    color: #757575;
    background-color: $background-color;
    background-image: url('@/image/plus.png');
    background-size: 24px;
    background-repeat: no-repeat;
    background-position: center;
    @include shadowOuter
  }
}
</style>