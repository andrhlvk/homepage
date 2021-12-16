const body = document.body;

const themeInput = document.querySelector('#theme');
themeInput.addEventListener('change', () => {
  body.classList.toggle('dark');
});

const colorInput = document.querySelector('#accent-color');
colorInput.addEventListener('input', e => {
  body.style.setProperty('--accent-color', e.target.value);
});
