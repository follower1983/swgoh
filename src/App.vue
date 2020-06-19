<template>
  <div id="app">
    <modal v-if="showModal" @close="showModal = false"></modal>
    <div class="bg-wrapper">
      <div class="bg" v-parallax.modifier="0.5"></div>
    </div>
    <div class="site">
      <header>
        <div class="container">
          <div class="row">
            <div class="col-xl-12 more-pad">
              <router-link class="logo" to="/">
                SWGOH
                <div class="logo__description">
                  <span>HOARD</span><br>ACCOUNTS
                </div>
              </router-link>
            </div>
            <div class="col-xl-12 more-pad d-flex justify-content-sm-between nav-wrap">
              <ul class="nav">
                <router-link tag="li" class="nav-item" to="/" active-class="active" exact>
                  <a>Home</a>
                </router-link>
                <router-link tag="li" class="nav-item" to="/accounts" active-class="active">
                  <a>Accounts</a>
                </router-link>
              </ul>
              <button class="button button-main button-discord" @click="showModal = true">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" version="1.1">
                  <path d="M40 12s-4.586-3.59-10-4l-.488.977C34.406 10.176 36.652 11.89 39 14c-4.047-2.066-8.04-4-15-4-6.96 0-10.953 1.934-15 4 2.348-2.11 5.02-4.016 9.488-5.023L18 8c-5.68.535-10 4-10 4s-5.121 7.426-6 22c5.16 5.953 13 6 13 6l1.64-2.184C13.856 36.848 10.716 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.855 4.848-8.64 5.816L33 40s7.84-.047 13-6c-.879-14.574-6-22-6-22zM17.5 30c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4zm13 0c-1.934 0-3.5-1.79-3.5-4s1.566-4 3.5-4 3.5 1.79 3.5 4-1.566 4-3.5 4z" fill="#8C9EFF" id="surface1"/>
                </svg>
                CONTACTS</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="fadeOut">
          <router-view></router-view>
        </transition>
      </main>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              &copy; Sorvi, {{ date }}
            </div>
            <div class="col-md-6 text-align-right">
              All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>
<script>

import {mapActions} from 'vuex'
import Modal from './components/Modal'

export default {
    name: 'App',
    data: () => ({
      date: new Date().getFullYear(),
      showModal: false
    }),
    components:{
      Modal
    },
    methods:{
        ...mapActions(['fetchItems']),
        getIdFromUrl(){
            let url = document.location.pathname.substr(16)
            // eslint-disable-next-line no-console
            // console.log(url)
            return url;
        },
      getLog(){
          // eslint-disable-next-line no-console
          // console.log()
      },
    },
    created(){
        this.getLog();
    },
    async mounted () {
        this.fetchItems()
    }
}
</script>
<style lang="scss">
    @import "scss/_main.scss";
</style>
