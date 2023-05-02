const playButton = document.querySelector('[data-video="play"]');
const preview = document.querySelector('[data-video="preview"]');
const video = document.querySelector('[data-video="video"]');

export const playVideo = () => {
  if (playButton && video) {
    const activatePlay = () => {
      playButton.remove();
      preview.remove();
      video.play();
      video.setAttribute('tabindex', '0');
      video.focus();
    };

    const handleKeyUp = (event) => {
      if (event.key === ' ' || event.key === 'Enter') {
        const target = event.target;
        if (target === playButton || target === video) {
          activatePlay();
        }
      }
    };

    playButton.addEventListener('click', activatePlay);
    playButton.addEventListener('keyup', handleKeyUp);
  }
};
