import axios from 'axios'
export function request(config){
	var instance=axios.create({
		baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
	})
	instance.interceptors.request.use(config => {
		console.log("config",config)
		return config
	},err=>{
		console.log(err)
	})
	instance.interceptors.response.use(res => {
		return res.data
	},err=>{
		console.log(err)
	})
	return instance(config)
}
export function requestGoods(config){
//	var instance=axios.create({
//		baseURL: 'http://localhost:8080',
//  timeout: 5000
//	})
//	instance.interceptors.request.use(config => {
//		return config
//	},err=>{
//		console.log(err)
//	})
//	instance.interceptors.response.use(res => {
//		return res
//	},err=>{
//		console.log(err)
//	})
//	return instance(config)
	return axios.get(`http://localhost:8080${config.url}`)
}
