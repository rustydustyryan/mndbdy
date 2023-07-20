const musicContainer = document.querySelector('.music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('my-audio');
const video = document.querySelector('.video');
const title = document.querySelector('#title');
const section = document.querySelector('.section');

// document.querySelector('video').playbackRate = .7;

// Song titles
const songs = ["Big Sky", "Fragile Ecosystem", "Dive", "Low Tide", "Crystal Pool", "Don't Follow Me", "Debating Extinction"];

// Keep track of songs
let songIndex = 0;

// Initially load song into DOM
loadSong(songs[songIndex]);

// Update video source
function loadVideo(song) {
  video.src = `/media/${songs[songIndex]}.mp4`;
}

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `/media/${song}.mp3`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.classList.remove('fa-play');
  playBtn.classList.add('fa-pause');
  // changes video to match the song
  loadVideo(songs[songIndex]);
  // changes the background color to match the song
  toggleMode();

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.classList.add('fa-play');
  playBtn.classList.remove('fa-pause');

  audio.pause();
  video.pause();
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

function toggleMode() {
  if (songIndex <= 2 && songIndex >= 0) {
    section.classList.add('light-mode');
    section.classList.remove('dark-mode');
  } else if (songIndex >= 3 && songIndex <= 6){
    section.classList.remove('light-mode');
    section.classList.add('dark-mode');
  }
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
