// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import newRouterFun from './router'
import 'lib-flexible/flexible'
import VDistpicker from 'v-distpicker'

Vue.component('v-distpicker', VDistpicker)

Vue.config.productionTip = false

var router = newRouterFun();
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})