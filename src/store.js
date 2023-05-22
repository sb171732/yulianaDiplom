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
        mes: [],
        current_fio:''
        
    },
    mutations: {
        ...vuexfireMutations,
       getUserInfo(state,user){
            state.user = user
       },
       addCart(state,tovar){
            state.shopCart.push(tovar)
       },
       updateCurr_user(state,fio){
            state.current_fio = fio
       }
    },
    actions: {
        bindNotes: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('notes', db.collection('up-list'))
        }),
        bindUsers: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('users', db.collection('users'))
        }),
        bindM: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('mes', db.collection('messages').orderBy('now','asc'))
        }),
       
        Shopping: ({commit}, payload) => {
            commit('addCart',payload);  
          // return db.collection('notes').add(payload)
        },
        addNote: firestoreAction((context, payload) => {
            return db.collection('notes').add(payload)
        }),
        addMessage: firestoreAction((context, payload) => {
            return db.collection('messages').add(payload)
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
        deleteM: firestoreAction((context, payload) => {
            db.collection('messages')
                .doc(payload)
                .delete()
        }),
        updateFromTest: firestoreAction((context, {id, doc}) => {
            db.collection('test')
                .doc(id)
                .update(doc)
        }),
        updateCurrentUser({commit}, fio) {
            commit('updateCurr_user',fio)
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
store.dispatch('bindM')
