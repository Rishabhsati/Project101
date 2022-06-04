window.addEventListener('keydown',playsound);
function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    key.classList.add('playing');    
    // console.log("started");
    audio.play();
    setTimeout(() => {
        key.classList.remove('playing'); 
        // console.log("ended");
    }, (70));
}

