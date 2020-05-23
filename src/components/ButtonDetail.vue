<template>
  <div>
    <h1>创建简单的按钮</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger" icon="el-icon-camera-solid">危险按钮</el-button>
    </el-row>
    <br>
    <!--朴素按钮-->
    <el-row plain>朴素按钮</el-row><br>
    <el-button type="primary" plain>主要按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: "ButtonDetail"
  }
</script>

<style scoped>

</style>
