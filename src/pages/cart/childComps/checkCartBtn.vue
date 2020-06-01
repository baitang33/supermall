<template>
	<div>
		<img :class="{active:checkRes}" class="tickImg" src="../../../assets/img/cart/tick.svg" alt=''/>
	</div>
</template>

<script>
	export default{
		name:'CheckCartBtn',
		props:{
			checkRes:{
				type:Boolean,
				default(){
					return 0
				}
			}
		}
	}
</script>

<style scoped>
	.tickImg{
		width:16px;
		height:16px;
	}
	.active{
		background:red;
	}
</style>