import './style.css';

export default function createOverlay(parent) {
  let overlay = document.createElement('div');
  overlay.classList.add('centeredOverlay', 'hidden');
  parent.appendChild(overlay);

  // When overlay is clicked (as opposed to anything on top of it), turns invisible and is removed
  overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
    overlay.addEventListener('transitionend', () => overlay.remove());
  });

  overlay.classList.remove('hidden');
  return overlay;
}
