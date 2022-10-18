<template>
    <div class="container">
        <AddTaskForm class="pt20"></AddTaskForm>
        <div class="tasks-container">
            <task v-for="task in tasksFiltered" @click="toogleTask(task)" :key="task.id" :task="task">

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
        tasksFiltered() {
            let tasks = this.$store.state.tasks;
            let tasksFiltered = tasks.filter(task => task.list == this.$route.params.list)
            return tasksFiltered;
        }
    }
};
</script>
    
<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
}

.pt20 {
    padding-top: 50px
}

.tasks-container {
    padding: 100px 100px 0 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 60px;
}
</style>