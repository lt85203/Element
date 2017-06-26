import Vue from 'vue';
import Router from 'vue-router';
import content1 from '../components/Route/content1.vue';
import content2 from '../components/Route/content2.vue';
import content3 from '../components/Route/content3.vue';
Vue.use(content1);
Vue.use(content2);
Vue.use(content3);
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'content1',
      component: content1
    },
    {
      path: '/content1',
      name: 'content1',
      component: content1
    },
    {
      path: '/content2',
      name: 'content2',
      component: content2
    },
    {
      path: '/content3',
      name: 'content3',
      component: content3
    }
  ]
});
