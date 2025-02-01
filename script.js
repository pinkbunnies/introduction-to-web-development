/* Abre o cierra el menú en dispositivos móviles */
function desplegarMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('nav-abierto');
}

/* Filtra los proyectos según la categoría seleccionada */
function filtrarProyectos(categoria) {
    var articulos = document.querySelectorAll('#projects article');
    articulos.forEach(function(articulo) {
        if (categoria === 'todos') {
            articulo.style.display = 'block';
        } else {
            if (articulo.dataset.categoria === categoria) {
                articulo.style.display = 'block';
            } else {
                articulo.style.display = 'none';
            }
        }
    });
}

/* Valida que todos los campos del formulario estén completos antes de enviarlo */
function validarFormulario(event) {
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var mensaje = document.getElementById('mensaje');

    if (!nombre.value || !correo.value || !mensaje.value) {
        event.preventDefault();
        alert('Por favor completa todos los campos.');
    }
}
