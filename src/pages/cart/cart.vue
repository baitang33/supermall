<template>
	<div class='cart'>
		<nav-bar class="nav-bar"><div slot="center">购物车({{len}})</div></nav-bar>
		<scroll class="cart-scroll" ref="scroll">
			<cart-list :cartList='cartList' :len='len'></cart-list>
		</scroll>
		<cart-bottom-bar></cart-bottom-bar>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/navbar'
	import scroll from '@/components/common/scroll/scroll'
	
	import CartList from './childComps/cartList'
	import CartBottomBar from './childComps/cartBottomBar'
	
	import {mapGetters} from 'vuex'
	
	export default{
		name:'cart',
		components:{
			scroll,
			NavBar,
			CartList,
			CartBottomBar
		},
		data(){
			return {
				cartList:[],
				cartLen:0
			}
		},
		computed:{
			...mapGetters({
				list:'getCartList',
				len:'cartListLen'
			})
		},
		created(){
			this.cartList=this.list
			this.cartLen=this.len
			console.log("this.cartList",this.cartList)
		},
	}
</script>

<style scoped>
	.cart{
		height:100vh;
	}
	.nav-bar{
		background-color:var(--color-tint);
		color:#fff;
		width:100%;
	}
	.cart-scroll{
		overflow:hidden;
		background:#fff;
		height: calc(100vh - 137px);
	}
</style>