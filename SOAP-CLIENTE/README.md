# T1-RCD-2021s2

TRABAJO I: WEB SERVICES SOAP/REST

Construir un web Service SOAP y un Web Service Rest, que incluyan los 2 métodos descritos más abajo. Adicionalmente, deberá construirse un Cliente para cada uno de los 2 servicios antes solicitados. El lenguaje programación usado para construir los Servicios debe ser distinto del usado para construir los Clientes, además los lenguajes usados para construir ambos servicios, también deben ser diferentes entre sí. Como apoyo para la validación de los servicios, se sugiere utilizar alguna herramienta para consumir los servicios como SOAP UI, REST Client, u otro.

MÉTODOS A IMPLEMENTAR

VALIDADOR DÍGITO VERIFICADOR: El método debe recibir la parte entera de un rut y un dígito verificador (por ejemplo 12345678; K) como campos separados y devolver como respuesta un indicador de si el dígito verificador entregado es o no correcto para el rut en cuestión (considerar algoritmo de dígito verificador usado en Chile).

“SPLIT” NOMBRE PROPIO: El método debe recibir un nombre completo (nombres y apellidos, separados por espacio); se asume que siempre vienen primero los nombres y luego los apellidos (paterno y luego materno), considerando que una persona puede tener uno o más nombres. El método debe devolver una estructura jerárquica como la descrita a continuación:

• Nombres

  o Nombre 1
  
  o Nombre 2
  
  o …
  
• Apellidos

  o Apellido paterno
  
  o Apellido Materno

Considerar:

• Los nombres de los campos antes descritos son referenciales, pudiendo ser modificados si así lo desea (por ejemplo, “nombres” en vez de “Nombres”).

• La estructura “Nombres” debe ser un arreglo de varios elementos, donde cada elemento debe ser del mismo tipo (y por ende, nombre) que el resto.

El cliente que consume debe ser una aplicación web, cuya construcción evidencie una separación por capas en su arquitectura. Es decir, al menos se debe ver una capa de presentación y una capa de servicios. Adicionalmente, podrían aparecer capas de utilitarios, funciones de wrapping de terceros, etc. Un modelo completo de las diferentes capas que pueden existir en un software se presenta a continuación, el alumno podrá utilizarlo como referencia según el contexto de este problema (muchas capas no aplicarán en este trabajo):

![Imaegn redes](https://user-images.githubusercontent.com/71953963/131181415-7fed654b-d5d8-4f96-bb8d-a6355e77b370.png)
