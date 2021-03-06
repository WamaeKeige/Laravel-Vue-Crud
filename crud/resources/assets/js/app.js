
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Users from './components/Users.vue';
Vue.http.headers.common['X-CSRF-TOKEN']=Laravel.csrfToken;


const app = new Vue({
    el: '#app'
    components:{Users}
});
