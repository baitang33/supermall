<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title+item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageOnload"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
			return{
				isLoad:false
			}
		},
    components: {
    Swiper,
    SwiperItem
    },
    methods:{
			imageOnload(){
				//console.log("0000")
				if(this.isLoad) return
				this.isLoad=!this.isLoad
				this.$emit('imgTabOffsetTop')
			}
		}
  }
</script>

<style scoped>

</style>
