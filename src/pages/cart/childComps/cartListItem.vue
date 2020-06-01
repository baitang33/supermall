<template>
	<div class="listHidden">
		<div class="item-selector" @click="checkClick">
			<check-cart-btn :checkRes="cartListItem.checkRes" class="checkCartBtn"></check-cart-btn>
		</div>
		<div class="listLeft"><img class="listImg" :src="cartListItem.image"/></div>
		<div class="listRight">
			<div class='listTitle'>{{cartListItem.title}}</div>
			<div class='listDesc'>{{cartListItem.desc}}</div>
			<div class='listOther'>
				<div class="listPrice">&yen;{{cartListItem.price}}</div>
				<div class="listNum">✖{{cartListItem.num}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CheckCartBtn from './checkCartBtn'
	export default{
		name:"CartListItem",
		components:{
			CheckCartBtn
		},
		props:{
			cartListItem:{
				tpye:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			checkClick(){
				console.log(1222)
				this.cartListItem.checkRes=!this.cartListItem.checkRes;
			}
		}
	}
</script>

<style scoped>
	.listHidden{
		overflow:hidden;
		display:flex;
		justify-content:space-around;
		padding-bottom:10px;
		padding-top:10px;
		border-bottom:2px solid #f5f5f5;
	}
	.item-selector{
		width:20px;
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
	}
	.listImg{
		width:22vw;
	}
	.listRight{
		width:60vw;
	}
	.listTitle{
		font-size:18px;
		color:#333;
		/*padding-top:10px;*/
	}
	.listRight{
		display:flex;
		align-content:space-between;
		flex-wrap:wrap;
	}
	.listRight>div{
		width:100%;
	}
	.listDesc{
		/*padding:10px 0 10px 0;*/
		color:#666;
	}
	.listTitle,.listDesc{
		width:100%;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.listOther{
		display:flex;
		flex-wrap:nowrap;
		align-content:space-between;
	}
	.listOther>div{
		flex:1;
	}
	.listPrice{
		color:rgb(255, 87, 119);
		font-size:16px;
		text-align:left;
	}
	.listNum{
		font-size:#333;
		font-size:14px;
		text-align:right;
	}
</style>