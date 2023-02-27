<template>
  <div class="home">
    <el-row class="w3-border-bottom">
      <el-col :span="6"><div class="w3-text-white">s</div></el-col>
      <el-col :span="6"><div class="w3-text-white">s</div> </el-col>
      <el-col :span="6"><div class="w3-text-white">s</div> </el-col>
      <el-col :span="6" class="w3-padding">
         <i class="el-icon-user-solid" style="font-size: xxx-large;"></i>
         <span>Сат Юлияна</span>
      </el-col>
    </el-row>
    
    <el-row>
        <el-col :span="8" class="">
          <div class=" ">
            <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      router
      background-color="#fff"
      text-color="black"
      active-text-color="#ffd04b">
      <el-menu-item v-for="(f,index) in friends" :key="index" :index="index" :route="{name:'about', params:{user:f.fio}}">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>{{ f.fio }}</span>
        </template>
     </el-menu-item>  
     
       
     
     
      
    </el-menu>

          </div>
        </el-col>
        <el-col :span="16" class="w3-boder">
          <div class="">
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
  data(){
     return{
       friends:[
        { fio:'Сат Дан-Хая' },
        { fio:'Монгуш Диана' },
        { fio:'Куулар Айыраа' },
        { fio:'Донгак Айбек' },
        { fio:'Сарыглар Ролан' },
        { fio:'Ооржак Дэвид' },
       ]
     }
  },
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