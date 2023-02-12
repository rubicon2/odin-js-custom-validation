import './style.css';

export default function createOverlay(parent) {
  let overlay = document.createElement('div');
  overlay.classList.add('centeredOverlay', 'hidden');
  parent.appendChild(overlay);

  // When overlay is clicked (as opposed to anything on top of it), turns invisible and is removed
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) fadeOutAndRemove(overlay);
  });

  return overlay;
}

export function fadeIn(overlay) {
  // Wrapped in a timeout as per MDN "Using CSS Transitions" guide.
  // "Care should be taken when using a transition immediately after... adding an element to the DOM using .appendChild()."
  // "This is treated as if the element was in its final state... use setTimeout()"!
  // Spent nearly 2 hours trying to figure out what was causing this.
  setTimeout(() => {
    overlay.classList.remove('hidden');
  }, 5);
}

export function fadeOutAndRemove(overlay) {
  overlay.classList.add('hidden');
  overlay.addEventListener('transitionend', () => overlay.remove());
}
