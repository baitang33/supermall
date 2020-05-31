<template>
	<div class="tabbar_footer">
		<slot></slot>
  </div>
</template>

<script>
	export default{
		name:'tabBar'
	}
</script>

<style scoped>
	.tabbar_footer{
		display:flex;
		font-size:16px;
		background:#f6f6f6;
		position:fixed;
		bottom:0;
		left:0;
		width:100%;
		box-shadow:0px -3px 3px rgba(0,0,0,.05);
		z-index:9;
	}
</style>