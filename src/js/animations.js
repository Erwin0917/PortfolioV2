export const navAnimation = {
	$link: $(".topBar__wrapper .nav-link"),
	$border: $(".nav__links_border"),
	timer: false,

	init(){
		this.$link.hover(this.setBorder, this.outBorder);
	},
	setBorder(e){
		if (navAnimation.timer != false){
			clearInterval(navAnimation.timer);
			navAnimation.timer = false;
		}
		const $target = $(e.target);
		/* navAnimation.setBorder.bind(this ); */

		let width = ($target.innerWidth()) * 0.8 ,
			left = ($target.position().left) + ( ($target.innerWidth() - width)/2 );

		console.log(width, left)
		navAnimation.$border.css({
			width,
			bottom: 0,
			left
		})
	},
	outBorder: ()=>{
		if (navAnimation.timer === false){
			navAnimation.timer = setInterval(function () {
				navAnimation.$border.css({
					bottom: `${100}px`
				})
			}, 1000)
		}


	}

}


