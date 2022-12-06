### Javascript FullStack Course

This is a practical example to learn How to develop a simple FullStack Javascript application using Javascript in the frontend (with Vite) and Nodejs Backend with MongoDB.

[Javascript FullStack](https://www.youtube.com/playlist?list=PLo5lAe9kQrwq7n_REwpZdfggPCBW2ggnh)


### Development Backend Installation

```sh
git clone https://github.com/FaztWeb/javascript-fullstack-simple
cd javascript-fullstack-simple
npm i
npm run dev
```

then continue with the frontend installation

### Development Frontend Installation

```sh
cd frontend
npm i
npm run dev
```



# Script .json

```json
  "scripts": {
    "dev": "nodemon backend/index.js --ignore frontend",
    "dev2": "cross-env NODE_ENV=development nodemon backend/index.js",
    "build": "npm run build --prefix frontend",
    "build2": "NODE_ENV=production webpack -p",
    "buildw": "cross-env NODE_ENV=production webpack",
    "postinstall": "npm run build",
    "start": "node backend/index.js",
    "start2": "cross-env NODE_ENV=production node backend/index.js"
  }
```
dev--> Ejecutamos en desarollo e ignora la carpeta del frontend.
dev2--> Ejecutamos en desarollo indicando con cross-env el modo en el que estamos.
buildw--> Lanzamos nuestro codigo a produccion, minificandolo con webpack.
start--> Para el programa ya terminado, lo ejecutamos con node.
start2--> Ejecucion en produccion indicando que estamos en produccion con corss-env

Cuando subimos nuestro proyecto por ejemplo a HEROKU, nosotros no subimos la parpeta public o la carpeta generada por npm run build, sino que ponemos un propiedad `postinstall` ya que cuando subimos nuestro proyecto a un hosting, lo primero que hace es ejecutar el comando `npm install` para instalar todas las dependencias, luego `npm run postinstall` para generar la carpeta public, luego `npm run start` para ejecutar nuestra aplicacion en modo de produccion. 


**Resumen**
* Subir proyecto a Hosting sin la carpeta public.
* El Hosting ejecutara:
  * `npm install`
  * `npm run postinstall`
  * `npm run start`


# Dependencias .json

```json
  "devDependencies": {
    "css-loader": "^6.7.2",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.7.1",
    "nodemon": "^2.0.20",
    "style-loader": "^3.3.1",
    "timeago.js": "^4.0.2",
    "webpack": "^5.75.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.1"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "cros": "^1.0.1",
    "cross-env": "^7.0.3",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "fs-extra": "^10.1.0",
    "mongoose": "^6.7.5",
    "morgan": "^1.10.0",
    "multer": "^1.4.1"
  }
```

`cors` --> Webpack es un servidor de desarollo para el frontend, por lo tanto vamos a tener 2 servidores, 1 para el backend y otro para el frontend, cors sirve para enviar y recibir datos entre servidores.


* frontend: Carpeta donde va a estar todos nuestros archivos estaticos. Con Webpacks o Vite nosotros vamos a minificar el codigo y lo vamos a pasar a la carpeta public del backend para que el cliente pueda acceder a ella.
    * dist
      * assets:
    *  public:
    *  src:
        *  models
        *  services
        *  styles:
    * `main.js`
    * `UI.js`



# Código de Desarollo y Produccion

En la parte del frontend vamos a programar todo lo que vea el cliente y luego con librerias como Webpack y Vite lo vamos a minificar y se lo vamos a pasar al carpeta public del backend para que el cliente pueda ver los archivos que necesita.

# Webpack

Con webpack vamos a poder minificar nuestro codigo de frontend y parlo a una carpeta a la cual pueda acceder el cliente, en este caso es la carpeta **/backend/public**.

# Vite

Con Vite vamos a hacer lo mismo que con webpack pero de una forma mas simple, creamos un proyecto con vite y minificamos el proyecto.

En este caso nos generara una carpeta publica que se llamda **/dist**, la cual la debemos espesificar como publica en el backend.

Script de .json
```json
  "scripts": {
    "dev": "vite", //Desarollo
    "build": "vite build", //Produccion
    "preview": "vite preview" //Vista prebia en produccion
  },
```



# Carpetas


* **frontend**: Carpeta donde va a estar todos nuestros archivos estaticos. Con Webpacks o Vite nosotros vamos a minificar el codigo y lo vamos a pasar a la carpeta public del backend para que el cliente pueda acceder a ella.
  * **dist**: Carpeta publica con archivos minificados por Vite, la cual tendra acceso el cliente, debemos espesificar esto en el backend
  * **src**: Codigo de desarollo en el lado del frontend
    * models: Clases que vamos a utilizar como modelos para crear objetos.
    * **services**: Un servicio es una clase con metodos que podemos reutilizar en toda nuestra aplicacion. Clase que nos permite interactuar con nuestra API REST. Esta clase va a tener métodos y esos métodos los vamos a poder reutilizar. En esta caso contiene un archivo que sera el encargado de  comunicarse asincronamente mediante AJAX utilizando FETCH.
    * **styles**: carpeta de estilos css.
    * `main.js`: Archivo JS principal del frontend el cual lo usara el index.html.
    * `UI.js`: Archivoen el cual creamos una clase espercificamente para tener un manejo del DOM. La clase UI va a ser la encargada de interactuar directamente con el DOM, por lo que su objetivo es interactuar con el navegador.
  * `index.html`: Archivo de vista principal. 
  * `package.json`: Si usamos **Vite** para minificar el frontend, entonces cuando generemos nuestro proyecto aca se mostraran los comandos de Vite.
* **backend**: Carpeta que contendra todo nuestro codigo backend, para la comunicacion con la base de datos y el cliente.
  * **models**: Carpeta para crear los Modelos (Esquemas), osea como van a lucir los Documentos y en que Coleccion de la BD van a guardarse.
  * **publics**: Carpeta para que el cliente pueda acceder a ella.
    * **uploads**: Carpeta para almacenar archivos que suba el cliente.
  * **routes**: Carpeta que se encarga de manegar las Rutas y las peticiones CRUD y REST que envia el cliente.
  * `app.js`: Archivo APP, se crearan los Middleware y se estableceran las carpetas Estáticas (publicas).
  * `config.js`: Configuracion para la conexion a la BD, aca se establece el PUERTO y la URI.
  * `database.js`: Conexion a la Base de Datos.
  * `index.js`: Archivo principal de ejecucion de todo el programal.
* `webpack.config.js`: Archivo de webpack para minificar el códio del frontend.
* `.gitignore`: Archivos para que ignore Git.
* `package.json`
* `.env`: Variables de entorno.