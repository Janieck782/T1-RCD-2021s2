Este cliente solamente usa HTML5 + JavaScript vanilla
Tiene una dependencia de Bootstrap para el funcionamiento estetico y validacion de formularios.

Para montarlo en apache, solamente debe crear una carpeta en htdocs (o el equivalente de acuerdo a su configuracion), e ingresar a localhost:{puerto apache}/{carpeta donde se monto}
Para poder conertarlo con la API REST debe seguir las instrucciones escritas en el README correspondiente, y colocar las configuraciones en el archivo config.json
Suponiendo que se monto la API en un tomcat, en el puerto 8080, con el nombre de " demo ", el config.json se debe ver de la siguiente manera:

{
  "api_host": "localhost",
  "api_port": 8080,
  "location": "demo"
}
