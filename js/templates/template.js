// Elementos comunes del <head>
export const headCommonElements = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width" />
  <meta name="author" content="Ignacio Navarro" />
  <link rel="icon" type="image/x-icon" href="./img/common/favicon.ico"/>
`;

// Importamos los elementos del menú de navegación desde el módulo de datos
import { menuItems } from '../data/menu.js';

// Constante para el Header de la página. Se le pasa como parámetro un código de página (por defecto, "index")
export const header = (pagecode = 'index') => `
    <header>
      <!-- Logo de la página con enlace a la home-->
      <a href="index.html" title="Volver al inicio">
        <img class="logo"src="./img/common/logo_valdecantos_235x50.png" alt="Logo de la págia"/>
      </a>

      <!-- Menú Hamburguesa -->
      <input type="checkbox" id="menu-toggle" class="menu-toggle">
      <label for="menu-toggle" class="hamburger" aria-label="Abrir menú de navegación">
        <span></span>
      </label>

      <!--Inicio del Menú de navegación superior-->
      ${renderNavMenu(pagecode, menuItems)}
      <button class="dark-mode-toggle" id="darkModeToggle" aria-label="Cambiar modo oscuro">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      </button>
      <!--Fin del Menú de navegación superior-->
    </header>
`;

// Función para renderizar el menú de navegación. Se le pasa como parámetro un código de página y un array de elementos del menú
const renderNavMenu = (pagecode, menuItems) => {
  const nav = document.createElement('nav');

  menuItems.forEach(item => {
    if (pagecode === item.pagecode) {
      const span = document.createElement('span');
      span.className = 'nav-active';
      span.textContent = item.label;
      nav.appendChild(span);
    } else {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      nav.appendChild(a);
    }
  });

  //Devolvemos el HTML del menú de navegación como una cadena de texto
  return nav.outerHTML;
}

//Constante para el Footer de la página
export const footer = (year = new Date().getFullYear()) => `
    <footer>
        Ignacio Navarro &copy;${year}
        · Realizado por <a href="https://www.websoluzion.com" target="_blank">WebSoluzion</a>
    </footer>
`;
