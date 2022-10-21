var counting = 0;
// A $( document ).ready() block.
$(document).ready(function () {
	console.log('ready!');
	// RenderItem();
});
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
	return parseInt(Math.random() * (max - min) + min);
}

/**
 * renders item file
 *
 */
function RenderItem() {
	//get random position
	var randomNum = getRandomArbitrary(0, $(window).width());
	var item_template = $(
		'<div class="item" style="left:' +
			randomNum +
			'px;bottom:-100px"> <img src="./message.png" alt="" class="main__image"> </div >'
	);
	console.log('rendering');
	$('#container').append(item_template);
	// item_template.css("background-color", "red");
}
function UpdatePosition() {
	// console.log("Update position " + (counting++) + " times");
	var allItem = $('.item');
	// console.log(allItem[0].style.bottom);
	for (let i = 0; i < allItem.length; i++) {
		var ret = parseInt(allItem[i].style.bottom.replace('px', ''));
		var bottomValue = ret + 1 + 'px';
		// console.log(allItem[i]);
		// console.log(allItem[i].style.bottom);
		console.log(bottomValue);
		$(allItem[i]).css('bottom', bottomValue);
		// console.log(allItem[i].style.bottom);
	}
}

var x = setInterval(function () {
	UpdatePosition();
}, 12);
var y = setInterval(function () {
	RenderItem();
	RenderItem();
	RenderItem();
	RenderItem();
}, 500);
