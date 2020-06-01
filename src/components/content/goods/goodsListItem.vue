<template>
	<div class="goods-item" @click="itemClick(goodsItem.id)">
		<img :src="goodsItem.image" @load="imageLoad"/>
		<div class="goods-item-main">
			<p class="goods-item-content">{{goodsItem.name}}</p>
			<div class="goods-item-p-btn left">售价</div><div class='left'>&yen;{{goodsItem.price}}</div>
			<div class='right collect'>{{goodsItem.sell}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'GoodsListItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imageLoad(){
				this.$bus.$emit('imageGoodsItem')
//				if(this.$route.path.includes('/home')){
//					this.$bus.$emit('imageGoodsItem')
//				}else{
//					this.$bus.$emit('detailImage')
//				}
			},
			itemClick(id){
				console.log('itemClick')
				this.$router.push({
					path:'/detail',
					query:{
						id
					}
				})
			}
		}
	}
</script>

<style scoped>
	.goods-item{
		flex:1;
		width:48%;
		/*display:flex;*/
		/*flex-direction:column;
		align-items:center;*/
		box-sizing:border-box;
		-webkit-box-sizing:border-box;
		-moz-box-sizing:border-box;
	}
	.goods-item:nth-child(odd){
		padding:0 10px 20px 16px;
	}
	.goods-item:nth-child(even){
		padding:0 16px 20px 10px;
	}
	.goods-item-main{
		width:100%;
		line-height:22px;
		overflow:hidden;
	}
	.goods-item img{
		/*width:190px;*/
		max-width:100%;
		justify-content:center;
	}
	.goods-item-content{
		width:100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-bottom:10px;
		margin-top:10px;
	}
	.goods-item-p-btn{
		width:40px;
		height:20px;
		line-height:20px;
		color: #FFBC49;
    border: 1px solid #FFBC49;
		font-size:12px;
		margin-right:10px;
		text-align:center;
	}
	.goods-item-main .collect{
		position:relative;
	}
	.goods-item-main .collect:before {
   content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    transform:translateY(-50%);
  }
</style>