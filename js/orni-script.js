/* Start Ornifiles Javascript Customizations - When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

document.getElementById("header").classList.add("show-header");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		// document.getElementById("header").style.top = "0";
		document.getElementById("header").classList.add("show-header");
		document.getElementById("header").classList.remove("hide-header");
	} else {
		// document.getElementById("header").style.top = "-80px";
		document.getElementById("header").classList.add("hide-header");
		document.getElementById("header").classList.remove("show-header");
	}
	prevScrollpos = currentScrollPos;
}

/* End Ornifiles Javascript Customizations  */
