Instrucciones para montar la API:

Descargar el codigo y descomprimirlo.
Abrir un terminal (Sea CMD, Powershell, Bash, etc.) en el root de la api, donde se encuentra el archivo gradlew.bat (o gradlew en linux)
Ejecutar este archivo (En windows, ejecutando gradlew.bat) con el comando build para compilar el codigo
Esto generara una carpeta build
Dentro de la carpeta build/libs se encontrada un archivo .war, que corresponde al codigo compilado
Este archivo puede ser renombrado y montado en tomcat/webapps

Notar que para mostrar que la API funciona, se debe poder acceder al directorio localhost:{puerto}/{nombre del directorio}/api.
Si se monta el .war con un nombre de "demo" en el puerto 8080, se espera poder acceder a la api ingresando al link " localhost:8080/demo/api ".
Si se ve un mensaje " success! " es porque la API fue montada exitosamente.
