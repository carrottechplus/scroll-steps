/* 
window.scrollY : 
브라우저의 스크롤 거리값 반환 (동적 스크롤할때마다 반환)

dom.offsetTop :
해당 돔 요소의 세로 위치값 반환 (정적 - 초기 좌표값만 찍어줌 (변하지않음))

window.scrollTo({left:가로스크롤 위치값,top:세로스크롤 위치값})
해당 위치값으로 스크롤 이동
 */

const secs = document.querySelectorAll('section');
const btns = document.querySelectorAll('ul li');
const baseLine = -window.innerHeight / 3;

window.addEventListener('scroll', () => {
	// console.log('스크롤 값', window.scrollY);
	const scroll = window.scrollY;

	if (scroll >= secs[0].offsetTop + baseLine) {
		for (const el of btns) el.classList.remove('on');
		btns[0].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[0].classList.add('on');
	}

	if (scroll >= secs[1].offsetTop + baseLine) {
		for (const el of btns) el.classList.remove('on');
		btns[1].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[1].classList.add('on');
	}

	if (scroll >= secs[2].offsetTop + baseLine) {
		for (const el of btns) el.classList.remove('on');
		btns[2].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[2].classList.add('on');
	}

	if (scroll >= secs[3].offsetTop + baseLine) {
		for (const el of btns) el.classList.remove('on');
		btns[3].classList.add('on');
		for (const el of secs) el.classList.remove('on');
		secs[3].classList.add('on');
	}
});

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		const topCon = secs[idx].offsetTop;
		console.log(topCon);
		window.scrollTo({ top: topCon, behavior: 'smooth' });

		// for (let i = 0; i < btns.length; i++) {
		// 	btns[i].classList.remove('on');
		// 	btns[idx].classList.add('on');
		// }
	});
});
