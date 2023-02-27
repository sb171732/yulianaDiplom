<template>
  <div class="home">
    <el-row class="w3-border-bottom">
      <el-col :span="6"><div class="w3-text-white">s</div></el-col>
      <el-col :span="6"><div class="w3-text-white">s</div> </el-col>
      <el-col :span="6"><div class="w3-text-white">s</div> </el-col>
      <el-col :span="6" class="w3-padding">
         <i class="el-icon-user-solid" style="font-size: xxx-large;"></i>
         <span>User123</span>
      </el-col>
    </el-row>
    
    <el-row>
        <el-col :span="8" class="">
          <div class=" box">
            <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      router
      background-color="#fff"
      text-color="black"
      active-text-color="#ffd04b">
      <el-menu-item index="1" :route="{name:'about', params:{user:'FIO1'}}">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>FIO 1</span>
        </template>
     </el-menu-item>  
      <el-menu-item index="2" :route="{name:'about', params:{user:'FIO2'}}">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>FIO 2</span>
        </template>
     </el-menu-item>  
      <el-menu-item index="3" :route="{name:'about', params:{user:'FIO3'}}">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>FIO 3</span>
        </template>
     </el-menu-item>  
       
     
     
      
    </el-menu>

          </div>
        </el-col>
        <el-col :span="16" class="w3-boder">
          <div class=" box">
             <router-view></router-view>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods:{
    handleOpen(){

    }
  } 
}

</script>
<style>
   .box{
       width:500px;
       height:500px;
   }
</style>