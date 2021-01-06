export default {
  // 任务总数量
  todoListCount (state) {
    return state.todoList.length
  },
  // 已完成的任务数量
  finishedCount (state) {
    return state.todoList.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0)
  },
  // 判断是否需要全选
  isSelectAll (getters) {
    return getters.finishedCount === getters.todoListCount && getters.todoListCount > 0
  }
}
