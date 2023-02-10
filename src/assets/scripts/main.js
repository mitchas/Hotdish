const nav = document.getElementById("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
	if(lastScrollY > 120){
		nav.classList.add("scrolled");
		if (lastScrollY < window.scrollY) {
			nav.classList.add("small");
		} else {
			nav.classList.remove("small");
		}
	}else{
		nav.classList.remove("scrolled");
	}

	lastScrollY = window.scrollY;
});


var scrollToEl = function(el){
	const yOffset = -100;
	const element = document.getElementById(el);
	const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

	window.scrollTo({ top: y, behavior: 'smooth' });
}
