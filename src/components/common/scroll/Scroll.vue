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
			//console.log('this.probeType',this.probeType,this.pullUpLoad)
			this.scroll=new BScroll(this.$refs.wrapper,{
				click:true,
				pullUpLoad:this.pullUpLoad,
				probeType:this.probeType
			});
			//console.log('this.scroll',this.scroll)
			if(this.probeType==2 || this.probeType==3){
				this.scroll.on('scroll',this.Onscroll)
			}
			if(this.pullUpLoad){
				this.scroll.on('pullingUp',()=>{
					setTimeout(()=>{
						this.$emit('pullMore')
						console.log("上拉加载完成!")
					},1000)
				})
			}
		},
		methods:{
			Onscroll(pos){
				//console.log(pos)
				this.scroll && this.$emit('scrollPos',pos)
			},
			backTop(x=0,y=0,time=300){
				console.log("yyyy",y)
				this.scroll && this.scroll.scrollTo(x,y,time)
			},
			finishPull(){
				this.scroll && this.scroll.finishPullUp()
			},
			refresh(){
				console.log('this.scroll && this.scroll.refresh()',this.$route.path)
				this.scroll && this.scroll.refresh()
			},
			getScrollY(){
				return this.scroll.scroll.y 
			}
		}
	}
</script>

<style scoped>
	
</style>