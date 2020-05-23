<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <a href="#/button">点击我显示button</a>
    <a href="#/buttondetail">点击</a>
    <a href="#/tables">点击获得Tables组件</a>
    <a href="#/layout">栅格组件</a>
    <a href="#/input">输入组件</a>
    <a href="#/message">消息提示</a>
    <a href="#/table">表格组件</a>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
