<template>
  <div>
    <h1>Tables表格的使用</h1>
    <el-table :data="tableData" @select-all="selectAll" ref="mytable">
      <el-table-column prop="id" type="selection" label="编号" empty-text="暂无数据"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleEdit(scop.$index,scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="cleanTable" round type="warning"> 清空表格</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [
          {id: 21, name: '小陈', age: 23, email: '1234@qq.com'},
          {id: 21, name: '小陈', age: 23, email: '1234@qq.com'},
          {id: 21, name: '小陈', age: 23, email: '1234@qq.com'},
          {id: 21, name: '小陈', age: 23, email: '1234@qq.com'},
        ]
      }
    },
    methods: {
      selectChange(selection, row) {
        console.log(selection)
        console.log(row)
        // @select="selectChange"
      },
      selectAll(selection) {
        console.log(selection)
      },
      cleanTable() {
        this.$refs.mytable.clearSelection();
      },
      handleEdit(index, row) {
        console.log(index)
        console.log(row)
      }
    }
  }

</script>
<style>

</style>
