<template>
  <div>
    <h1>输入主键</h1>
    <!--    <el-input v-model="name" type="textarea" :maxlength="3999" show-word-limit=true></el-input>
        <el-input @blur="jj"></el-input>
        <el-input @change="ss" type="text"></el-input>
        <el-input v-model="username" ref="inputs"></el-input>
        <el-button @click="inputfocus" type="warning" plain>提交</el-button>
        <el-input v-model="aftername" ref="burinputs"></el-input>
        <el-button @click="bursinput">提交</el-button>-->
    <el-input @change="dd" v-model="name"></el-input>
    <el-input @clear="clearable" v-model="name"></el-input>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '哈哈哈',
        /*username: '嘻嘻嘻',
        aftername: '呵呵',*/
      }
    },
    methods: {
      /*      jj() {
              this.$message.error("失去焦点！")
            },
            ss(e) {

              console.log(e)
            },
            inputfocus() {
              this.$refs.inputs.focus();
            },
            bursinput() {
              this.$refs.blur();
            },*/
      dd(value) {
        debugger
        console.log(value);
      },
      clearable(value) {
        debugger
        console.log(value);

      }
    }
  }

</script>
<style>

</style>
