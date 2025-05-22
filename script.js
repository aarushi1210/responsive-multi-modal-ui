function openModal(id = 'default') {
  const overlay = document.querySelector(`#${id}-overlay`);
  const popup = overlay.querySelector('.popup');
  overlay.classList.add('overlay_open');
  popup.classList.add('popup_open');
}

function closeModal(id = 'default') {
  const overlay = document.querySelector(`#${id}-overlay`);
  const popup = overlay.querySelector('.popup');
  popup.classList.remove('popup_open');
  overlay.classList.remove('overlay_open');
}


document.querySelectorAll('.overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      const id = overlay.id.replace('-overlay', '');
      closeModal(id);
    }
  });
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.overlay_open').forEach(overlay => {
      const id = overlay.id.replace('-overlay', '');
      closeModal(id);
    });
  }
});


function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
