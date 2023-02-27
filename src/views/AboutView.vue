<template>
  <div class="about">
    <el-row>
      <el-col :span="24" class="w3-padding">
        <h3>Сообщения с пользователем {{  $route.params.user }} </h3>
      </el-col>
      <el-row class="w3-padding"> 
          <el-col>
             <el-input v-model="text"></el-input>
          </el-col>
      </el-row>
    </el-row>
  
     
  </div>
</template>
<script>
   export default {
  
  data(){
    return{
      text:''
    }
  }
   }
</script>