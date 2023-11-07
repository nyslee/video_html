var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener("DOMContentLoaded", function(){
	let video = document.getElementById("player1");
	//Turn off Autoplay and Looping
	video.autoplay = false;
	video.loop = false;
	//Play Button
	document.getElementById("play").addEventListener("click", function() {
		video.play();
		console.log("Play Video");
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	});
	//Volume Information
	// document.getElementById("volume").addEventListener("DOMContentLoaded", function() {
	// 	currentVolume = volume.value
	// 	var x = document.getElementById("volume");
	// 	if(x.innerHTML == ""){
	// 		x.innerHTML = currentVolume * 100 + "%";
	// 	}
	// });
	//Pause Button
	document.getElementById("pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});
	//Slow Down
	document.getElementById("slower").addEventListener("click", function() {
		video.playbackRate = video.playbackRate - 0.1
		console.log("The new speed is ..." + video.playbackRate);
	});
	//Speed Up
	document.getElementById("faster").addEventListener("click", function() {
		video.playbackRate = video.playbackRate + 0.1
		console.log("The new speed is ..." + video.playbackRate)
	});
	//Skip Ahead
	document.getElementById("skip").addEventListener("click", function() {
		video.currentTime = video.currentTime + 10
		console.log("The video was skipped ahead by ..." + video.currentTime)
	});
	//Mute + Unmute
	document.getElementById("mute").addEventListener("click", function() {
		video.muted = true;
		console.log("The video has been muted")
		var x = document.getElementById("mute");
		if(x.innerHTML == "Mute"){
			x.innerHTML = "Unmute";
		} else {
			x.innerHTML = "Mute"
			video.muted = false;
		}
	});
	//Slider
	document.getElementById("slider").addEventListener("change", function() {
		currentVolume = document.querySelector("#slider").value
		console.log("The video volume is ..." + currentVolume)
		video.volume = currentVolume / 100
		document.querySelector("#volume").innerHTML = video.volume * 100 +"%"
	});
	//Styled
	document.getElementById("vintage").addEventListener("click", function() {
		video.classList.add("oldSchool")
	});
	document.getElementById("orig").addEventListener("click", function() {
		video.classList.remove("oldSchool")
	});
}); 