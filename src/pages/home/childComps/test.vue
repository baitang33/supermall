<template>
	<div class="recommeds">
		<div class="recommeds-item" v-for="item in recommends" :key="item.title+item.image">
			<a :href="item.link">
				<img :src="item.image" alt=''/>
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'RecommendView',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommeds{
		display:flex;
		/*flex-wrap:nowrap;*/
		width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
	}
	.recommeds a{
		display:block;
	}
	.recommeds-item{
		flex:1;
	}
	.recommeds-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>