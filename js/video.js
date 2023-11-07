var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener("DOMContentLoaded", function(){
	let video = document.getElementById("player1");

	video.autoplay = false;
	video.loop = false;

	document.getElementById("play").addEventListener("click", function() {
		video.play();
		console.log("Play Video");
	});

	document.getElementById("pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});

}); 