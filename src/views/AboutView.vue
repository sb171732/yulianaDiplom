<template>
  <div class="about">
    <el-row>
      <el-col :span="24" class="w3-padding">
        <h3>Сообщения с пользователем {{  $route.params.user }} </h3>
      </el-col>
      <el-row class="w3-padding"> 
          <el-col>
             <el-input v-model="text"></el-input>
             <el-button class="w3-margin-top" plain @click="send">Отправить</el-button>
          </el-col>
      </el-row>
    </el-row>
  
     
  </div>
</template>
<script>
import {store} from '../store'
   export default {
      data(){
        return{
          text:''
        }
      },
      computed:{
        Cur_user(){ return store.state.current_user },
        Users(){
          return store.state.users
        }
      } ,
      methods:{
        send(){
            let cu1 = this.Users.filter((n)=>{ return n.fio.match(this.Cur_user.fio) }) 
            let cu2 = this.Users.filter((n)=>{ return n.fio.match(this.$route.params.user) }) 

            // console.log(cu1[0].id)
            // console.log(cu2[0].id)
            store.dispatch('addMessage', { text: this.text, user_id: cu1[0].id, to_user_id: cu2[0].id })
        }
      }
      }
</script>