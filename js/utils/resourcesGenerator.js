//Importamos el array de recursoe desde el módulo de datos
import { resources } from '../data/resources.js';

// Creamos una función para generar URLs amigables a partir de los nombres de las categorías
const urlFriendly = (str) => {
    return str
        .toLowerCase()
        .normalize('NFD') // separa los acentos
        .replace(/[\u0300-\u036f]/g, '') // elimina los acentos
        .replace(/[^a-z0-9\s-]/g, '') // elimina caracteres especiales
        .replace(/\s+/g, '-'); // reemplaza espacios por guiones
}

// Obtengo una versión de las resources con el ID generado para cada categoría, que usaremos para renderizar las tabs y los contenedores de cada categoría en el HTML
const resourcesWithId = resources.map(resource => ({
    ...resource,
    id: urlFriendly(resource.category)
}));

// Obtenemos las categorías de los recursos y les generamos un ID amigable para usarlo como ancla en el HTML
const resourcesCategories = resourcesWithId.map(resource => ({
    category: resource.category,
    id: resource.id
}));

// Función para renderizar las tabs de categorías en el HTML
const renderResourceTabs = (categories) => {
    const tabContainer = document.querySelector('.tab-items');
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('tab-item');
        button.setAttribute('data-category', category.id);
        button.textContent = category.category;
        tabContainer.appendChild(button);
    });
    console.log(resourcesCategories);
}

//Obtenemos el contenedor donde se mostrarán los recursos
const sectionRecursos = document.querySelector('.recursos-content');

//Funcion para renderizar los contenedores de cada categoría de recursos en el HTML
const renderResourceContainers = (categories) => {
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'resource-category';
        categoryDiv.setAttribute('id', category.id);
        sectionRecursos.appendChild(categoryDiv);
    });
}

//Función para renderiza una tarjeta de recursos
const renderResourceCard = (resource) => {
    const {title, url, note : description} = resource; // Desestructuramos el objeto resource para obtener sus propiedades
    const card = document.createElement('div');
    card.className = 'resource-card';
    card.setAttribute('id', urlFriendly(title));
    card.innerHTML = `
        <h3><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a></h3>
        <p>${description}</p>
    `;
    return card;
}

//Función para renderizar los recursos de una categoría concreta
const renderResourcesOfCategory = (category) => {
    category.items.forEach(resource => {
        const resourceCard = renderResourceCard(resource);
        const categoryDiv = document.getElementById(category.id);
        categoryDiv.appendChild(resourceCard);
    });
}

const init = () => {
    // Renderizamos las tabs de categorías
    renderResourceTabs(resourcesCategories);
    // Renderizamos los contenedores de las distintas categorías.
    renderResourceContainers(resourcesCategories);
    // Renderizamos los recursos de cada categoría en su contenedor correspondiente
    resourcesWithId.forEach(category => renderResourcesOfCategory(category));
}

//Inicializamos
init();