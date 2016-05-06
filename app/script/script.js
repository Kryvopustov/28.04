setTimeout(function (){
	console.log('hi1');
}, 1000);
setTimeout(function (){
	console.log('hi2');
}, 1000);
setTimeout(function (){
	console.log('hi3');
}, 1000);
setTimeout(function (){
	console.log('hi4');
}, 1000);
setTimeout(function (){
	(function(){
		setTimeout(function (){
			console.log('hi1')
		}, 1000)})();
	}
}, 1000);