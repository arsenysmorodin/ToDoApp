<template>
  <div :class="{ done: task.done }">
    <span>{{ task.name }} ({{ task.list }})</span>
    <button @click="deleteTask(task)">x</button>
  </div>
</template>
  
<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTask(task) {
      this.$store.commit("deleteTask", task);
    },
  },
};
</script>
  
<style>
.done {
  text-decoration: line-through;
}
</style>