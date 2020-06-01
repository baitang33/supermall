import {requestGoods} from './request'

export function questDetail(id){
	return requestGoods({
		url:'/json/detail/detail.json',
		params:{
			id
		}
	})
}
export class Goods{
	constructor(itemInfo,columns,services){
		//console.log(itemInfo,columns,services)
		this.title=itemInfo.title
		this.desc=itemInfo.desc
		this.newPrice=itemInfo.price
		this.oldPrice=itemInfo.oldPrice
		this.discount=itemInfo.discountDesc
		this.columns=columns
		this.services=services
		this.realPrice=itemInfo.lowlowPrice
	}
}
export class Shop{
	constructor(shopInfo){
		this.logo=shopInfo.shopLogo
		this.name=shopInfo.name
		this.fans=shopInfo.cFans
		this.sells=shopInfo.cSells
		this.score=shopInfo.score
		this.goodsCount=shopInfo.cGoods
	}
}
