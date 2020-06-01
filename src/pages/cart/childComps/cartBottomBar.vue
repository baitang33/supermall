<template>
	<div class="cart-bottom-bar">
		<div class="item-selector" @click="checkClick">
			<check-cart-btn :checkRes="checkRes" class="checkCartBtn"></check-cart-btn>
			<span>全选</span>
		</div>
		<div>&yen;{{totalPrice}}</div>
		<div class='calculate'>去计算:{{checkLength}}</div>
	</div>
</template>

<script>
	import CheckCartBtn from './checkCartBtn'
	export default{
		name:'CartBottomBar',
		data(){
			return{
				checkRes:false
			}
		},
		computed:{
			totalPrice(){
				return this.$store.state.cartList.filter(item=>{
					return item.checkRes
				}).reduce((preVal,item)=>{
					return item.price*item.num+preVal
				},0).toFixed(2)
			},
			checkLength(){
				return this.$store.state.cartList.filter(item=>item.checkRes).length
			}
		},
		components:{
			CheckCartBtn
		},
		methods:{
			checkClick(){
				
			}
		}
	}
</script>

<style scoped>
.cart-bottom-bar{
	bottom:49px;
	position:fixed;
	left:0;
	width:100%;
	background:#f9f9f9;
	height:40px;
	display:flex;
	line-height:40px;
}
.cart-bottom-bar>div{
}
.item-selector{
	width:70px;
	display:flex;
	justify-content:center;
	align-items:center;
}
.checkCartBtn{
	width:20px;
	height:20px;
	border-radius:100%;
	border:2px solid #f5f5f5;
	overflow:hidden;
	margin-right:5px;
}
</style>