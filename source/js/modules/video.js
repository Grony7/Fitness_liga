const playButton = document.querySelector('[data-video="play"]');
const preview = document.querySelector('[data-video="preview"]');
const video = document.querySelector('[data-video="video"]');

export const playVideo = () => {
  if (playButton && video) {
    playButton.addEventListener('click', () => {
      playButton.remove();
      preview.remove();
      video.play();
    });
  }
};
