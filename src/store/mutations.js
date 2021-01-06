import { ADD_TODO, DELETE_TODO, DELETE_FINISHED_TODO, SELECT_ALL } from './mutations-type'

export default {
  [ADD_TODO] (state, { todo }) {
    state.todoList.unshift(todo)
  },
  [DELETE_TODO] (state, { index }) {
    state.todoList.splice(index, 1)
  },
  [SELECT_ALL] (state, { isCheck }) {
    state.todoList.forEach((todo) => {
      todo.finished = isCheck
    })
  },
  [DELETE_FINISHED_TODO] (state) {
    state.todoList = state.todoList.filter((todo) => !todo.finished)
  }

}
