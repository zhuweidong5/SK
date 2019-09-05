import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '@/views/home/index'
import Product from '@/views/product/index'
import User from '@/views/user/index'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            component: () => import('@/views/errorPage/404'),
        },
        {
            path: '/',
            name: 'home',
            component: HelloWorld,
            meta:{
                title:'首页',
                needLogin:true,
            }
        },
        {
            path: '/product',
            // redirect: '/user', //重定向属性
            // alias: '/user', //重定向别名
            name: 'product',
            component: Product,
            meta:{
                needLogin:false,
                title:'产品'
            }
        },

        {
            path: '/user',
            name: 'user',
            component: User,
            meta:{
                needLogin:true,
                title:'个人'
            },
            children: [
                {
                    path: '/user/foo',
                    name: 'foo',
                    component: () => import('@/views/user/foo/index'),
                    meta:{
                        needLogin:true,
                        title:'个人中心1'
                    }
                },
                {
                    path: '/user/pos',
                    name:'pos',
                    component: () => import('@/views/user/pos/index'),
                    meta:{
                        needLogin:true,
                        title:'个人中心2'
                    }
                },
            ]
        },


        {
            path: '*',
            component: () => import('@/views/errorPage/404'),
        },
        {
            path: '/login',
            component: () => import('@/views/login/index')
        }
    
    ]
})
