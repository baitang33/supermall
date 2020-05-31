<template>
	<div>
		<scroll class="category-wrapper" :probe-type='0' :pull-up-load='false'>
			<div>
				<button @click="btnClick">button</button>
				<h1 v-for="item in 100" :key="item">category</h1>
			</div>
		</scroll>
	</div>
</template>

<script>
	import Scroll from '@/components/common/scroll/scroll'
	export default{
		name:'category',
		data(){
			return{
				scroll:null,
			}
		},
		mounted(){
			
		},
		components:{
			Scroll
		},
		methods:{
			btnClick(){
				console.log(12)
			},
			onScroll(pos){
				console.log(pos)
			}
		}
	}
</script>

<style scoped>
	.category-wrapper{
		height: calc(100vh - 98px);
		background:blue;
		color:#fff;
	}
</style>