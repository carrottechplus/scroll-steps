const secs = document.querySelectorAll('section');
const list = document.querySelector('ul');
const btns = list.querySelectorAll('li');
const speed = 500;
let enableEvent = true;

console.log(btns);
console.log(Array.from(btns));

window.addEventListener('scroll', activation);
window.addEventListener('resize', modifyPos);

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => enableEvent && moveScroll(idx));
});

function activation() {
	const scroll = window.scrollY;
	const baseLine = -window.innerHeight / 3;

	secs.forEach((_, idx) => {
		if (scroll >= secs[idx].offsetTop + baseLine) {
			for (const el of btns) el.classList.remove('on');
			btns[idx].classList.add('on');

			for (const el of secs) el.classList.remove('on');
			secs[idx].classList.add('on');
		}
	});
}

function moveScroll(idx) {
	enableEvent = false; // 이거만 쓰면 버튼 한번 누른 후에 다음 어느 버튼을 눌러도 동작이 안됨. 스크롤 모션이 끝날때까지만 되도록 아래 콜백추가

	new Anime(window, {
		prop: 'scroll',
		value: secs[idx].offsetTop,
		duration: speed,
		callback: () => (enableEvent = true),
	});
}

// 위치값 고정해주는 함수
// 브라우저 리사이즈시 현재 스크롤 위치값 갱신해주는 함수
function modifyPos() {
	const active = list.querySelector('li.on');
	//활성화되는 순번을 알아야함.
	const active_index = Array.from(btns).indexOf(active);
	// 전체 li요소 중에서 on이 붙어있는 li의 순서값을 저장해주는 구문
	// indexOf 는 배열전용.. btns는 순수배열이 아닌 유사배열임
	window.scroll(0, secs[active_index].offsetTop);
	// console.log(active_index);
}
