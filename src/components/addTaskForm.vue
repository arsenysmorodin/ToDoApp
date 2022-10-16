<template>
  <div class="add-task__column">
    <input placeholder="Add task" type="text" v-model="newTodo" />
    <button @click="addTask">Add task</button>
    <select name="list" @change="changeList($event)">
      <option :value="item" v-for="item in $store.state.lists" :key="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      newTodo: "",
      list: "default",
      task: {
        name: "",
        list: "",
      },
    };
  },
  methods: {
    addTask() {
      this.task.name = this.newTodo;
      this.task.list = this.list;
      this.$store.dispatch("addTask", this.task);
      this.newTodo = "";
    },
    changeList(event) {
      this.list = event.target.value;
    },
  },
};
</script>
  
<style>

</style>