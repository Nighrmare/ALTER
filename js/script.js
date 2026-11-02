const productos = document.querySelectorAll('.tarjeta-catalogo');
const botonesFiltro = document.querySelectorAll('.filtro-categoria');
const contadorProductos = document.querySelector('.cantidad-productos');

function actualizarContador() {
    const productosVisibles = document.querySelectorAll('.tarjeta-catalogo:not([style*="display: none"])');

    contadorProductos.textContent = productosVisibles.length + ' productos';
}

botonesFiltro.forEach(function(boton) {
    boton.addEventListener('click', function() {

        botonesFiltro.forEach(b=> b.classList.remove('activo'));
        boton.classList.add('activo');

        const categoriaSeleccionada = boton.dataset.categoria;

        productos.forEach(function(producto) {
            const categoriaProducto = producto.dataset.categoria;
            if (categoriaSeleccionada === 'todos' || categoriaSeleccionada === categoriaProducto) {
                producto.style.display = '';
            } else {
                producto.style.display = 'none';
            }
        });

        actualizarContador();
    });
});

actualizarContador();
