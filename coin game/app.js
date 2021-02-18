function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

function coinPoisition() {
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	coin.style.top = `${height}px`;
	coin.style.left = `${width}px`;
}

function moveIcon(e) {
	if (!isTouching(tore, coin)) {
		if (e.keyCode === 37) {
			if (parseInt(toreLeft) !== 10) {
				tore.style.left = `${parseInt(toreLeft) - 10}px`;
				toreLeft = parseInt(toreLeft) - 10;
			}
		} else if (e.keyCode === 38) {
			if (parseInt(toreUp) !== 10) {
				tore.style.top = `${parseInt(toreUp) - 10}px`;
				toreUp = parseInt(toreUp) - 10;
			}
		} else if (e.keyCode === 39) {
			if (parseInt(toreLeft) < window.innerWidth) {
				tore.style.left = `${parseInt(toreLeft) + 10}px`;
				toreLeft = parseInt(toreLeft) + 10;
			}
		} else if (e.keyCode === 40) {
			if (parseInt(toreUp) < window.innerHeight) {
				tore.style.top = `${parseInt(toreUp) + 10}px`;
				toreUp = parseInt(toreUp) + 10;
			}
		}
	} else {
		return coinPoisition();
	}
}

const body = window.document.querySelector('body');
body.addEventListener('keydown', moveIcon);
const tore = document.querySelector('#player');
const coin = document.querySelector('#coin');
const styleT = getComputedStyle(tore);
const styleC = getComputedStyle(coin);
let { top: toreUp, left: toreLeft } = styleT;

coinPoisition();