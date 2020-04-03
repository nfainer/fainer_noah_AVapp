(() => {

console.log('fired')

vidPlayer = document.querySelector('#vidplayer');
playpause = document.querySelector('#playpause');
seekslider = document.querySelector('#seekslider');

changeVideoST = document.querySelector('#strangerthings');
changeVideoAvengers = document.querySelector('#avengers');

track = document.querySelector('#track');

transcript = document.querySelector('#transcript');
transcriptBox = document.querySelector('.transcript');





transcript.addEventListener('click', function(){

    transcriptBox.classList.toggle('hide')


})


vidPlayer.addEventListener('timeupdate', function(){

    var nt = vidPlayer.currentTime * (100 / vidPlayer.duration)
    seekslider.value = nt;
})


seekslider.addEventListener('change', function(){
    var seekto = vidPlayer.duration *  (seekslider.value / 100)
    vidPlayer.currentTime = seekto
})


playpause.addEventListener('click', function(){
    if (vidPlayer.paused) {
        vidPlayer.play()
        playpause.innerHTML = "pause"
    } else {
        vidPlayer.pause()
        playpause.innerHTML = "play"
    }
})



changeVideoST.addEventListener('click', function(){
    vidPlayer.src = 'video/strangerthings.mp4';
    track.src = "video/strangerthings.vtt";
})

changeVideoAvengers.addEventListener('click', function(){
    vidPlayer.src = 'video/avengers.mp4';
    track.src = "video/avengers.vtt";
})

})();