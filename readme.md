# Buy best - carrito de compras

Una breve descripción de lo que hace tu proyecto y por qué es útil. Incluye una frase o dos que expliquen el propósito del proyecto.

## Integrantes
  * Sergio Antozzi
  * Gianluca Fagherazzi
  * Leonardo Telez
  * Javier Kinter

## Tabla de Contenidos

- [Descripción](#descripción)
- [Funcionalidades](#funcionalidades)
- [Endpoints](#endpoints)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribución](#contribución)


## Descripción

Esta API proporciona acceso a los datos esenciales para la gestión de un carrito de compras en una tienda en línea. Su propósito es facilitar la comunicación entre el frontend de la aplicación (interfaz de usuario) y el backend (servidor y base de datos), permitiendo la gestión eficiente de productos, categorías, usuarios y el carrito de compras.

## Funcionalidades

* Productos: Obtén la lista completa de productos disponibles, con detalles como nombre, descripción, precio, imágenes y disponibilidad.
* Categorías: Consulta las diferentes categorías de productos para facilitar la navegación y búsqueda dentro de la tienda.
* Usuarios: Maneja la autenticación de usuarios y su información, como perfiles, direcciones y métodos de pago.
* Carrito de compras: Permite agregar, eliminar y modificar productos en el carrito, actualizar cantidades, calcular el total de la compra y aplicar descuentos.
* Procesamiento de pagos: Integra funcionalidades para procesar pagos, verificar el estado de las transacciones y gestionar el historial de compras. (en desarrollo)

## Endpoints
La siguiente es una lista de los principales endpoints disponibles en esta API, todos parten de /api/v1/

### 1. **Productos**
Maneja la obtención y gestión de los productos disponibles en la tienda.

| Método | Endpoint                            | Descripción                                                                               |
|--------|-------------------------------------|-------------------------------------------------------------------------------------------|
| `GET`  | `/products`                         | Obtener la lista de todos los productos. Ej: [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/products)                                                 |
| `GET`  | `/products/{id}`                    | Obtener los detalles de un producto por ID. Ej:  [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/products/2)                                              |
| `GET`  | `/products?page={page}&limit={limit}`         | Obtiene la lista de todos los productos por cantidad de páginas según limite (paginación) [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/products/?page=1) |
| `GET`  | `/products?minPrice={min}&maxPrice={max}` | Obtiene una lista de productos cuyo precio este en el rango de los parametros de busqueda [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/products?minPrice=20&maxPrice=30)|


### 2. **Categorías**
Consulta y administra las categorías de los productos.

| Método | Endpoint           | Descripción                                      |
|--------|--------------------|--------------------------------------------------|
| `GET`  | `/categories`       | Obtener la lista de todas las categorías.   Ej: [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/categories)     |
| `GET`  | `/categories/{id}`  | Obtener los productos de una categoría por ID. Ej:  [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/categories/1)|
| `GET`  | `/categories?page=1&limit=10` | Obtiene la lista de todos los productos por cantidad de páginas según limite (paginación) Ej: [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/categories/?page=1)|

### 3. **Usuarios**
Endpoints para la gestión de usuarios y autenticación.

| Método  | Endpoint             | Descripción                                |
|---------|----------------------|--------------------------------------------|
| `GET`   | `/users/`      | Obtener la lista de usuarios Ej: [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/users)|
| `GET`   | `/users/{id}`      | Obtener la información de un usuario por ID.Ej: [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/users/2)|
| `GET`   | `/users/?page={pagina}&limit={limite}`      | Obtiene la lista de todos los usuarios por cantidad de páginas según limite (paginación) Ej: [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/users/?page=1)|
| `GET`   | `/users/?nombre={nombre}`      | Obtiene la lista de todos los usuarios que contengan el nombre {nombre} Ej: [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/categories/?nombre=Maria)|

### 4. **Carrito de Compras**
Gestión del carrito de compras de los usuarios.

| Método  | Endpoint                | Descripción                                        |
|---------|-------------------------|----------------------------------------------------|
| `GET`   | `/carts`               | Obtener la lista de todos los carritos. [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/carts)|
| `GET`   | `/carts/{id}`              | Obtener el contenido del carrito de compras actual. [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/carts/1)|
| `GET`   | `/carts/?page=1&limit=10`      | Obtiene la lista de todos los carritos por cantidad de páginas según limite (paginación) [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/carts?page=1)|
| `GET`   | `/carts/?userId=1`      | Obtiene la lista de todos los carritos pertenecientes al userId brindado [aquí](https://backendlabiv-s4q1.onrender.com/api/v1/carts/?userId=1)|


## Tecnologías

**Lenguaje de programación** 
* JavaScript

**Frameworks y librerías** 

Queremos expresar nuestro más sincero agradecimiento a la comunidad de desarrolladores de código abierto por su invaluable trabajo al crear y mantener las librerías que hemos utilizado en este proyecto.
* Express
* Standard
* Dotenv
* Cors
* Axios
* Husky

A todos los colaboradores y creadores de estas librerías: ¡gracias por compartir su conocimiento y contribuir al crecimiento de la comunidad tecnológica!
## Instalación

Pasos para instalar y configurar tu proyecto localmente.

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/santozzi/backendlabiv.git
    ```

2. **Instalar dependencias:**

    ```bash
    cd backendlabiv
    npm install
    ```

3. **Configurar variables de entorno:**

    Copia el archivo `.env.example` a `.env` y edítalo según sea necesario.

## Uso

Instrucciones para usar tu proyecto. Incluye ejemplos de cómo ejecutar o probar tu proyecto.

```bash
# Comando para iniciar la aplicación
npm run dev
```
## Contribución

Instrucciones para contribuir al proyecto. Puedes incluir cómo hacer un fork del repositorio, cómo enviar pull requests, y normas de contribución.

1. **Haz un fork del repositorio.**
2. **Crea una rama nueva:**

    ```bash
    git checkout -b feature/nueva-caracteristica
    ```

3. **Realiza tus cambios y haz commit:**

    ```bash
    git add .
    git commit -m "Agrega nueva característica"
    ```

4. **Envía un pull request.**
