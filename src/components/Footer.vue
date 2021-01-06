<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isSelectAllOrNot">
    </label>
    <span><span>已完成{{finishedCount}}件 / 总计{{todoListCount}}件</span></span>
    <button class="btn btn-warning" @click="deleteFinishedTodo">清除已完成任务</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Footer',
  computed: {
    ...mapGetters(['todoListCount', 'finishedCount', 'isSelectAll']),
    // 不能直接使用isSelectAll
    isSelectAllOrNot: {
      get () {
        return this.isSelectAll
      },
      set (value) {
        this.selectAll(value)
      }
    }
  },
  methods: {
    ...mapActions(['deleteFinishedTodo', 'selectAll'])
  }
}
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
