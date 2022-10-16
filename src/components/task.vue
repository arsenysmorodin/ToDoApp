<template>
  <div class="task" :class="{ task_done: task.done }">
    <div class="task__circle"></div>
    <span class="task__name">{{ task.name }} ({{ task.list }})</span>
    <button class="task__btn" @click="deleteTask(task)"></button>
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
  
<style scoped lang="scss">
@import "@/style/mixins.scss";

.task {
  display: flex;
  padding: 20px 20px 20px 20px;
  border-radius: 16px;
  width: 450px;
  height: 60px;
  @include shadowOuter;

  &_done {
    @include shadowInner;
  }

  &_done &__name {
    text-decoration: line-through;
  }

  &_done &__circle {
    background-color: $font-color;
  }

  &__circle {
    margin: 0 20px 0 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid $font-color;
  }

  &__name {
    color: $font-color;
    font-size: 18px;
    line-height: 18px;
    flex-grow: 1;
  }

  &__btn {
    width: 18px;
    height: 18px;
    background-color: transparent;
    background-image: url(@/image/del.png);
    background-size: 18px;
    background-position: center;
    border: none
  }
}
</style>