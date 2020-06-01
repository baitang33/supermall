import * as types from './mutations-type'
export const actions={
	pushCartList(context,payload){
		let list=context.state.cartList
		let oldList=list.find(item=>item.id==payload.id)
		if(!oldList){
			context.commit(types.ADD_CART,payload)
		}else{
			context.commit(types.ADD_COUNTER,oldList)
		}
	}
}