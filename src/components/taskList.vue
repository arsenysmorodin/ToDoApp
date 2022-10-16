<template>
  <div>
    <div>
      <task v-for="task in $store.state.tasks" @click="toogleTask(task)" :key="task.id" :task="task">
        <span v-if="task.done">done</span>
        {{ task.name }}
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

</style>