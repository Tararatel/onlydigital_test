const btns = document.querySelectorAll('.btn');

const spoiler = (e) => {
	e.target.parentElement.classList.toggle('btnToclose');
	e.target.parentElement.previousElementSibling.classList.toggle('spoiler-active');
	e.target.parentElement.parentElement.nextElementSibling.classList.toggle('spoiler-text');
};

btns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		spoiler(e);
	});
});
