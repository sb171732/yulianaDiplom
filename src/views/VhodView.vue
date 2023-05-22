<template>
    <div class="w3-center">
        <h2>Авторизация</h2>
        <el-select v-model="sel_user">
              <el-option v-for="u of Users" :key="u.id" :value="u.login">{{ u.fio }}</el-option>
        </el-select>
        <el-input id="pass" class="w3-margin-top" v-model="typ_pass" type="password"></el-input>
        <el-button class="w3-margin-top" type="success" @click="login">Войти</el-button>
    </div>
</template>
<script>
import {store} from '../store'
export default {
  name: 'HomeView',
  data(){
    return{
       sel_user:"",
       typ_pass:''
    }
  },
  computed:{
     Users(){ return store.state.users }
  },
  methods:{
    login(){
        if ((this.sel_user!='')&&(this.typ_pass!='')){
             let curr_user = this.Users.filter((n)=>{ return n.login.match(this.sel_user) })   
             if (curr_user[0].pass===this.typ_pass){
                this.$notify({
                    title: 'Внимание!',
                    message: 'Правильно',
                    type: 'success'
                    });
                this.$router.push({name:'about', params:{user:curr_user[0].id}})
                localStorage.setItem('curr_fio', curr_user[0].fio);
                localStorage.setItem('curr_id', curr_user[0].id);
                store.dispatch('updateCurrentUser', curr_user[0].fio)
                // store.dispatch('updateCurrentUser',{ fio: curr_user[0].fio, login: curr_user[0].login  })
             } else {
                
                this.$notify({
                    title: 'Внимание!',
                    message: 'Пароль не вверен!',
                    type: 'warning'
                    });
             }

        } else {
            this.$notify({
                    title: 'Внимание!',
                    message: 'Пользователь не выбран или пароль не введен!',
                    type: 'warning'
                    });
        }
    }
  },
  created(){
      if (localStorage.getItem('curr_fio')!=null){
        this.$router.push({name:'about', params:{user:localStorage.getItem('curr_id')}})
      }
  } 

}
</script>
<style>
   #pass{
    width: 235px;
   }
</style>