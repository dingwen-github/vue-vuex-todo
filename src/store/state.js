import localStorageUtil from '../utils/localStorageUtil'
import shortId from 'shortid'

export default {
  todoList: localStorageUtil.getTodoList(),
  todoListKeys: (localStorageUtil.getTodoList()).map(() => shortId.generate())
}
