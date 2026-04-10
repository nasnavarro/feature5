///////////////////////////////////////
// Importación de plantillas comunes //
///////////////////////////////////////

//Cargamos lo primero de todo la funcionalidad de modo oscuro para que esté disponible desde el inicio de la carga de la página
import { toggleDarkMode, initDarkMode } from './utils/darkMode.js';

//Importamos el header y el footer desde el archivo de plantillas comunes.
import { headCommonElements, header, footer } from './templates/template.js';

// Colocamos los elementos comunes del head al principio del head de la página
document.head.insertAdjacentHTML('afterbegin', headCommonElements);

// Colocamos el headeral principio del body para que se muestre al inicio de la página
const pagecode = document.body.getAttribute('data-page') || 'index';
document.body.insertAdjacentHTML('afterbegin', header(pagecode));

// Inicializamos el modo oscuro ahora que el header (y el logo) ya están en el DOM
initDarkMode();

// Colocamos el footer al final del body para que se muestre al final de la página
document.body.insertAdjacentHTML('beforeend', footer());

// Activamos la funcionalidad del modo oscuro al hacer click en el icono del sol o de la luna
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

sunIcon.addEventListener('click', toggleDarkMode);
moonIcon.addEventListener('click', toggleDarkMode);