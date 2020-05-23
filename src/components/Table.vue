<template>
  <div>
    <h1>Table组件</h1>
    <el-table :data="tableData" type="selection"  empty-text="暂无数据" size="small"
              :show-header="false" :cell-class-name='showCss' :height="600" border highlight-current-row="">
      <!--prop是表示属性-->
      <el-table-column prop="id" label="编号" fixed="right"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="email" label="邮件"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    name: '小张',
    data() {
      return {
        tableData: [
          {id: 21, name: '小陈', age: 23, email: '123456@qq.com'},
          {id: 21, name: '小陈', age: 23, email: '123456@qq.com'},
          {id: 21, name: '小陈', age: 23, email: '123456@qq.com'},
          {id: 21, name: '小陈', age: 23, email: '123456@qq.com'},
        ]
      }
    },
    methods: {
      showCss({row, rowIndex}) {
        if (rowIndex % 2 == 0) return 'warnging-row'
        return 'success'

      }
    }
  }

</script>
<style>

</style>
