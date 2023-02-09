<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
      <el-button type="primary" @click="handle">按钮</el-button>
  </el-card>
</template>

<script>
export default {
  data(){
    return {
      app:{
        a:2
      }
    }
  },
  computed: {
    app1() {
      return JSON.parse(JSON.stringify(this.app));
    },
  },
  watch:{
    app1:{
      handler(newValue,oldValue){
        console.log(newValue)
        console.log(oldValue)
      },
      deep: true
    }

  },
  methods:{
    handle(){
      this.app.a = 100000
    }
  }
}

</script>
