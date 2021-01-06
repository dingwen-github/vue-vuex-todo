import { ADD_TODO, DELETE_TODO, DELETE_FINISHED_TODO, SELECT_ALL } from './mutations-type'

export default {
  addTodo ({ commit }, todo) {
    commit(ADD_TODO, { todo })
  },
  deleteTodo ({ commit }, index) {
    commit(DELETE_TODO, { index })
  },
  selectAll ({ commit }, isCheck) {
    commit(SELECT_ALL, { isCheck })
  },
  deleteFinishedTodo ({ commit }) {
    commit(DELETE_FINISHED_TODO)
  }
}
