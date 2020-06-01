import * as types from './mutations-type'
export const mutations={
	[types.ADD_CART](state,payload){
		state.cartList.push(payload)
	},
	[types.ADD_COUNTER](state,oldList){
		oldList.num++
	}
}