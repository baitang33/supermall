<template>
<div>
	<nav-bar>
		<div slot="left" class="back" @click="backClick">
			<img src="../../../assets/img/common/back.svg" alt=''/>
		</div>
		<div slot="center" class='title'>
			<!--:class="{active:index==currentIndex}"-->
			<div v-for="(item,index) in title" :class="[index==currentIndex ? 'active' : '']" 
				:key="item+'_'+index" @click="titleBtn(index)">{{item}}</div>
		</div>
	</nav-bar>
</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/navbar'
	export default{
		name:'DetailNavBar',
		components:{
			NavBar
		},
		props:{
			currentIndex:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		data(){
			return{
				title:['商品','参数','评论','推荐']
			}
		},
		methods:{
			titleBtn(index){
				this.currentIndex=index
				this.$emit('titleClick',index)
			},
			backClick(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.title{
		display:flex;
	}
	.title div{
		flex:1;
		font-size:13px;
	}
	.active{
		color:var(--color-high-text);
		position:relative;
	}
	.active:before{
		content:'';
		position:absolute;
		bottom:0px;
		left:20%;
		width:60%;
		background:var(--color-high-text);
		height:2px;
	}
	.back img{
		margin-top:10px;
	}
</style>