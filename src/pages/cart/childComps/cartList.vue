<template>
	<div>
		<div v-for="(item,index) in cartList" :key="item+'_'+index">
			<cart-list-item :cartListItem="item"></cart-list-item>
		</div>
	</div>
</template>

<script>
	import CartListItem from './cartListItem'
	export default{
		name:'CartList',
		props:{
			cartList:{
				type:Array,
				default(){
					return []
				}
			},
			len:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		created(){
			console.log("childComps-cartList",this.cartList)
		},
		components:{
			CartListItem
		},
		methods:{
			
		}
	}
</script>

<style scoped>
</style>