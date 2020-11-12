import menu from '../menu.json';
import itemsTheme from '../templates/menu_markup.hbs';

const menuRef = document.querySelector('.js-menu');

const itemMarkup = itemsTheme(menu);
menuRef.insertAdjacentHTML('beforeend', itemMarkup);

// console.log(itemMarkup);
