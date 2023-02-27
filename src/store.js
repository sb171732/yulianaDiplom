import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        notes: [],
        users: [],
        current_user:{
          fio:'',
          login:''
        }
    },
    mutations: {
        ...vuexfireMutations,
       getUserInfo(state,user){
            state.user = user
       },
       addCart(state,tovar){
            state.shopCart.push(tovar)
       },
       updateCurr_user(state,{fio, login}){
            state.current_user.fio = fio
            state.current_user.login = login
       }
    },
    actions: {
        bindNotes: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('notes', db.collection('up-list'))
        }),
        bindUsers: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('users', db.collection('users'))
        }),
       
        Shopping: ({commit}, payload) => {
            commit('addCart',payload);  
          // return db.collection('notes').add(payload)
        },
        addNote: firestoreAction((context, payload) => {
            return db.collection('notes').add(payload)
        }),
        addRezults: firestoreAction((context, payload) => {
            return db.collection('rezult').add(payload)
        }),
        addTestFio: firestoreAction((context, payload) => {
            return db.collection('rezfio').add(payload)
        }),
        addTovarKraski: firestoreAction((context, payload) => {
            return db.collection('tovar').add(payload)
        }),
        deleteFromTovar: firestoreAction((context, payload) => {
            db.collection('tovar')
                .doc(payload)
                .delete()
        }),
        updateFromTest: firestoreAction((context, {id, doc}) => {
            db.collection('test')
                .doc(id)
                .update(doc)
        }),
        updateCurrentUser({commit}, {fio, login}) {
            commit('updateCurr_user',{fio, login})
        },
        getLoginStatus({commit}){
            let vm = this
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                vm.user = user
                commit('getUserInfo',user)
                console.log("// User is signed in by Phone Number : ", user.phoneNumber)
              } else {
                vm.user = null
                console.log("// No user is signed in.")
              }
            });
       },
       initFirebase(){
        //  const firebaseApp =
          firebase.initializeApp({
            apiKey: "AIzaSyDHMHihtTWR1ShKbnvvfSiXgYW9-6hmLlk",
            authDomain: "webchat-3ed4d.firebaseapp.com",
            projectId: "webchat-3ed4d",
            storageBucket: "webchat-3ed4d.appspot.com",
            messagingSenderId: "478078899146",
            appId: "1:478078899146:web:eca874fb95f70ee5293533"
          });
        },
    }
})

store.dispatch('bindNotes')
store.dispatch('bindUsers')
