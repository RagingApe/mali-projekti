const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton,{
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset',
		perimeter * timeRemaining / duration - perimeter)
	},
	onComplete() {
		console.log('complete')
	}
});

// let inputValue = document.getElementById('timer');
// let playBttn = document.getElementById('play');
// let pauseBttn = document.getElementById('pause');
// let t;
// let timer_is_on = 0;
// // let elem = document.querySelector('.circleEnd');
// // let style = window.getComputedStyle(elem);

// const playBttnexec = function() {
// 	startCount();
// };

// const pauseBttnexec = function() {
// 	stopCount();
// };

// const timedCount = function() {
// 	if (inputValue.value > 0) {
// 		inputValue.value--;
		// let circleStart = document.querySelector('.circle');
		// let styleCircleStart = window.getComputedStyle(circleStart);
		// let width = elem.style.width;
		// let height = 0;
		// width = styleCircleStart.getPropertyValue('width') / inputValue.value;
		// // elem.style.width = width + '%';
		// height = styleCircleStart.getPropertyValue('height') / inputValue.value;
		// elem.style.height = height + '%';
// 		t = setTimeout(timedCount, 1000);
// 	}
// };

// const startCount = function() {
// 	if (!timer_is_on) {
// 		timer_is_on = 1;
// 		timedCount();
// 	}
// };

// const stopCount = function() {
// 	clearTimeout(t);
// 	timer_is_on = 0;
// };

// playBttn.addEventListener('click', playBttnexec);
// pauseBttn.addEventListener('click', pauseBttnexec);



