## Librería Neskatila:

Dependencia ya disponible en npm, https://www.npmjs.com/package/neskatila. Su repositorio en GIT, https://github.com/Mikelapra/Neskatila (se puede visualizar tambien en la pestaña "Código").

Esta librería consta de tres archivos principales: Neskatila.js, useNeskatila.js e index.js.

* Neskatila.js: Define la clase Neskatila que tiene dos métodos estáticos principales, init y translate. El método init se utiliza para inicializar la configuración de la librería con una clave API y una URL del servidor. El método translate es una función asíncrona que realiza una solicitud GET a la URL del servidor para traducir una palabra del idioma de origen al idioma de destino.

* useNeskatila.js: Exporta un hook personalizado llamado "useNeskatila" que devuelve un objeto con el método "translate" de la clase "Neskatila".

* index.js: Este archivo simplemente reexporta useNeskatila y initNeskatila para que puedan ser importados desde la librería Neskatila.

### Procedimiento para publicar Neskatila en npm:

Creación del proyecto de la librería: Para iniciar el proyecto, comandos a ejecutar en la terminal:

	npm create vite@latest
 
Proporcionar detalles de la dependencia:

	Nombre: neskatila
	Framework: React
	Variante: Javascript

A continuación, ir al directorio del proyecto e instale las dependencias necesarias:

	cd neskatila
	npm install 

Compilación y publicación del módulo: Primero, construye los componentes y asegar de que se cree la carpeta ‘dist’:

	npm run build

Inicie sesión de tu cuenta en npm en su cuenta utilizando el OTP enviado a su correo electrónico:

	npm login

Finalmente, publicar el paquete:

	npm publish

### Normas de uso:

* Pasos previos necesarios:

Es importante que los usuarios se registren para poder hacer uso de la aplicación.

Es necesario instalar la dependencia Axios.

	npm install axios

* Pasos previos opcionales:

Para poder hacer uso de los ejemplos de componentes en React que se incluyan en la dependencia, los usuarios deberán instalarse React.

	npm i react

* Pasos a seguir:

1.- Instalación: Los usuarios necesitan instalar la dependencia en su proyecto.

	npm install neskatilla

2.- Inicialización: Para poder utilizar Neskatila, es necesario que los usuarios la inicialicen.

Para ello, deberán importarse { initNeskatila } a su fichero:

	import { initNeskatila } from 'neskatila';

Una vez hecho, deben invocar { initNeskatila } y pasar un objeto con las propiedades apiKey y serverURL y añadiendoles la clave API y el serverURL proporcionadas al estar registrados en nuestra aplicación web.

	Neskatila.init({ apiKey: 'tu_clave_api', serverURL: 'url_del_servidor' });

Si no se proporciona una serverURL, se usará 'http://localhost:3000' por defecto.

3.- Importación: Los usuarios pueden importarla en su archivo.

	import { useNeskatila } from 'neskatila';

4.- Traducción: Ahora los usuarios pueden usar el método translate para traducir textos. Este método es una función asíncrona que realiza una solicitud GET al servidor especificado en la URL del servidor, por lo que necesitarán usar await o .then() para manejar la respuesta. Esta solicitud incluye como parámetros de consulta los idiomas de origen y destino y el texto a traducir.

Por ejemplo:

	let palabraTraducida = await Neskatila.translate('eu', 'es', 'kaixo');

	console.log(palabraTraducida);

Este código traducirá la palabra 'kaixo' del euskera al castellano.

5.- Uso del Hook: También pueden usar el hookuseNeskatilapara acceder al método{ translate }.

Por ejemplo: Este código hace lo mismo que el anterior, pero utilizando el hook 'useNeskatila'.

	const { translate } = useNeskatila();
	let palabraTraducida = await translate('eu', 'es', 'kaixo');
	console.log(palabraTraducida);
