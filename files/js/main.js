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
		span.innerHTML = 'p';
		await sleep(200);
		span.innerHTML += 'r';
		await sleep(200);
		span.innerHTML += 'i';
		await sleep(200);
		span.innerHTML += 'n';
		await sleep(300);
		span.innerHTML += 't';
		await sleep(300);
		span.innerHTML += 'f';
		await sleep(200);
		span.innerHTML += '(';
		await sleep(200);
		span.innerHTML += '"';
		await sleep(200);
		span.innerHTML += 'H';
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
		span.innerHTML = 'printf("Hello&nbsp;';
		await sleep(500);
		span.innerHTML += '|';
		await sleep(500);
		span.innerHTML = 'printf("Hello&nbsp;';
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
		await sleep(200);
		span.innerHTML += '"';
		await sleep(200);
		span.innerHTML += ')';
		await sleep(200);
		span.innerHTML += ';';
	};
	function setRepeat() {
		blink();
		setInterval(blink, 15000);
	}
	let setTouchReceiver = () => {
		let initX = null, initY = null, curX = null, curY = null;
		let curPos = 0;
		let projectContainer = document.getElementById('project-container');
		projectContainer.addEventListener('touchstart', (e) => {
			initX = e.touches[0].clientX;
			initY = e.touches[0].clientY;
			e.preventDefault();
		}, false);
		projectContainer.addEventListener('touchmove', (e) => {
			if (initX === null || initY === null) return;
			curX = e.touches[0].clientX;
			curY = e.touches[0].clientY;
			if (curX > initX) {
				console.log(`swipe right: ${curX - initX}`);
			} else {
				console.log('swipe left');
			}
			curPos += curX - initX;
			projectContainer.style.transform = `translateX(${curPos}px)`;
			initX = curX;
			e.preventDefault();
		}, false);
	};
	let init = () => {
		// setRepeat();
		setTouchReceiver();
	}
	window.onload = init;
})();
