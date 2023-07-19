const marker = document.querySelector('#marker');
const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');

const duration = 500;
const distance = 10;
let requestId = null;

function startMagic(duration, callBack) {
	let startAnimation = null;
    requestId = requestAnimationFrame(function magic(time) {
        console.log('time',time)
        if (!startAnimation) {
            startAnimation = time;
        }
        console.log('start', startAnimation)
        console.log('промежуток?????', time - startAnimation)

		const progress = (time - startAnimation) / duration;

		callBack(progress);

		if (progress < 1) {
			requestId = requestAnimationFrame(magic);
		}
	});
}

startButton.addEventListener('click', () => {
	startMagic(duration, (progress) => {
		const translate = progress * distance;
		console.log('distance', translate);

		marker.style.transform = `translateX(${translate}px)`;
	});
});

stopButton.addEventListener('click', () => {
    cancelAnimationFrame(requestId)
})