import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        name: "buy a bread",
        done: false,
        list: "default"
      },
      {
        id: 2,
        name: "made hw",
        done: false,
        list: "default"
      },
      {
        id: 3,
        name: "build a house",
        done: false,
        list: "default"
      }
    ],
    lists: ["default", "priority", "work"]
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push({
        id: Date.now(),
        name: task.name,
        list: task.list
      });
    },
    addList(state, newValue) {
      state.lists.push(newValue);
    },
    toogleTask(state, task) {
      task.done = !task.done;
    },
    deleteTask(state, task) {
      let filteredTasks = state.tasks.filter((item) => item.id !== task.id);
      state.tasks = filteredTasks;
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit("addTask", task);
    },
    addList({ commit }, newList) {
      commit("addList", newList);
    },
    toogleTask({ commit }, task) {
      commit("toogleTask", task);
    },
    deleteTask({ commit }, task) {
      commit("deleteTask", task);
    }
  },
  getters: {},
  modules: {}
});
