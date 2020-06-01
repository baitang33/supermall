import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () => import('../pages/home/home.vue')
const Category = () => import('../pages/category/category')
const Cart = () => import('../pages/cart/cart')
const Profile = () => import('../pages/profile/profile')
const Detail = () => import('../pages/detail/detail')
const routes=[
	{
    path: '',
    redirect: '/home'
  },
	{
		path:'/home',
		meta:{
			title:'首页'
		},
		component:Home
	},
	{
		path:'/profile',
		meta:{
			title:'我的'
		},
		component:Profile
	},
	{
		path:'/cart',
		meta:{
			title:'购物车'
		},
		component:Cart
	},
	{
		path:'/category',
		meta:{
			title:'分类'
		},
		component:Category
	},
	{
		path:'/detail',
		component:Detail
	}
]
const router=new Router({
	routes,
	mode:'history'
})
export default router
