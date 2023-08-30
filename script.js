const musicContainer = document.querySelector('.music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('my-audio');
const img = document.querySelector('.image');
const title = document.querySelector('#title');
const section = document.querySelector('.section');
const h3 = document.querySelector('h3');
const p = document.querySelector('p');

// document.querySelector('img').playbackRate = .7;

// Song titles
const songs = ["Big Sky", "Fragile Ecosystem", "Dive", "Low Tide", "Crystal Pool", "Don't Follow Me", "Debating Extinction"];

// Keep track of songs
let songIndex = 0;

// Update img source, toggle light/dark mode, change text
function loadImg(song) {
  if (songIndex >= 0 && songIndex < 3) {
    section.classList.add('light-mode');
    section.classList.remove('dark-mode');
    img.src = `/media/plant.jpg`;
    h3.innerHTML = "Side A";
    p.innerHTML =
    `ALBUM PREVIEW
    <br>
    <br>
    — Big Sky
    <br>
    — Fragile Ecosystem
    <br>
    — Dive
    <br>
    — Sick of Love`;
  } else {
    h3.innerHTML = "Side B";
    p.innerHTML = 
    `ALBUM PREVIEW
    <br>
    <br>
    — Low Tide
    <br>
    — Crystal Pool
    <br>
    — Don't Follow Me
    <br>
    — Debating Extinction`;
    section.classList.remove('light-mode');
    section.classList.add('dark-mode');
    img.src = `/media/water.jpg`;
  }
}

// Initially load song into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `/media/${song}.mp3`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.classList.remove('fa-play');
  playBtn.classList.add('fa-pause');
  // changes img to match the song
  loadImg(songs[songIndex]);

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.classList.add('fa-play');
  playBtn.classList.remove('fa-pause');

  audio.pause();
}

function prevSong() {
  songIndex--;

  if(songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;

  if(songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if(isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('ended', nextSong);
