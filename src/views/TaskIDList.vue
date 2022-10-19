<template>
    <div class="container">
        <AddTaskForm class="pt20"></AddTaskForm>
        <div class="tasks__container">
            <task v-for="task in tasksFilteredInProgress" @click="toogleTask(task)" :key="task.id" :task="task">

            </task>
        </div>
        <div class="tasks__container">
            <span class="tasks__label" v-if="tasksFilteredDone.length">Completed tasks:</span>
            <task v-for="task in tasksFilteredDone" @click="toogleTask(task)" :key="task.id" :task="task">

            </task>
        </div>
    </div>
</template>
    
<script>
import task from "@/components/task.vue";
import AddTaskForm from "@/components/addTaskForm.vue";
export default {
    components: {
        task,
        AddTaskForm
    },
    methods: {
        toogleTask(task) {
            this.$store.commit("toogleTask", task);
        },
    },
    computed: {
        tasksFilteredInProgress() {
            let tasks = this.$store.getters.inProgressTasks;
            let tasksFiltered = tasks.filter(task => task.list == this.$route.params.list)
            return tasksFiltered;
        },
        tasksFilteredDone() {
            let tasks = this.$store.getters.doneTasks;
            let tasksFiltered = tasks.filter(task => task.list == this.$route.params.list)
            return tasksFiltered;
        }
    }
};
</script>
    
<style scoped lang="scss">
@import "@/style/mixins.scss";

.container {
    display: flex;
    flex-direction: column;
}

.pt20 {
    padding-top: 50px
}

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