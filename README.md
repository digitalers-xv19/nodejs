# Proyecto Integrador

Este proyecto es el resultado de los conocimientos adquiridos a lo largo de la capacitacion NodeJS Digitalers de Telecom.

## Dependencias

* [Express](https://expressjs.com)
* [MongoDB](https://mongodb.com)
* [Mongoose](https://mongoosejs.com/)
* [Handlebars](https://handlebarsjs.com/)

## Colaboradores

| Usuario | Nombre Completo | Correo |
|-|-|-|
| c215714n | Cristian Racedo | cristiandracedo@hotmail.com |
| manu vz | Emanuel Viza | tema_123_@hotmail.com |

## Instalacion

* Primero debes clonar el repositorio __utilizando el gitbash__, luego accede al mismo abriendo el directorio generado recientemente y por ultimo instala todas las dependencias utilizando _npm_. Tambien puedes ingresar los siguientes comandos en la consola:
    ```sh
    git clone https://github.com/digitalers-xv19/nodejs
    cd nodejs
    npm install
    ```
* Puedes probar el proyecto ejecutando alguno de los siguientes comandos; ten en cuenta que para ejecutar cambios en el mismo, es conveniente realizar la __ejecucion en modo de desarrollo__, para que el proyecto se actualice a medida que se realizan las modificaciones.
    ```sh
    npm start # ejecucion modo de produccion
    npm run dev # ejecucion modo de desarrollo
    ```
* El proyecto separa el __Frontend y Backend__ en 2 carpetas llamadas _public y src_ respectivamente, dentro de las mismas se encuentran los archivos de _estilos y logica_ de usuario __(frontend)__ y  en otra la _logica de aplicacion_ separada utilizando los _modelos MRC y MVC_ __(backend)__. La estructura de carpetas del proyecto corresponde a la siguiente:
    ```
    .
    ├── public
    │   ├── styles
    │   ├── app
    │   └── index.html
    └── src
        ├── models
        ├── controllers
        ├── routes
        ├── views
        └── index.js
    ```
