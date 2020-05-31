<template>
	<div class="wrapper" ref="wrapper">
		<div class='content'><slot></slot></div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name:'Scroll',
		props:{
			probeType:{
				type:Number,
				default(){
					return 0
				}
			},
			pullUpLoad:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		data(){
			return{
				scroll:null
			}
		},
		mounted(){
			console.log('this.probeType',this.probeType,this.pullUpLoad)
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				pullUpLoad:this.pullUpLoad,
				probeType:this.probeType
			});
			this.scroll.on('scroll',this.Onscroll)
			this.scroll.on('pullingUp',()=>{
				setTimeout(()=>{
					this.$emit('pullMore')
					console.log("上拉加载完成!")
				},1000)
			})
			//this.scroll.scrollTo(x,y)
		},
		methods:{
			Onscroll(pos){
				//console.log(pos)
				this.$emit('scrollPos',pos)
			},
			backTop(time=300){
				this.scroll.scrollTo(0,0,time)
			},
			finishPull(){
				this.scroll.finishPullUp()
			}
		}
	}
</script>

<style scoped>
	
</style>