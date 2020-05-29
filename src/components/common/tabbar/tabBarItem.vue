<template>
	<div class='tabbar-item'>
		<div @click="itemActive" v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'tabBarItem',
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'#000'
			}
		},
		mounted(){
			//console.log(this.path)
		},
		data(){
			return{
				//isActive:false
			}
		},
		computed:{
			isActive(){
				//console.log(this.$route.path,this.path)
				return this.$route.path.indexOf(this.path)!=-1
			},
			activeStyle(){
				return this.isActive ? {color:this.activeColor} : {}
			}
		},
		methods:{
			itemActive(){
				//console.log(this.path)
				//return
				if(this.path==this.$route.path) return
				this.$router.push(this.path)
			}
		}
	}
</script>

<style scoped>
	.tabbar-item{
		flex:1;
		text-align:center;
		height:49px;
		color:#999;
	}
	.tabbar-item img{
		width:24px;
		height:24px;
		vertical-align: middle;/*图片下面又有3px*/
	}
	.active{
		color:#333;
	}
	
</style>