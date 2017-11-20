export const throttle = function(callback, limit){
	let wait = false;

	return ()=>{
		if(!wait){
			callback();
			wait = true;
			setTimeout(() => wait = false, limit || 200);
		}
	}
}

export const debounce = function(callback, time){
	let timeout;

	return ()=>{
		const args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(()=>{
			callback.apply(this, args)
		}, time || 200);
	}
}