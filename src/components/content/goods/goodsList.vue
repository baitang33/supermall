<template>
	<div class="goods">
		<goods-list-item v-for="(item,index) in goods" :key="currentType+item.name+item.image+index" :goodsItem="item" />
	</div>
</template>

<script>
	import GoodsListItem from './goodsListItem'
	export default{
		name:'GoodsList',
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			},
			currentType:{
				type:String,
				default(){
					return ''
				}
			}
		},
		components:{
		GoodsListItem
		}
	}
</script>

<style scoped>
.goods{
	width:100%;
	display:flex;
	flex-wrap:wrap;
	justify-content: space-around;
}
</style>