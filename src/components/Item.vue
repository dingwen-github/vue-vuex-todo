<template>
  <li :style="{backgroundColor: !isShow ? '#fff' : '#ddd'}" @mouseleave="isShow = false" @mouseenter="isShow = true">
    <label>
      <input type="checkbox" v-model="todo.finished">
      <span v-text="todo.title"/>
    </label>
    <button class="btn btn-warning" v-show="isShow" @click="deleteTo">删除</button>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Item',
  props: {
    todo: Object,
    index: Number
  },
  data: function () {
    return {
      isShow: false
    }
  },
  methods: {
    ...mapActions(['deleteTodo']),
    deleteTo () {
      if (window.confirm(`您确定要删除${this.todo.title}吗？`)) {
        this.deleteTodo(this.index)
      }
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    padding: 4px 10px;
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
