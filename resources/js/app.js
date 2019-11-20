window.Vue = require('vue');

window.axios = require('axios');

Vue.component('follow-button', require('./components/FollowButton.vue').default);


const app = new Vue({
    el: '#app',
});
