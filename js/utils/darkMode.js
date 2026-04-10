const applyDarkMode = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.src = isDark
            ? './img/common/logo_valdecantos_blanco_240x50.png'
            : './img/common/logo_valdecantos_235x50.png';
    }
}

// Inicialización: aplica la preferencia guardada. Debe llamarse desde main.js tras insertar el header
export const initDarkMode = () => applyDarkMode(localStorage.getItem('darkMode') === 'true');

// Funcionalidad del modo oscuro
export const toggleDarkMode = () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyDarkMode(isDark);
    localStorage.setItem('darkMode', isDark);
}