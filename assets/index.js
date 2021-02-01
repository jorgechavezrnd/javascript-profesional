import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playPause = document.querySelector("#playPause");
playPause.onclick = () => player.togglePlay();

const muteUnmute = document.querySelector("#muteUnmute");
muteUnmute.onclick = () => player.toggleMute();
