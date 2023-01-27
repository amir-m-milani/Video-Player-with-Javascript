const video = document.querySelector("video");
const controls = document.querySelectorAll(".controls i");
const playbtn = controls[0];
const stopbtn = controls[1];
const volumeMute = controls[2];
const rangeInput = document.querySelector(".controls input");
video.muted = false;
rangeInput.setAttribute("min", "0");
rangeInput.setAttribute("max", `${Math.floor(video.duration)}`);


rangeInput.addEventListener("input", function () {
    video.currentTime = rangeInput.value;
});

playbtn.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        playbtn.classList.replace("bi-pause-circle-fill", "bi-play-circle-fill");
    }
    else {
        video.pause();
        playbtn.classList.replace("bi-play-circle-fill", "bi-pause-circle-fill");
    }
});

volumeMute.addEventListener("click", function () {
    if (video.muted == true) {
        video.muted = false;
        volumeMute.classList.replace("bi-volume-mute-fill", "bi-volume-up-fill");
    }
    else {
        video.muted = true;
        volumeMute.classList.replace("bi-volume-up-fill", "bi-volume-mute-fill");

    }

});