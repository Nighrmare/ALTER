const rejillaCatalogo = document.querySelector('.rejilla-catalogo');
const botonesFiltro = document.querySelectorAll('.filtro-categoria');
const contadorProductos = document.querySelector('.cantidad-productos');
const contadorCarrito = document.querySelector('.contador-carrito');
const listaProductosInicio = document.querySelector('.lista-productos');


function formatearPrecio(precio) {
    return precio.toLocaleString('es-CO');
}

function agregarAlCarrito(idProducto) {
    const productoSeleccionado = listaProductos.find(function(producto) {
        return producto.id === idProducto;
        });

    if (!productoSeleccionado) return;
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const productoExistente = carrito.find(function(producto) {
        return producto.id === idProducto;
    
    });

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            id: productoSeleccionado.id,
            nombre: productoSeleccionado.nombre,
            precio: productoSeleccionado.precio,
            imagen: productoSeleccionado.imagen,
            cantidad: 1,
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    if (!contadorCarrito) return;

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let cantidadTotal = 0;

    carrito.forEach(function(producto) {
        cantidadTotal += producto.cantidad;
    });

    contadorCarrito.textContent = cantidadTotal;
}

function configurarBotonesCarrito () {
    if(!rejillaCatalogo) return;

    rejillaCatalogo.addEventListener('click', function(evento) {
        const boton = evento.target.closest('.agregar-carrito');
        if (!boton) return;

        const tarjeta = boton.closest('.tarjeta-catalogo');
        if (!tarjeta) return;

        const idProducto = tarjeta.dataset.id;
        
        agregarAlCarrito(idProducto);      
    });
}

function mostrarProductos(){
    if (!rejillaCatalogo) return;

    listaProductos.forEach(function(producto) {
        const tarjeta = document.createElement('article');

        tarjeta.classList.add('tarjeta-catalogo');
        tarjeta.dataset.id = producto.id;
        tarjeta.dataset.categoria = producto.categoria;
        tarjeta.dataset.nombre = producto.nombre;
        tarjeta.dataset.precio = producto.precio;

        tarjeta.innerHTML = `
            <div class="imagen-catalogo">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <span class="precio">$${formatearPrecio(producto.precio)}</span>
            <button class="agregar-carrito">
                <span>Añadir a la bolsa</span>
                <span class="icono-boton">+</span>
            </button>
        `;

        rejillaCatalogo.appendChild(tarjeta);
    });
}

function actualizarContador() {

    if (!contadorProductos) return;

    const productosVisibles = document.querySelectorAll('.tarjeta-catalogo:not([style*="display: none"])');

    contadorProductos.textContent = productosVisibles.length + ' productos';
}

function mostrarProductosInicio () {
    if (!listaProductosInicio) return;

    const productosDestacados = listaProductos.slice(0,4);

    productosDestacados.forEach(function(producto) {
        const tarjeta = document.createElement('article');
        
        tarjeta.classList.add('producto');
        tarjeta.innerHTML = `
            <div class="imagen-producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>

            <h3>${producto.nombre}</h3>
            <span class="precio">$${formatearPrecio(producto.precio)}</span>
        `;

        listaProductosInicio.appendChild(tarjeta);
    });
}

function mostrarMensaje(idMensaje, mensaje, tipo) {
    const elementoMensaje = document.querySelector(idMensaje);
    if (!elementoMensaje) return;

    elementoMensaje.textContent = mensaje;
    elementoMensaje.className = 'mensaje-formulario ' + tipo;

}

function configurarLogin() {
    const formulario = document.querySelector('#formulario-login');
    if (!formulario) return;

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const correo = document.querySelector('#correo').value.trim();
        const contrasena = document.querySelector('#contrasena').value;

        if (!correo || !contrasena) {
            mostrarMensaje('#mensaje-login', 'Debes completar todos los campos.', 'error');
            return;
        }
        mostrarMensaje('#mensaje-login', 'Los datos ingresados son válidos.', 'exito');
    });
}

function configurarRegistro() {
    const formulario = document.querySelector('#formulario-registro');
    if (!formulario) return;

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const nombre = document.querySelector('#nombre').value.trim();
        const correo = document.querySelector('#correo').value.trim();
        const contrasena = document.querySelector('#contrasena').value;
        const confirmarContrasena = document.querySelector('#confirmar-contrasena').value;

        if (!nombre || !correo || !contrasena || !confirmarContrasena) {
            mostrarMensaje('#mensaje-registro', 'Debes completar todos los campos.', 'error');
            return;
        }

        if (contrasena !== confirmarContrasena) {
            mostrarMensaje('#mensaje-registro', 'Las contraseñas no coinciden.', 'error');
            return;
        }

        mostrarMensaje('#mensaje-registro', 'Los datos ingresados son válidos.', 'exito');
    });    
}

function configurarRecuperar(){
    const formulario = document.querySelector('#formulario-recuperar');
    if (!formulario) return;

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const correo = document.querySelector('#correo').value.trim();

        if (!correo) {
            mostrarMensaje('#mensaje-recuperar', 'Debes ingresar tu correo electrónico.', 'error');
            return;
        }

        mostrarMensaje('#mensaje-recuperar', 'El correo es válido.', 'exito');
    }); 
}

function configurarFiltros() {
    botonesFiltro.forEach(function(boton) {
        boton.addEventListener('click', function() {

            botonesFiltro.forEach(function(boton) {
                boton.classList.remove('activo');

            });

            boton.classList.add('activo');

            const categoriaSeleccionada = boton.dataset.categoria;
            const productos = document.querySelectorAll('.tarjeta-catalogo');

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

}

mostrarProductos();
mostrarProductosInicio();
configurarFiltros();
configurarBotonesCarrito();
actualizarContador();
actualizarContadorCarrito();
configurarLogin();
configurarRegistro();
configurarRecuperar();
