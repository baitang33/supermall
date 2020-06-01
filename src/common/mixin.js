import {debounce} from './utlis.js'
import {getHomeMultidata,getGoods} from '@/network/home'
import BackTop from '@/components/content/backTop/backTop'
console.log(BackTop)
//			const refresh=debounce(this.$refs.scroll.refresh,500)
//			this.homeItemListenser=()=>{
//				refresh()
//			}
//console.log("refresh",refresh,this.$refs.scroll.refresh)
//this.$bus.$on('imageGoodsItem',()=>{
		//refresh()
//})
//this.$bus.$on('imageGoodsItem',this.homeItemListenser)
export const itemListenerMixin={
	data(){
		return {
			homeItemListenser:null,
			refresh:null,
			goods: {
        'pop': {page: 0, list: [],end:0},
        'new': {page: 0, list: [],end:0},
        'sell': {page: 0, list: [],end:0},
     },
		}
	},
	mounted(){
		this.refresh=debounce(this.$refs.scroll.refresh,500)
		this.homeItemListenser=()=>{
			this.refresh()
		}
		this.$bus.$on('imageGoodsItem',this.homeItemListenser)
	},
	methods:{
		getGoods(type=this.currentType){
			if(this.goods[type].end==1) return
			this.goods[type].page+=1
			getGoods(this.goods[type].page).then(res=>{
				const goodsData=res.data
				if(goodsData[type].length<12){
					this.goods[type].end=1
				}
				this.goods[type].list.push(...goodsData[type])
				
			}).catch(err=>{
				console.log(err)
			})
		}
	}
}
export const backTopMixin={
	data(){
		return {
			backTopRes:false
		}
	},
	components:{
		BackTop
	},
	methods:{
		backTopBtn(){
			console.log("backTopBtn")
			this.$refs.scroll.backTop(0,0,400)
		},
	}
}
console.log(backTopMixin)
export {debounce,getHomeMultidata}
