<template>
  <div>
    <h1>这是栅格组件</h1>
    <el-row :gutter="5">
      <el-col :span="6"><div style="background-color: red">占用6份</div></el-col>
      <el-col :span="6"><div style="background-color: red">占用6份</div></el-col>
      <el-col :span="6"><div style="background-color: red">占用6份</div></el-col>
      <el-col :span="6" push="5"><div style="background-color: red">占用6份</div></el-col>

    </el-row>
  </div>
</template>
<script>
  export default {}

</script>
<style>

</style>
