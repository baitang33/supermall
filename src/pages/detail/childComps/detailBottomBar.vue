<template>
	<div class="bottom-bar">
		<div>店铺</div>
		<div>收藏</div>
		<div>客服</div>
		<div @click="addCart" class="addCart">加入购物车</div>
		<div class="pay">购买</div>
	</div>
</template>

<script>
	export default{
		name:'DetailBottomBar',
		methods:{
			addCart(){
				this.$emit('addCart')
			}
		}
	}
</script>

<style scoped>
	.bottom-bar{
		height:49px;
		line-height:49px;
		position:fixed;
		left:0;
		bottom:0;
		width:100%;
		z-index:10;
		display:flex;
		background:#f6f6f6;
		text-align:center;
	}
	.bottom-bar div{
		flex:1;
	}
	.addCart{
		background:orange;
	}
	.pay{
		background:#FF5777;
		color:#fff;
	}
</style>