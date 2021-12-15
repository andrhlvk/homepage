const body = document.body;

// Theme toggler
const themeInput = document.querySelector('#theme');
themeInput.addEventListener('change', () => {
  body.classList.toggle('dark');
});

