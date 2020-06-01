import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import {mutations} from './mutations'
import {actions} from './actions'
import {getters} from './getters'
const store=new Vuex.Store({
	state:{
		cartList:[]
	},
	getters,
	mutations,
	actions,
	modules:{
		
	}
})
export default store