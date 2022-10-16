<template>
  <div>
    <div class="tasks-container">
      <task v-for="task in $store.state.tasks" @click="toogleTask(task)" :key="task.id" :task="task">

      </task>
    </div>
  </div>
</template>
  
<script>
import task from "@/components/task.vue";
export default {
  components: {
    task,
  },
  methods: {
    toogleTask(task) {
      this.$store.commit("toogleTask", task);
    },
  },
};
</script>
  
<style>
.tasks-container {
  padding: 100px 100px 0 100px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>