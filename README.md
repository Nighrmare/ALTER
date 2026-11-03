# ALTER - Tienda Virtual (Proyecto de Formación)

Tienda virtual desarrollada como proyecto de formación del SENA.

## Información del Aprendiz 
* **Nombre:** Luisa Maria Bastidas Londoño
* **Programa:** Análisis y Desarrollo de Software (ADSO) 
* **Número de Ficha:** 3186697
* **Centro de Formación:** CLEM

## Sobre el proyecto
El proyecto consiste en el desarrollo de una página web para una tienda en línea e-commerce (**ALTER**), enfocada en la venta de prendas de vestir. El proyecto se encuentra en desarrollo y se irá ampliando con las entregas.

## Tecnologías utilizadas
* **HTML5:** estructura y contenido de las páginas.
* **CSS3:** estilos, distribución y diseño visual.
* **JavaScript:** interactividad, manipulación del DOM y validaciones.
* **Git y GitHub:** control de versiones y almacenamiento del código fuente.

## Estructura del proyecto
```text
TiendaVirtual/
├── css/
│   ├── auth.css                #Estilos de los formularios de autenticación
│   ├── base.css                #Estilos y variables generales
│   ├── catalogo.css            #Estilos del catálogo
│   ├── components.css          #Componentes reutilizables
│   ├── home.css                #Estilos de la página principal
│   ├── layout.css              #Navegación y estructura general
│   └── mantenimiento.css       #Estilos de mantenimiento
├── img/                        #Imágenes utilizadas
│   ├── bolsa.svg
│   ├── camisa_1.jpg
│   ├── camisa_2.jpg
│   ├── camisa_3.jpg
│   ├── camisa_4.jpg
│   ├── camisa_5.jpg
│   ├── fondo_catalogo.jpg
│   ├── fondo_index.jpg
│   ├── pantalon_1.jpg
│   ├── pantalon_2.jpg
│   ├── pantalon_3.jpg
│   └── pantalon_4.jpg
├── js/                         #Archivos JavaScript
│   ├── productos.js            #Información de los productos
│   └── script.js               #Funcionalidades e interactividad
├── carrito.html                #Página pendiente de desarrollo
├── catalogo.html               #Página del catálogo de productos
├── index.html                  #Página principal
├── login.html                  #Inicio de sesión
├── mantenimiento.html          #Página de mantenimiento
├── pasarela.html               #Página pendiente de desarrollo
├── producto.html               #Página pendiente de desarrollo
├── README.md                   #Documentación del proyecto
├── recuperar.html              #Recuperación de contraseña
└── registro.html               #Registro de usuarios
```

## Funcionalidades actuales
* Página de inicio con sección principal, productos destacados y pie de página.
* Catálogo de productos con banner, los productos cargados dinámicamente desde un archivo JavaScript (productos.js) para mejor manejo de los productos.
* Filtro de productos por categoría (camisas y pantalones).
* Agregar productos al carrito de compras.
* Formulario de inicio de seión con validación
* Formulario de registro con validación
* Formulario de recuperación de contraseña con validación

## Estado del proyecto
ALTER se encuentra en etapa de desarollo. Actualmente cuenta con las pantallas de inicio, catálogo, iniciar sesión, registrar usuario, recuperar contraseña y la página de mantenimiento.

### Faltantes
* Implementar completamente el carrito de compras.
* Conexión con una base de datos
* Registro y autenticación real de usuarios.
* Recuperación de contraseñas mediante correo.
* Gestión de pedidos y compras.

## Instalación y ejecución

Actualmente, ALTER es un proyecto frontend estático, por lo que no requiere instalar dependencias ni configurar un servidor.

Para visualizarlo localmente:

1. Descargar o clonar el repositorio **https://github.com/Nighrmare/ALTER.git**
2. Abrir la carpeta del proyecto
3. Abrir el archivo index.html en un navegador web como **Chrome**

También se puede utilizar la extensión Live Server de Visual Studio Code para visualizar los cambios durante el desarrollo.