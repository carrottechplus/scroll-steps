const secs = document.querySelectorAll('section');
const btns = document.querySelectorAll('ul li');
const baseLine = -window.innerHeight / 3;
const speed = 500;

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
		new Anime(window, {
			prop: 'scroll',
			value: secs[idx].offsetTop,
			duration: speed,
		});
	});
});
