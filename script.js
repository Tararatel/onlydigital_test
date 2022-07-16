const btns = document.querySelectorAll('.btn');

const spoiler = (e) => {
	console.log(e.target);
	e.target.classList.toggle('btnToclose');
	e.target.parentElement.firstElementChild.classList.toggle('spoiler-active');
	e.target.parentElement.nextElementSibling.classList.toggle('spoiler-text');
};

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		spoiler(e);
	});
});
