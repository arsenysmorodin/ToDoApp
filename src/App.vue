<template>
    <div class="app">
        <div>
            <add-task-form></add-task-form>
            <task-list></task-list>
        </div>
        <add-list-form></add-list-form>
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
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    height: 100vh;
    width: 100vw;
    background: #38404B;
}
</style>