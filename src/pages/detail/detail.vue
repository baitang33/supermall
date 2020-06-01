<template>
<div id="detail">
	<detail-nav-bar :currentIndex="currentIndex" @titleClick="titleClick" class='detail-nav-bar'/>
	<scroll class="detialScroll" ref="scroll" @scrollPos="scrollPos" :probeType="3">
		<detail-swiper class="topImage" :topImage="topImage"></detail-swiper>
		<div>{{$store.state.cartList}}</div>
		<detail-goods-info></detail-goods-info>
		<detail-image ref="imageList" @detailImageLoad="detailImageLoad"></detail-image>
		<detail-shop-info></detail-shop-info>
		<detail-info></detail-info>
		<goods-list ref="goodsList" pathTo="detail" :goods="showGoodsList" :currentType="currentType"></goods-list>
		<div v-for='item in 100' :key="'_'+item">ddddddd</div>
		<div ref="otherList"><div v-for="item in 100" :key="item+'_'">2222</div></div>
	</scroll>
	<back-top v-show="backTopRes" @click.native="backTopBtn"></back-top>
	<detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
</div>
</template>

<script>
	import DetailNavBar from './childComps/detailNavBar'
	import DetailSwiper from './childComps/detailSwiper'
	import DetailGoodsInfo from './childComps/detailGoodsInfo'
	import DetailShopInfo from './childComps/detailShopInfo'
	import DetailInfo from './childComps/detailInfo'
	import DetailImage from './childComps/detailImage'
	import DetailBottomBar from './childComps/detailBottomBar'
	
	import {questDetail,Goods,Shop} from '@/network/detail'
	
	import GoodsList from '@/components/content/goods/goodsList'
	
	import Scroll from '@/components/common/scroll/scroll'
	
	
//	import {getGoods} from '../../network/home'
	
	import {itemListenerMixin,debounce,backTopMixin} from '@/common/mixin'
//	const locUrl=`https://shop.mogu.com/detail/1kh74ra?itemId=1kh74ra&acm=3.ms.1_4_1kh74ra.
//	84.36607-93769-68998.jMfkas0ytLwHc.sd_117-swt_84-imt_6-t_jMfkas0ytLwHc-lc_16-fcid
//	_50223-pid_9-pit_1-dit_169-mf_54262_729760&ptp=31.GrPvGb.0.0.un36WfSU`

	export default{
		name:'detail',
		data(){
			return{
				id:null,
				topImage:[],
				othergoods:{},
				shop:{},
				detailInfo:{},
				goods:{
          'pop': {page: 0, list: [],end:0}
        },
        currentType: 'pop',
        currentIndex:0,
        themeTopYs:[],
        getThemeTopY:null
			}
		},
		updated(){
		
		},
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailGoodsInfo,
			DetailImage,
			DetailBottomBar,
			DetailShopInfo,
			DetailInfo,
			Scroll,
			GoodsList
		},
		computed:{
			showGoodsList(){
				return this.goods[this.currentType].list
			}
		},
		mixins:[itemListenerMixin,backTopMixin],
		mounted(){
			this.$nextTick(()=>{
				console.log("this.$nextTick mounted")
				this.getThemeTopY()
			})
		},
		destroyed(){
			console.log('destroyed')
			this.$bus.$off("imageGoodsItem",this.homeItemListenser)
		},
		created(){
			this.id=this.$route.query.id
			//console.log('this.id',this.id)
			questDetail(this.id).then((res)=>{
				//console.log('res',res)
				const data=res.data
				this.topImage=data.itemInfo.topImage
				this.othergoods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				//console.log('this.goods',this.goods,this.goods.title)
				this.shop=new Shop(data.shopInfo)
				this.detailInfo=data.detailInfo
				
			}).catch((err)=>{
				console.log('err',err)
			})
			this.getGoods('pop')
			this.getThemeTopY=debounce(()=>{
				let offTop=[
					0,
					this.$refs.imageList.$el.offsetTop,
					this.$refs.goodsList.$el.offsetTop,
					this.$refs.otherList.offsetTop
				]
				this.themeTopYs=[...offTop]
				console.log('this.themeTopYs',this.themeTopYs)
			})
		},
		methods:{
			detailImage(){
				console.log("detailImage")
			},
			titleClick(index){
				console.log("titleClick",index)
				this.$refs.scroll.backTop(0,-this.themeTopYs[index],0)
			},
			detailImageLoad(){
				this.refresh()
				this.$nextTick(()=>{
					console.log("this.$nextTick detailImageLoad")
					this.getThemeTopY()
				})
			},
			scrollPos(pos){
				let y=Math.abs(pos.y)
				this.backTopRes=y>500 ? true : false
				var len=this.themeTopYs.length
				for(let i in this.themeTopYs){
					i=parseFloat(i)
					if(this.currentIndex!=i && ((i<len-1 && y>this.themeTopYs[i] && y<this.themeTopYs[i+1]) ||
					(i==len-1 && y>this.themeTopYs[i]))){
						this.currentIndex=i
					}
				}
			},
			addCart(){
				let addGoods={
					'image':'https://s5.mogucdn.com/mlcdn/c45406/191208_5e70jdbhhkilfd4hfh7446kbbkce5_790x1109.jpg_468x468.webp',
					'title':'5支装coco小黑裙许愿精灵女士香水持久淡香清新学生香水正品',
					'desc':'活动价',
					'num':1,
					'price':333.00,
					'id':this.id,
					'checkRes':true
				}
				//console.log('addCart',addGoods)
				this.$store.dispatch('pushCartList',addGoods)
			}
		}
	}
</script>

<style scoped>
	#detail{
		height:100vh;
	}
	.detail-nav-bar{
		position:relative;
		z-index:9;
		background:#fff;
	}
	.detialScroll{
		overflow:hidden;
		height: calc( 100vh - 93px);
		width:100%;
		position:relative;
		z-index:10;
		background:#fff;
	}
	/*.topImage{
		height:300px;
		overflow:hidden;
	}*/
</style>