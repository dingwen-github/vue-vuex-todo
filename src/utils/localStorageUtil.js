const TODO_LIST = 'todo_list'

export default {
  getTodoList () {
    return JSON.parse(localStorage.getItem(TODO_LIST)) || [{
      title: 'test',
      finished: false
    }]
  },
  setTodoList (toDoList) {
    return localStorage.setItem(TODO_LIST, JSON.stringify(toDoList))
  }
}
