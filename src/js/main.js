/* eslint-disable import/first */
/* We disabled eslint import first for main.js in order to make Vue.use follow import of module */

import Vue from 'vue'
Vue.config.productionTip = false

import Vuex from 'Vuex'
Vue.use(Vuex)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './routing'

const store = new Vuex.Store({
    modules: {
    },
    state: {
    },
    getters: {
    },
    mutations: {
    },
})

document.addEventListener('DOMContentLoaded', function() {
    return new Vue({
        el: '#app',
        store,
        router,
        components: {
        },
        data: () => {
            return {}
        },
        mounted() {
        },
    })
})
