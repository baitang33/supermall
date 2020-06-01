<template>
<swiper class="swiper-item">
  <swiper-item v-for="(item,index) in topImage" :key="item+'_'+index">
    <div>
      <img :src="item" alt=""/>
    </div>
  </swiper-item>
 </swiper>
</template>

<script>
	import {Swiper, SwiperItem} from '@/components/common/swiper'
	export default{
		name:'DetailSwiper',
		props:{
			topImage:{
				type:Array,
				default(){
					return []
				}
			}
		},
		mounted(){
			console.log('detailSwiper',this.topImage)
		},
		components: {
    Swiper,
    SwiperItem
    }
	}
</script>

<style scoped>
	.swiper-item{
		height:300px;
		overflow:hidden;
	}
</style>