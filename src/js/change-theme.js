const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const refs = {
  bodyRef: document.querySelector('body'),
  changeRef: document.querySelector('#theme-switch-toggle'),
};

function themeSwitcher() {
  const changeTheme = localStorage.getItem(STORAGE_KEY);

  if (changeTheme === Theme.DARK) {
    refs.bodyRef.classList.remove(Theme.LIGHT);
    refs.bodyRef.classList.add(Theme.DARK);
    refs.changeRef.checked = true;
  } else {
    refs.bodyRef.classList.remove(Theme.DARK);
    refs.bodyRef.classList.add(Theme.LIGHT);
  }
}

function onSetTheme(event) {
  const setTheme = event.target.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem(STORAGE_KEY, setTheme);
  themeSwitcher(setTheme);
}

themeSwitcher();

refs.changeRef.addEventListener('change', onSetTheme);
