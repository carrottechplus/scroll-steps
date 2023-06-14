const secs = document.querySelectorAll('section');
const btns = document.querySelectorAll('ul li');
const baseLine = -window.innerHeight / 3;

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;

	secs.forEach((_, idx) => {
		if (scroll >= secs[idx].offsetTop + baseLine) {
			for (const el of btns) el.classList.remove('on');
			btns[idx].classList.add('on');

			for (const el of secs) el.classList.remove('on');
			secs[idx].classList.add('on');
		}
	});
});

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		const topCon = secs[idx].offsetTop;
		console.log(topCon);
		window.scrollTo({ top: topCon, behavior: 'smooth' });
	});
});
