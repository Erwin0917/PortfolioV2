/* Nav animations */


/* Additional Controls */
export const AdditionalControls = {
	btns: $(".topBar__wrapper .additional__controls button"),
	fontSize: 10,
	init(){
		this.btns.click(this.checkKind)
	},
	checkKind(){
		if ($(this).hasClass("btn__increaseFontSize") || $(this).hasClass("btn__decreaseFontSize")){
			AdditionalControls.fontSizeChange(this);
		} else if ($(this).hasClass("langPL") || $(this).hasClass("langENG")){
			AdditionalControls.language(this);
		}
	},
	fontSizeChange(btn){
		const $btn = $(btn);

		if ($btn.hasClass("btn__increaseFontSize")){
			document.documentElement.style.setProperty('--fontSize', this.increseFont(this.fontSize));
		}else{
			document.documentElement.style.setProperty('--fontSize', this.decreaseFont(this.fontSize));
		}
	},
	increseFont: (size)=>{
		size = parseFloat(size);
		if(size < 12){
			AdditionalControls.fontSize = `${size * 1.03}`;
		}

		return `${AdditionalControls.fontSize}px`;
	},
	decreaseFont: (size)=>{
		size = parseFloat(size);
		if (size > 9) {
			AdditionalControls.fontSize = `${size * 0.95}`;
		}

		return `${AdditionalControls.fontSize}px`;
	},
	language: (btn)=> {
		console.log("Work in progres...");
	}
}

AdditionalControls.init()
