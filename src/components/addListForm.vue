<template>
  <div>
    <input placeholder="Add list" type="text" v-model="newList" />
    <button @click="addList">Add list</button>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      newList: "",
    };
  },
  methods: {
    addList() {
      this.$store.dispatch("addList", this.newList);
      this.newList = "";
    },
  },
};
</script>
  
<style>

</style>