import router from './router';
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'// progress bar style
// import store from './store'



router.beforeEach((to, from, next) => {
    if (to.meta.needLogin) {  // 判断该路由是否需要登录权限
        // if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        // }
        // else {
        //     next({
        //         path: '/login',
        //         // query: {needLogin: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //     })
        // }
    }
    else {
        // next();
        next({
                    path: '/login',
                    // query: {needLogin: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
    }
})



// router.afterEach(() => {
//     NProgress.done() // finish progress bar
// })