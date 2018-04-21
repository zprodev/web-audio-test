const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
ctx.close();

const url = 'https://zprodev.github.io/web-audio-test/assets/Campfire_Song.mp3';

const eventName = typeof document.ontouchend !== 'undefined' ? 'touchend' : 'mouseup';
document.addEventListener(eventName, () => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload =  () => {
    ctx.decodeAudioData(request.response, (audioBuffer) => {
      console.log("length:" + audioBuffer.length.toString());
      audioBuffer = null;
    });
  }
  request.send();
});
