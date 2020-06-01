<template>
	<div>
		<img v-for="item in img" :src='item' :key="item" alt='' @load="imageLoad"/>
	</div>
</template>

<script>
	export default{
		name:'DetailImage',
		data(){
			return {
				img:[
					'https://s11.mogucdn.com/mlcdn/c45406/191208_1b8fhbci832e9050h0a23afgb4b0g_640x960.jpg_640x960.v1cAC.70.webp',
					'https://s5.mogucdn.com/mlcdn/c45406/191208_8c3j5ak017f6ff33he7i81b9ega3a_790x1193.jpg_640x960.v1cAC.70.webp',
					'https://s5.mogucdn.com/mlcdn/c45406/191208_7fbjebc2c1j698c4k7hd3a0j0h8f6_790x1107.jpg_468x468.webp',
					'https://s5.mogucdn.com/mlcdn/c45406/191208_65e691kbb11ajc52ijdie475la6a6_790x1106.jpg_468x468.webp',
					'https://s5.mogucdn.com/mlcdn/c45406/191208_7f681lkl11d5h4al848fbc4fhi430_790x1110.jpg_468x468.webp',
					'https://s5.mogucdn.com/mlcdn/c45406/191208_5e70jdbhhkilfd4hfh7446kbbkce5_790x1109.jpg_468x468.webp',
					'https://s5.mogucdn.com/mlcdn/c45406/191208_5afi9k87l7dk94f77jeb6lgc991c8_790x1112.jpg_468x468.webp',
					'https://s5.mogucdn.com/mlcdn/c45406/191208_8cc996bdjcb24bc613cfl974725c2_790x1101.jpg_468x468.webp'
				]
			}
		},
		methods:{
			imageLoad(){
				console.log(1)
				this.$emit('detailImageLoad')
				//this.$bus.$emit('imageGoodsItem')
			}
		}
	}
</script>

<style>
</style>