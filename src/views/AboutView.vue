<template>
  <div class="about">
    <el-row>
      <el-col :span="24" class="w3-padding">
        <span v-for="u in Users" :key="u.id">
          <h3 v-if="u.id===$route.params.user">Сообщения с пользователем {{ u.fio  }} </h3>
        </span>
        
      </el-col>
      <el-row class="w3-padding"> 
          <el-col class="w3-padding">
            <span v-for="m in getM()" :key="m.id" style="">
                  <p v-if="m.user_id!=$route.params.user" style="text-align: end;">{{ m.text }} <br> 
                   <span style="color: gray; font-size: small;">{{ getDate(m.now) }}</span>   <i style="cursor: pointer;" @click="del(m.id)" class="el-icon-delete-solid"></i>
                  </p>
                  <p v-if="m.user_id===$route.params.user" style="text-align: initial;">{{ m.text }} <br> 
                   <span style="color: gray; font-size: small;">{{ getDate(m.now) }}</span>   <i style="cursor: pointer;" @click="del(m.id)" class="el-icon-delete-solid"></i>
                  </p>
                 
            </span>
             
             <el-input v-model="text" @keyup.enter="send()"></el-input>
             <el-button class="w3-margin-top" plain @click="send">Отправить</el-button>
          </el-col>
      </el-row>
    </el-row>
  
     
  </div>
</template>
<script>
import firebase from 'firebase/app'
import {store} from '../store'
   export default {
      data(){
        return{
          text:''
        }
      },
      computed:{
        Cur_user(){ return localStorage.getItem('curr_fio') },
        Users(){
          return store.state.users
        },
        M(){
          return store.state.mes
        }
        
      } ,
      methods:{
       getDate(date){
        // var d = new Date(date);
        // return d.toDateString()
        return date.toDate()
       },

        getM(){ return this.M.filter((n)=>{ 
          return (n.to_user_id.match(this.$route.params.user))&&(n.user_id.match(localStorage.getItem('curr_id')))||
                  (n.user_id.match(this.$route.params.user))&&(n.to_user_id.match(localStorage.getItem('curr_id')))
        
        }).sort(function(a,b){ return new Date(a.now) - new Date(b.now); });
      
      },
        getUser(id){
          return this.Users.filter((n)=>{ return n.id.match(id)})
        },
        send(){
            let cu1 = localStorage.getItem('curr_id')
            let cu2 = this.$route.params.user
            
            // let now = firebase.firestore.Timestamp.now().seconds
            const t = firebase.firestore.Timestamp.fromDate(new Date());

// Timestamp to Date
            const d = t.toDate();
            console.log(d);
            // console.log(cu1[0].id)
            // console.log(cu2)
            store.dispatch('addMessage', { text: this.text, user_id: cu1, to_user_id: cu2, now:d })
            this.text = ''
        },
        del(id){
             store.dispatch('deleteM',id)
        }
      }
      }
</script>