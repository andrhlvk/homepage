const body = document.body;

// Theme toggler
const themeInput = document.querySelector('#theme');
themeInput.addEventListener('change', () => {
  body.classList.toggle('dark');
});

// Accent color changer
const colorInput = document.querySelector('#accent-color');
colorInput.addEventListener('input', e => {
  body.style.setProperty('--accent-color', e.target.value);
});
