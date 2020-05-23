<template>
  <div>
    <h1>消息提示</h1>
    <el-button type="warning" round @click="showmessage">展示消息提示</el-button>
    <el-button type="success" plain @click="showerror">展示消息提示</el-button>
    <el-button type="success" plain @click="showmessage1">展示消息提示</el-button>
  </div>
</template>
<script>
  export default {
    methods: {
      showmessage() {
        const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '订单创建成功你的订单号是'),
            h('i', {style: 'color :teal'}, '87')
          ])
        })
      },
      showerror() {
        this.$message.error('展示错误信息！')
      },
      showmessage1() {
        this.$message({
          message: '这是实现属性',
          type: 'success',
          center: true , //文字是否居中
          iconClass:'el-icon-user'
        });
      }
    }
  }

</script>
<style>

</style>
