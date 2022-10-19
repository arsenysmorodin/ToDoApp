<template>
  <div>
    <div class="tasks__container">
      <task v-for="task in inProgressTasks" @click="toogleTask(task)" :key="task.id" :task="task">

      </task>
    </div>
    <div class="tasks__container">
      <span class="tasks__label" v-if="doneTasks.length">Completed tasks:</span>
      <task v-for="task in doneTasks" @click="toogleTask(task)" :key="task.id" :task="task">

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
  computed: {
    inProgressTasks() {
      let tasksArr = this.$store.getters.inProgressTasks;
      return tasksArr;
    },
    doneTasks() {
      let tasksArr = this.$store.getters.doneTasks;
      return tasksArr;
    }
  }
};
</script>
  
<style scoped lang="scss">
@import "@/style/mixins.scss";

.tasks__container {
  padding: 100px 100px 0 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 60px;
}

.tasks__label {
  width: 100%;
  display: block;
  color: $font-color;
  text-decoration: none;
  font-size: 24px;
}
</style>