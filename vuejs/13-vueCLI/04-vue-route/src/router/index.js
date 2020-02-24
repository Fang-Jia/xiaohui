import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 路由的懒加载方式
const HomeNews = () => import('../components/HomeNews');
const HomeMessaage = () => import('../components/HomeMessage');
const home = () => import('../components/Home');
const about = () => import('../components/About');
const user = () => import('../components/User');
const Profile = () => import('../components/Profile');

//调用Vue的use方法，来注册插件 use(插件)
Vue.use(Router);

const route =  new Router({
  // 该routes数组 存储的是路由和url的映射关系
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
        title: '首页'
      },
      component: HelloWorld
    },
    {
      path: '/home',
      meta: {
        title: '主页'
      },
      component: home,
      children: [
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessaage
        }
      ]
    },
    {
      path: '/about',
      meta: {
        title: '关于'
      },
      component: about
    },
    {
      path: '/user/:userid',
      meta: {
        title: '用户'
      },
      component: user
    },
    {
      path: '/profile',
      meta: {
        title: '档案'
      },
      component : Profile
    }
  ],
  mode: 'history'
})

//  通过调用导航守卫方法，来使每个网页显示不同的标题
//  to: 即将要进入的目标的路由对象
//  from: 当前导航即将要离开的路由对象.
//  next: 调用该方法后, 才能往下执行
  route.beforeEach((to, from, next) => {
  window.document.title = to.matched[0].meta.title;
  next()
});

export default route
