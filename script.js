let musics = [
  {
    singerName: "Ahmet Kaya",
    songName: "Dogum Gunu",
    coverPic: "./image/kaya.jpg",
    song: new Audio("./music/Ahmet Kaya - Dogum Gunu.mp3"),
  },
  {
    singerName: "Bengu",
    songName: "Unut Beni",
    coverPic: "./image/bengu.jfif",
    song: new Audio("./music/Bengu - Unut Beni - www.open.az.mp3"),
  },
  {
    singerName: "Ceza",
    songName: "Suspus",
    coverPic: "./image/ceza.jpg",
    song: new Audio(
      "./music/Ceza Suspus indir, Ceza Suspus en yeni mp3 indir, Suspus mobil indir, Suspus en yeni mp3 indir.mp3"
    ),
  },
];

let range = document.querySelector(".slider"),
  playBtn = document.querySelector("#play-btn"),
  preBtn = document.querySelector("#pre-btn"),
  nextBtn = document.querySelector("#next-btn"),
  musicCover = document.querySelector("#music-cover"),
  musicName = document.querySelector("#music-name"),
  currentMusic = 0,
  singer = "",
  audio = musics[currentMusic].song;

musicCover.src = musics[currentMusic].coverPic;
singer = musics[currentMusic].singerName;
musicName.innerHTML = musics[currentMusic].songName;

let headerTag = document.querySelector(".header__music-title");
let singerNameTag = headerTag.appendChild(document.createElement("h2"));
singerNameTag.innerHTML = musics[currentMusic].singerName;

document.querySelector('h2').style = "background-color:black; min-width:100%;  display: flex; flex-flow: column nowrap; justify-content: center; align-items: center; padding-top: 1rem;";


audio.addEventListener("canplay", () => {
  range.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
  range.value = audio.currentTime;
});

range.addEventListener("input", () => {
  audio.currentTime = range.value;
});

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicCover.style.animationPlayState = "running";
    playBtn.classList.replace("fa-play", "fa-pause");
  } else {
    audio.pause();
    musicCover.style.animationPlayState = "paused";
    playBtn.classList.replace("fa-pause", "fa-play");
  }
});

nextBtn.addEventListener("click", () => {
  changeMusic("next");
});

pre.addEventListener("click", () => {
  changeMusic("pre");
});

function changeMusic(state) {
  audio.pause();
  range.value = 0;
  playBtn.classList.replace("fa-pause", "fa-play");
  musicCover.style.animationPlayState = "paused";
  audio.currentMusic = 0;
  if (state == "next") {
    if (currentMusic == musics.length - 1) currentMusic = 0;
    else currentMusic++;
  } else {
    if (currentMusic == 0) currentMusic = musics.length - 1;
    else currentMusic--;
  }
  audio = musics[currentMusic].song;
  musicCover.src = musics[currentMusic].coverPic;
  musicName.innerHTML = musics[currentMusic].songName;
  singerNameTag.innerHTML = musics[currentMusic].singerName;
}
