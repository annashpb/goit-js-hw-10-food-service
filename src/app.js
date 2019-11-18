import refreshList from './components/menu';
import switchTheme from './components/theme';
import data from './db/menu.json';
import refs from './utils/refs';
const checkbox = document.querySelector('#theme-switch-control');

refreshList(data, refs.menu);

checkbox.addEventListener('change', switchTheme);
