<template>
	<div id="home">
		<nav-bar class='home-nav'></nav-bar>
		<home-swiper :banners='list'></home-swiper>
		<recommend-view :recommends='recommends'></recommend-view>
		<!--<feature-view :></feature-view>-->
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/navbar'
	import {getHomeMultidata} from '../../network/home'
	import HomeSwiper from './childComps/HomeSwiper'
	import RecommendView from './childComps/RecommendView'
//	import FeatureView from './childComps/test'
	export default{
		name:'home',
		data(){
			return {
				banners:null,
				recommends:null,
				dKeywords:null,
				keywords:null,
				list:null
			}
		},
		components:{
			NavBar,
			HomeSwiper,
			RecommendView,
//			FeatureView
		},
		created(){
			getHomeMultidata().then(res=>{
				console.log('getHomeMultidata',res)
				const data=res.data
				this.banners=data.banner;
				this.recommends=data.recommend.list
				this.keywords=data.keywords
				this.dKeywords=data.dKeyword
				this.list=this.banners.list
				console.log('recommends',this.recommends)
			}).catch(err=>{
				console.log('getHomeMultidata',err)
			})
		},
		methods:{
			contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
      },
		}
	}
</script>

<style scoped>
	.home-nav{
		background-color:var(--color-tint);
		color:#fff;
	}
	.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>