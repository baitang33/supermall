import {request,requestGoods} from './request'
export function getHomeMultidata(){
	return request({
		url:'/home/multidata'
	})
}
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
export function getGoods(page){
	console.log("getGoods page",`/json/goods${page}.json`)
	return requestGoods({
		url:`/json/goods${page}.json`
	})
}
