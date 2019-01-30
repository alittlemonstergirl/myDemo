import Vue from 'vue'
import Router from 'vue-router'
//首页
const homePage = r => require.ensure([], () => r(require('./components/homePage')), 'homePage')
//个人信息
const myInfo = r => require.ensure([], () => r(require('./components/myInfo')), 'myInfo')
// 添加地址
const addAddress = r => require.ensure([], () => r(require('./components/addAddress')), 'addAddress')
//我的订单
const myOrder = r => require.ensure([], () => r(require('./components/myOrder')), 'myOrder')
// const myEchart = r => require.ensure([], () => r(require('./components/myEchart')), 'myEchart')
const login = r => require.ensure([], () => r(require('./components/login')), 'login')
Vue.use(Router)

function newRouterFun() {
    const newRouter = new Router({
        routes: [{
            path: '/homePage',
            name: 'homePage',
            component: homePage,
            meta: {
                title: '首页'
            },
        }, {
            path: '/myInfo',
            name: 'myInfo',
            component: myInfo,
            meta: {
                title: '个人中心'
            }
        }, {
            path: '/addAddress',
            name: 'addAddress',
            component: addAddress,
            meta: {
                title: '添加地址'
            }
        }, {
            path: '/myOrder',
            name: 'myOrder',
            component: myOrder,
            meta: {
                title: '我的订单'
            }
        },
        //  {
        //     path: '/myEchart',
        //     name: 'myEchart',
        //     component: myEchart,
        //     meta: {
        //         title: '我的图表'
        //     }
        // },
        {
            path: '/',
            name: 'login',
            component: login,
            meta: {
                title: '登录'
            }
        }]
    });
    return newRouter;
}
export default newRouterFun

/*必配 start*/
// newRouter.afterEach(function (route, redirect, next) {
//   try {
//     _.initializedData(); //初始化配置数据
//   } catch (e) {

//   }
// });
// export default newRouter;