import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        name: "Buy a bread",
        done: false,
        list: "Routine"
      },
      {
        id: 2,
        name: "Made hw",
        done: false,
        list: "Priority"
      },
      {
        id: 3,
        name: "Write CV",
        done: false,
        list: "Work"
      },
      {
        id: 4,
        name: "Feed the cat",
        done: false,
        list: "Routine"
      },
      {
        id: 5,
        name: "Learn VueJS",
        done: false,
        list: "Work"
      },
      {
        id: 6,
        name: "Buy a laptop",
        done: false,
        list: "Work"
      },
      {
        id: 7,
        name: "Download VSCode",
        done: false,
        list: "Work"
      },
      {
        id: 8,
        name: "Meet Jack and Ann",
        done: false,
        list: "Priority"
      },
      {
        id: 9,
        name: "Watch TV Show",
        done: false,
        list: "Default"
      },
      {
        id: 10,
        name: "Find a new series",
        done: false,
        list: "Default"
      },

    ],
    menuVisibilityStatus: false,
    lists: ["Default", "Priority", "Work", "Routine"]
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
    },
    changeMenuVisibilityStatus(state) {
      state.menuVisibilityStatus = !state.menuVisibilityStatus;
      console.log('changeMenuVisibilityStatus')
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
    },
    changeMenuVisibilityStatus({ commit }) {
      commit('changeMenuVisibilityStatus')
    }
  },
  getters: {},
  modules: {}
});
