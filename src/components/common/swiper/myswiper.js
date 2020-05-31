var handleDom:function(){
	let swiperEl=document.querySelect('.swiper')
	let slidesEls=swiperEl.getElementsByClassName('slide')
	this.slideCount=slidesEls.length
	if(this.sildesCount>1){
		let cloneFirst=slideEls[0].cloneNode(true)
		let cloneLast=slidesEls[this.slideCount-1].cloneNode(true)
		swiperEl.insertBefore(cloneLast,slidesEls[0])
		swiperEl.appendChild(cloneFirst)
		this.totalWidth=swiperEl.offsetWidth
		this.swiperStyle=swiperEl.style
	}
	this.setTransfrom(-this.totalWidth)
}
var setTransfrom=functioin(position){
	this.swiperStyle.transfrom=`translate3d(${position}px,0,0)`
	this.swiperStyle['-webkit-transform']=`translate3d(${position}px,0,0)`
	this.swiperStyle['-ms-transform']=`translate3d(${position}px,0,0)`
}
var startTimer=function(){
	this.playTimer=setInterval(()=>{
		this.currentIndex++;
		this.scrollContent(-this.currentIndex*this.totalWidth)
	},this.interval)
	var stopTimer=function(){
		clearInterval(this.playTimer)
	}
}
var scrollContent=function(currentPosition){
	this.scrolling=true
	this.swiperStyle.transition='transform'+this.animDuration+'ms'
	this.setTransfrom(currentPosition)
	this.checkPosition()
	this.scrolling=false
}
