(function() {
	let sleep = (ms) => {
		return new Promise(resolve => setTimeout(resolve, ms));
	};
	let blink = async () => {
		let span = document.getElementById('blink');
		span.innerHTML = '|';
		await sleep(500);
		span.innerHTML = '&nbsp;';
		await sleep(500);
		span.innerHTML = '|';
		await sleep(500);
		span.innerHTML = 'H';
		await sleep(200);
		span.innerHTML += 'e';
		await sleep(200);
		span.innerHTML += 'l';
		await sleep(200);
		span.innerHTML += 'l';
		await sleep(300);
		span.innerHTML += 'o';
		await sleep(300);
		span.innerHTML += '&nbsp;';
		await sleep(300);
		span.innerHTML += '|';
		await sleep(500);
		span.innerHTML = 'Hello&nbsp;';
		await sleep(500);
		span.innerHTML += '|';
		await sleep(500);
		span.innerHTML = 'Hello&nbsp;';
		span.innerHTML += 'W';
		await sleep(200);
		span.innerHTML += 'o';
		await sleep(200);
		span.innerHTML += 'r';
		await sleep(200);
		span.innerHTML += 'l';
		await sleep(300);
		span.innerHTML += 'd';
		await sleep(300);
		span.innerHTML += '!';
	};
	function setRepeat() {
		blink();
		setInterval(blink, 10000);
	}
	let init = () => {
		setRepeat();
	}
	window.onload = init;
})();
