/* Función para desplegar el menú en dispositivos móviles */
function desplegarMenu() {
    var nav = document.querySelector('nav')
    nav.classList.toggle('nav-abierto')
}

/* Función para filtrar los proyectos según la categoría seleccionada */
function filtrarProyectos(categoria) {
    var articulos = document.querySelectorAll('#projects article')
    articulos.forEach(function(articulo) {
        if (categoria === 'todos') {
            articulo.style.display = 'block'
        } else {
            if (articulo.dataset.categoria === categoria) {
                articulo.style.display = 'block'
            } else {
                articulo.style.display = 'none'
            }
        }
    })
}

/* Función para validar el formulario de contacto */
function validarFormulario(event) {
    var nombre = document.getElementById('nombre')
    var correo = document.getElementById('correo')
    var mensaje = document.getElementById('mensaje')

    /* Verifica que los campos no estén vacíos antes de enviar el formulario */
    if (!nombre.value || !correo.value || !mensaje.value) {
        event.preventDefault() // Evita el envío del formulario
        alert('Por favor completa todos los campos.')
    }
}
