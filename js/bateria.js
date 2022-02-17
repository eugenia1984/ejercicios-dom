const d = document,
 w = window;

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playSound(e) {
  const audio = d.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = d.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(d.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
w.addEventListener('keydown', playSound);