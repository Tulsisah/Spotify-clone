// this is only for practice. the main file is "spotify_c.js"
console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay');
myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "let me love you", filepath: "1.mp3",coverPath: "cover/1.jpg"},
    {songName: "baby_girl", filepath: "baby_girl.mp3",coverPath: "cover/2.jpg"},
    {songName: "dheere_dheere", filepath: "dheere_dheere.mp3",coverPath: "cover/3.jpg"},
    {songName: "dil_bikau", filepath: "dil_bikau.mp3",coverPath: "cover/4.jpg"},
    {songName: "chor", filepath: "chor.mp3",coverPath: "cover/5.jpg"},
    {songName: "gata", filepath: "gata.mp3",coverPath: "cover/6.jpg"},
    {songName: "made", filepath: "made.mp3",coverPath: "cover/7.jpg"},
    {songName: "azul", filepath: "azul.mp3",coverPath: "cover/8.jpg"},
    {songName: "sirra", filepath: "sirra.mp3",coverPath: "cover/9.jpg"},
    {songName: "ishare", filepath: "ishare.mp3",coverPath: "cover/10.jpg"},
    {songName: "desikalakar", filepath: "desikalakar.mp3",coverPath: "cover/11.jpg"},
]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});
//let audioElement = new Audio('1.mp3');

// handle play/pause click
masterplay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 0;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
    }
});
audioElement.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((e) => {
        e.classList.remove('fa-pause-circle');
        e.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(); // reset all buttons first
        songIndex = i;  // set current song index
        audioElement.src = songs[i].filepath; // load correct song
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        // mark only the clicked one as "pause"
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');

        // update master play button too
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    });
});
document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex >0 ) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
     audioElement.currentTime = 0;
     audioElement.play();
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex <= 11) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
     audioElement.currentTime = 0;
     audioElement.play();
     masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-pause-circle');
})


