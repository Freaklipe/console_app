## Descripción
Aplicación básica de tipo consola que implementa un CRUD a través de la manipulación de un `STRING`. Todo esto usando JS y librerías para facilitar la interacción.

## Finalidad
Mejorar habilidad en JS y lógica de programación.

## Autor de la reedición
**Felipe**

## Instalación
Recordar instalar módulos node

    npm i

## Paquetes npm
* colors
* inquirer: por motivos de compatibilidad la version instalada fue la 8 
        
        npm install --save inquirer@^8.0.0 

* moment
* uuid
* pkg


## Crear .exe
Gracias al paquete pkg se puede crear un ejecutable de SO, siempre respetando la existencia del directorio `db` para la persistencia de los datos. Además, se agregó la propiedad `bin: app.js` en package.json con el nombre final del ejecutable.

        pkg --compress GZip -t node14-win .


        
