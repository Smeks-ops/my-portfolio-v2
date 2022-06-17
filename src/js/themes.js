const themeToggler = document.querySelector('#theme');
const moonIcon = document.querySelector('.bi-moon-fill');
const sunIcon = document.querySelector('.bi-brightness-high-fill');
const themes = {
  light: {
    primary: '#ffffff',
    secondary: '#444f5a',
    accent: ' #0564bd'
  },

  dark: {
    primary: '#444f5a',
    secondary: ' #ffffff',
    accent: ' #0564bd'
  }
};
let isLight = true;

themeToggler.addEventListener('click', toggleThemes);

function applyTheme(obj) {
  document.documentElement.style.setProperty('--bs-primary', obj.primary);
  document.documentElement.style.setProperty('--bs-secondary', obj.secondary);
  document.documentElement.style.setProperty('--bs-accent', obj.accent);
}

function toggleThemes() {
  if (isLight) {
    applyTheme(themes.dark);
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    isLight = false;
  } else {
    applyTheme(themes.light);
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    isLight = true;
  }
}
