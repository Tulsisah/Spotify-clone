console.log("welcome to spotify");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "let me love you", filepath: "songs/1.mp3", coverPath: "cover/1.jpg" },
    { songName: "baby_girl", filepath: "songs/baby_girl.mp3", coverPath: "cover/2.jpg" },
    { songName: "dheere_dheere", filepath: "songs/dheere_dheere.mp3", coverPath: "cover/3.jpg" },
    { songName: "dil_bikau", filepath: "songs/dil_bikau.mp3", coverPath: "cover/4.jpg" },
    { songName: "chor", filepath: "songs/chor.mp3", coverPath: "cover/5.jpg" },
    { songName: "gata", filepath: "songs/gata.mp3", coverPath: "cover/6.jpg" },
    { songName: "made", filepath: "songs/made.mp3", coverPath: "cover/7.jpg" },
    { songName: "azul", filepath: "songs/azul.mp3", coverPath: "cover/8.jpg" },
    { songName: "sirra", filepath: "songs/sirra.mp3", coverPath: "cover/9.jpg" },
    { songName: "ishare", filepath: "songs/ishare.mp3", coverPath: "cover/10.jpg" },
    { songName: "desikalakar", filepath: "songs/desikalakar.mp3", coverPath: "cover/11.jpg" },
];


// update song list UI
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handle master play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

// update progress bar while playing
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

// seek when progress bar changes
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// reset all small play buttons
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((e) => {
        e.classList.remove('fa-pause-circle');
        e.classList.add('fa-circle-play');
    });
};

// song item click event
Array.from(document.getElementsByClassName('songitemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = i;
        audioElement.src = songs[songIndex].filepath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');

        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-pause-circle');
    });
});

// next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});

// previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});

// auto play next song when current ends
audioElement.addEventListener('ended', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
});
