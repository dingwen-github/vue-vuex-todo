<template>
  <ul class="todo-main">
    <item v-for="(todo,index) in todoList" :key="todoListKeys[index]" :todo="todo" :index="index"></item>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import Item from './Item'
import localStorageUtil from '../utils/localStorageUtil'

export default {
  name: 'List',
  components: {
    Item
  },
  computed: {
    ...mapState(['todoList', 'todoListKeys'])
  },
  watch: {
    todoList: {
      deep: true,
      handler: localStorageUtil.setTodoList
    }
  }
}
</script>

<style scoped>
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }
</style>
