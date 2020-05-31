<template>
	<div id="home">
		<nav-bar class='home-nav'></nav-bar>
		<scroll :probe-type='3' :pull-up-load='true' ref="scroll" class="content" 
			@scrollPos='scrollPos' @pullMore="pullMore">
			<home-swiper :banners='list'></home-swiper>
			<recommend-view :recommends='recommends'></recommend-view>
			<feature-view></feature-view>
			<tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" class="tab-control"></tab-control>
			<goods-list :goods="showGoodsList" :currentType="currentType"></goods-list>
		</scroll>
		<back-top v-show="backTopRes" @click.native="backTopBtn"></back-top>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/navbar'
	import Scroll from '@/components/common/scroll/scroll'
	import TabControl from '@/components/content/tabControl/tabControl'
	import GoodsList from '@/components/content/goods/goodsList'
	import BackTop from '@/components/content/backTop/backTop'
	
	import {getHomeMultidata,getGoods} from '../../network/home'
	
	import HomeSwiper from './childComps/HomeSwiper'
	import RecommendView from './childComps/RecommendView'
	import FeatureView from './childComps/test'
	
	export default{
		name:'home',
		data(){
			return {
				banners:null,
				recommends:null,
				dKeywords:null,
				keywords:null,
				list:null,
				goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        backTopRes:false,
			}
		},
		components:{
			NavBar,
			Scroll,
			TabControl,
			GoodsList,
			BackTop,
			HomeSwiper,
			RecommendView,
			FeatureView
		},
		created(){
			this.getHomeMultidata();
			this.getGoods('pop');
			this.getGoods('new');
			this.getGoods('sell');
		},
		computed:{
			showGoodsList(){
				return this.goods[this.currentType].list
			}
		},
		methods:{
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					const data=res.data
					this.banners=data.banner;
					this.recommends=data.recommend.list
					this.keywords=data.keywords
					this.dKeywords=data.dKeyword
					this.list=this.banners.list
				}).catch(err=>{
					console.log('getHomeMultidata',err)
				})
			},
			getGoods(type=this.currentType){
				this.goods[type].page+=1
				console.log(type,this.goods[type].page,this.currentType)
				getGoods(this.goods[type].page).then(res=>{
					//console.log(res)
					if(!res.data) return
					const goodsData=res.data
					this.goods[type].list.push(...goodsData[type])
					//console.log(type,this.goods[type])
//					Object.keys(goodsData).forEach(key=>{
//						console.log(key,goodsData[key])
//						this.goods[`${key}`].page+=1
//						this.goods[`${key}`].list.push(...goodsData[key])
//					})
//					console.log(this.goods)
				}).catch(err=>{
					console.log(err)
				})
			},
			tabClick(index){
				console.log(index)
				switch(index){
					case 0:
						this.currentType='pop'
						break
					case 1:
						this.currentType='new'
						break
					default:
						this.currentType='sell'
				}
			},
			backTopBtn(){
				console.log("backTopBtn")
				this.$refs.scroll.backTop(400)
			},
			scrollPos(pos){
				this.backTopRes=Math.abs(pos.y)>500 ? true : false
			},
			pullMore(){
				console.log("可以开始加载了")
				this.getGoods();
				this.$refs.scroll.finishPull();
			}
		}
	}
</script>

<style scoped>
	#home{
		padding-top:44px;
		height:100vh;
	}
	.home-nav{
		background-color:var(--color-tint);
		color:#fff;
		position:fixed;
		left:0;
		right:0;
		top:0;
		z-index:9;
	}
	.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    background:#fff;
  }
  .content{
		overflow:hidden;
		width:100%;
		height: calc(100% - 98px);
	}
</style>