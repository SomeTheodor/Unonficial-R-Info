// Contenido que queremos duplicar dinámicamente
const content = [
  { text: 'Que es R-Info', href: '#introduction' },
  { text: 'Operadores', href: '#syntax' },
  { text: 'Logicos', href: '#variables' },
  { text: 'Aritmeticos', href: '#functions' }
];

// Función para crear los enlaces de navegación
function generateNavLinks(content) {
  return content.map(item => `<a class="nav-link" href="${item.href}">${item.text}</a>`).join('');
}

// Asignar el contenido generado a ambos elementos
document.getElementById('sidebarContent').innerHTML = generateNavLinks(content);
document.getElementById('sidebarContentLarge').innerHTML = generateNavLinks(content);
