<template>
    <div class="app">
        <add-task-form></add-task-form>
        <task-list></task-list>
        <!-- <add-list-form></add-list-form> -->
    </div>
</template>
  
<script>
import addTaskForm from "./components/addTaskForm.vue";
import taskList from "./components/taskList.vue";
import addListForm from "./components/addListForm.vue";
export default {
    name: "App",
    components: {
        addTaskForm,
        addListForm,
        taskList,
    },
};
</script>
  
<style lang="scss">
@import "./style/mixins.scss";
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu';
}

.app {
    padding: 50px 50px 50px 50px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: $background-color;
}
</style>