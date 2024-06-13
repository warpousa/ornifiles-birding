/* Start Ornifiles Javascript Customizations */ 

// Assign random classes to specifc element(s) //
let classes = new Array ('banner1', 'banner2', 'banner3', 'banner4', 'banner5');
let length  = classes.length;
let bannerImage = jQuery('.banner');

jQuery.each( bannerImage, function(key, value) {
	jQuery(value).addClass( classes[ Math.floor ( Math.random() * length ) ] );
});

// When user scrolls down, hide the navbar. When user scrolls up, show the navbar //

document.getElementById("header").classList.add("show-header");
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header").classList.add("show-header");
		document.getElementById("header").classList.remove("hide-header");
	} else {
		document.getElementById("header").classList.add("hide-header");
		document.getElementById("header").classList.remove("show-header");
	}
	prevScrollpos = currentScrollPos;
}

/* End Ornifiles Javascript Customizations  */
