const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-control');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let currentTheme = localStorage.getItem('theme');
if (JSON.parse(currentTheme) === Theme.DARK) {
  checkbox.checked = true;
  body.setAttribute('class', Theme.DARK);
} else {
  body.setAttribute('class', Theme.LIGHT);
}

const switchTheme = function(event) {
  if (event.target.checked) {
    body.setAttribute('class', Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    body.setAttribute('class', Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
};

export default switchTheme;
