<template>
	<div id="home">
		<nav-bar class='home-nav'/>
		<tab-control v-show="isTabFixed" :class="{fixed:isTabFixed}" ref="tabControl1" 
				@tabClick="tabClick" :titles="['流行','新款','精选']" class="tab-control"></tab-control>
		<scroll :probe-type='3' :pull-up-load='true' ref="scroll" class="content" 
			@scrollPos='scrollPos' @pullMore="pullMore">
			<home-swiper  @imgTabOffsetTop="imgTabOffsetTop" :banners='list'></home-swiper>
			<recommend-view :recommends='recommends'></recommend-view>
			<feature-view></feature-view>
			<tab-control ref="tabControl2" @tabClick="tabClick" :titles="['流行','新款','精选']"></tab-control>
			<goods-list pathTo="home" :goods="showGoodsList" :currentType="currentType"></goods-list>
		</scroll>
		<back-top v-show="backTopRes" @click.native="backTopBtn"></back-top>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/navbar'
	import Scroll from '@/components/common/scroll/scroll'
	import TabControl from '@/components/content/tabControl/tabControl'
	import GoodsList from '@/components/content/goods/goodsList'
	
	import HomeSwiper from './childComps/HomeSwiper'
	import RecommendView from './childComps/RecommendView'
	import FeatureView from './childComps/test'
	
//	import {debounce} from '@/common/utlis.js'
	import {itemListenerMixin,getHomeMultidata,backTopMixin} from '@/common/mixin'
	
	export default{
		name:'home',
		data(){
			return {
				banners:null,
				recommends:null,
				dKeywords:null,
				keywords:null,
				list:null,
        currentType: 'pop',
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
			}
		},
		activated(){
			console.log('activated',this.saveY)
			this.$refs.scroll.backTop(0,this.saveY,0)
			this.$refs.scroll.refresh()
			//this.$refs.scroll.scrollTo(0,this.saveY,0)
		},
		deactivated(){
			console.log("deactivated",this.$refs.scroll.scroll.y)
			this.saveY=this.$refs.scroll.scroll.y
			//新增加的
			this.$bus.$off("imageGoodsItem",this.homeItemListenser)
			console.log("deactivated",this.saveY)
		},
		destroyed(){
			console.log("destroyed")
		},
		components:{
			NavBar,
			Scroll,
			TabControl,
			GoodsList,
			HomeSwiper,
			RecommendView,
			FeatureView
		},
		created(){
			this.getHomeMultidata()
			this.getGoods('pop')
			this.getGoods('new')
			this.getGoods('sell')
		},
		mounted(){
		},
		mixins:[itemListenerMixin,backTopMixin],
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
			tabClick(index){
				//console.log(index)
				if(this.$refs.tabControl1.currentIndex!=undefined){
					this.$refs.tabControl1.currentIndex=index
					this.$refs.tabControl2.currentIndex=index
				}
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
			scrollPos(pos){
				const y=Math.abs(pos.y)
				//返回页面顶部
				this.backTopRes=y>500 ? true : false
				//吸顶isTabFixed
				this.isTabFixed=y>=this.tabOffsetTop ? true : false
			},
			pullMore(){
				console.log("可以开始加载了")
				this.getGoods();
				this.$refs.scroll.finishPull();
			},
			imgTabOffsetTop(){
				//所有的组件都有一个属性 $el，是用于获取组件中的元素的
				console.log(this.$refs.tabControl2.$el.offsetTop)
				this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
			}
		}
	}
</script>

<style scoped>
	#home{
		/*padding-top:44px;*/
		height:100vh;
	}
	.home-nav{
		background-color:var(--color-tint);
		color:#fff;
		width:100%;
		/*position:fixed;
		left:0;
		right:0;
		top:0;
		z-index:9;*/
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
   /*	position:relative;*/
    background:#fff;
    position:relative;
    /*position: sticky;*/
  }
  .content{
		overflow:hidden;
		width:100%;
		height: calc(100% - 98px);
	}
	.fixed{
		position:fixed;
		left:0;
		top:43px;
		right:0;
	}
</style>