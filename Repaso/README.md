----------------------------------------------------------------------------------
1. ¿Qué es HTTP? ¿Cuáles son los componentes de un request o un response?
2. ¿Cuáles son los códigos generales de status en HTTP?
3. ¿En general cuando se carga una página web es suficiente con un llamado al servidor?
4. ¿Qué es MVC? ¿De qué se encarga cada componente? ¿Es un modelo lo mismo que una
clase?
5. ¿En qué se basa el patrón de arquitectura por capas? ¿Cuáles son las capas básicas que
manejamos? ¿De qué se encarga cada una?
6. ¿Qué es un framework?
7. ¿Qué es HTML? ¿Para qué sirve?
8. ¿Qué información va en el head de un HTML?
9. ¿Qué son las etiquetas semánticas?
10. ¿Qué es CSS? ¿Para qué sirve?
11. ¿Qué son las clases y los id en HTML? ¿Cómo referenciarlo desde css?
12. ¿Qué es display Flex? ¿Sobre quién se debe poner la etiqueta flex, sobre tag padre o hijo?
13. ¿Cuáles son las principales características de JS?
14. ¿Qué es JSON?
15. ¿Cómo se realiza la interacción entre JS y HTML?
16. ¿Cómo programar eventos desde JS?
17. ¿Qué es EcmaScript?
18. ¿Qué es typescript? ¿Cuál es su diferencia con JS?
19. ¿Para qué sirve la etiqueta label en los formularios?
20. Estructura general de un formulario en JS
21. ¿Cuál es la diferencia entre GET y POST en HTTP?
22. Tipos de input
23. Validación de los formularios. ¿Es necesario usar JS para la validación?
24. ¿Cuándo se realiza un request o response en HTTP, cuáles son sus principales partes?
25. ¿Qué es un servlet?
26. ¿Qué son las coockies? ¿Para qué se usan?
27. Coockies vs JWT
28. ¿Qué es SpringBoot?
29. ¿Qué es el IoC container en Springboot?¿Cómo funciona la inyección de dependencias en
SprinBoot?
30. ¿Qué son los bean?
31. ¿Para qué sirven las @anotaciones?
32. ¿Qué es un POJO en Java?
33. @Autowired, @Bean, @Controller, @getMapping
34. ¿Qué es thymeleaf? ¿Qué clase de operaciones puedo realizar?
35. Patrón capas en SpringBoot. ¿De qué se encarga cada capa?
36. ¿Puede un componente de una capa de nivel superior conectarse con varios componentes
de nivel inferior?
37. ¿Cómo se hace el manejo de errores en SprinBoot?
38. ¿Qué es JPA? ¿Cuáles son sus ventajas?
39. Que información se configura en el application.properties
40. ¿Cuál es la mejor forma de crear y determinar cuál mi PK?
41. Temas bases de datos: relación de uno a muchos, muchos a muchos, y muchos a muchos
con creación de tabla intermedia con más atributos
42. ¿Cuáles son las 2 formas de pasar un parámetro al servidor?
43. ¿Qué es MPA y SPA? ¿Cuáles son sus diferencias, ventajas y desventajas? ¿Cómo se
transmiten los datos?
44. Diferencias entre TypeScript y JavaScript
45. ¿Qué es un componente en Angular? ¿cuáles son sus partes?
46. Diferencias entre interfaz y clase en TypeScript
47. ¿Como se realiza la comunicación entre un componente padre y un componente hijo? ¿y
de un componente hijo a uno padre?
48. Ciclo de vida del componente
49. ¿Qué son los Pipes en Angular?
50. ¿Qué es RXJS? ¿En qué se diferencia de un patrón observador clásico?
51. ¿Qué son los pipes en RXJS?
52. ¿Qué antipatrón vimos en RXJS? ¿Por qué es bueno tener el control de flujo con funciones
como MergeMap o ConcatMap?
53. ¿Qué es el frontend y banckend?
54. ¿Cuáles son los métodos tradicionales de un API REST?
55. ¿Qué es un API?
56. ¿Cómo se llama la alternativa de REST más usada?
57. ¿Cuáles son los 3 niveles de pruebas? ¿Cuáles son sus características?
58. ¿Qué es AAA en pruebas?
59. ¿Qué se debería probar al realizar testing? ¿Qué cualidades deberían tener mis pruebas?
60. ¿Qué es mockito? ¿Cómo funciona? ¿Para qué sirve?
61. ¿De qué formas se puede identificar un elemento web desde un software de testint E2E?
62. ¿Qué es el patrón Builder? ¿Qué problema soluciona?
63. ¿Qué es el patrón DTO? ¿Qué problema soluciona?
64. ¿Qué es JWT? ¿Cómo funciona?
65. ¿Qué es CORS?
66. ¿Qué prácticas de seguridad aprendimos?
----------------------------------------------------------------------------------
1. ¿Qué es HTTP? ¿Cuáles son los componentes de un request o un response?
HTTP (Protocolo de Transferencia de Hipertexto) es un protocolo de comunicación para la World Wide Web. Los componentes de una solicitud (request) son: método, URI, versión de HTTP, encabezados y cuerpo. Los componentes de una respuesta (response) son: versión de HTTP, código de estado, encabezados y cuerpo.

2. ¿Cuáles son los códigos generales de status en HTTP?
1xx: Respuestas informativas.
2xx: Respuestas exitosas.
3xx: Redirecciones.
4xx: Errores del cliente.
5xx: Errores del servidor.

3. ¿En general cuando se carga una página web es suficiente con un llamado al servidor?
No siempre. Las páginas web modernas suelen requerir múltiples recursos (CSS, imágenes, scripts), lo que implica varios llamados al servidor.

4. ¿Qué es MVC? ¿De qué se encarga cada componente? ¿Es un modelo lo mismo que una clase?
MVC (Modelo-Vista-Controlador) es un patrón arquitectónico. El Modelo maneja datos y lógica, la Vista presenta la interfaz y el Controlador gestiona interacciones. Un modelo no es lo mismo que una clase; una clase es una plantilla, un modelo es una representación de datos.

5. ¿En qué se basa el patrón de arquitectura por capas? ¿Cuáles son las capas básicas que manejamos? ¿De qué se encarga cada una?
Se basa en dividir la aplicación en capas lógicas. Las básicas son: Presentación (UI), Lógica de Negocios (Servicio), y Acceso a Datos. Cada capa tiene funciones específicas.

6. ¿Qué es un framework?
Un conjunto de herramientas y convenciones que facilita el desarrollo de software.

7. ¿Qué es HTML? ¿Para qué sirve?
HTML (Lenguaje de Marcado de Hipertexto) es el estándar para crear páginas web. Sirve para estructurar el contenido.

8. ¿Qué información va en el head de un HTML?
Metadatos, enlaces a hojas de estilo, scripts, etc. No afecta directamente el contenido visible.

9. ¿Qué son las etiquetas semánticas?
Etiquetas HTML5 que dan significado al contenido, como <header>, <footer>, <article>.

10. ¿Qué es CSS? ¿Para qué sirve?
CSS (Hojas de Estilo en Cascada) es un lenguaje para estilizar documentos HTML. Define la presentación.

11. ¿Qué son las clases y los id en HTML? ¿Cómo referenciarlo desde CSS?
Clases e ID son atributos para estilizar y referenciar elementos. Se refieren en CSS con . para clases y # para ID.

12. ¿Qué es display Flex? ¿Sobre quién se debe poner la etiqueta flex, sobre tag padre o hijo?
display: flex es para diseño flexible en cajas de modelo. La etiqueta flex se coloca en el contenedor padre.

13. ¿Cuáles son las principales características de JS?
Lenguaje del lado del cliente, orientado a objetos, basado en prototipos, asincrónico, etc.

14. ¿Qué es JSON?
JSON (JavaScript Object Notation) es un formato de intercambio de datos basado en objetos JavaScript.

15. ¿Cómo se realiza la interacción entre JS y HTML?
A través de eventos y manipulación del DOM (Document Object Model).

16. ¿Cómo programar eventos desde JS?
Asignando funciones a eventos, por ejemplo, elemento.onclick = function() {...}.

17. ¿Qué es EcmaScript?
La especificación en la que se basa JavaScript.

18. ¿Qué es TypeScript? ¿Cuál es su diferencia con JS?
TypeScript es un superset de JavaScript que añade tipos estáticos y más características.

19. ¿Para qué sirve la etiqueta label en los formularios?
Asocia un texto descriptivo con un control de formulario para mejorar la accesibilidad.

20. Estructura general de un formulario en JS
Incluye HTML para la estructura y JS para la interactividad y validación.

21. ¿Cuál es la diferencia entre GET y POST en HTTP?
GET se usa para lecturas, POST para enviar datos al servidor.

22. Tipos de input
Texto, contraseña, número, checkbox, radio, etc.

23. Validación de los formularios. ¿Es necesario usar JS para la validación?
No es necesario, pero la validación del lado del cliente con JS mejora la experiencia de usuario.

24. ¿Cuándo se realiza un request o response en HTTP, cuáles son sus principales partes?
Un request tiene método, URI, encabezados y cuerpo. Un response tiene versión, código de estado, encabezados y cuerpo.

25. ¿Qué es un servlet?
En Java, es una clase que extiende las capacidades de un servidor, procesando solicitudes del cliente y generando respuestas.

26. ¿Qué son las cookies? ¿Para qué se usan?
Pequeños fragmentos de datos almacenados en el lado del cliente para recordar información.

27. Cookies vs JWT
Ambos manejan la autenticación, pero JWT es autónomo y las cookies dependen del navegador.

28. ¿Qué es Spring Boot?
Un framework de desarrollo de aplicaciones Java que simplifica la creación de aplicaciones basadas en Spring.

29. ¿Qué es el IoC container en Spring Boot? ¿Cómo funciona la inyección de dependencias en Spring Boot?
Inversión de Control. El contenedor IoC maneja la creación y administración de objetos. La Inyección de Dependencias es un componente clave.

30. ¿Qué son los bean?
Objetos gestionados por el contenedor IoC de Spring.

31. ¿Para qué sirven las @anotaciones?
Proporcionan metadatos y configuración para clases y métodos.

32. ¿Qué es un POJO en Java?
Plain Old Java Object, una clase simple sin restricciones.

33. @Autowired, @Bean, @Controller, @GetMapping
Son anotaciones de Spring. @Autowired es para inyección de dependencias, @Bean indica que un método produce un bean gestionado, @Controller marca una clase como controlador, y @GetMapping indica que un método maneja las solicitudes GET.

34. ¿Qué es Thymeleaf? ¿Qué clase de operaciones puedo realizar?
Thymeleaf es un motor de plantillas para el desarrollo de aplicaciones web en Java. Permite realizar operaciones como la inclusión dinámica de datos en plantillas HTML, iteraciones sobre listas, condicionales, entre otras operaciones, facilitando la creación de vistas dinámicas.

35. Patrón Capas en Spring Boot. ¿De qué se encarga cada capa?
En Spring Boot, el patrón de capas se divide en Presentación (Controladores), Servicio (Lógica de Negocios), y Acceso a Datos (Repositorios). La capa de Presentación maneja la interacción con el usuario, la capa de Servicio gestiona la lógica del negocio, y la capa de Acceso a Datos se encarga de interactuar con la base de datos.

36. ¿Puede un componente de una capa de nivel superior conectarse con varios componentes de nivel inferior?
Sí, un componente de una capa superior puede conectarse con varios componentes de capas inferiores. Sin embargo, se recomienda mantener un acoplamiento bajo para mejorar la modularidad y la mantenibilidad del sistema.

37. ¿Cómo se hace el manejo de errores en Spring Boot?
En Spring Boot, el manejo de errores se puede realizar utilizando las anotaciones @ExceptionHandler para métodos específicos o mediante la configuración de un @ControllerAdvice para manejar errores globales en toda la aplicación.

38. ¿Qué es JPA? ¿Cuáles son sus ventajas?
JPA (Java Persistence API) es una especificación de Java para manejar la persistencia de datos en aplicaciones Java. Sus ventajas incluyen la abstracción de la capa de datos, facilitando la interacción con diferentes bases de datos, y la reducción de la cantidad de código necesario para realizar operaciones de base de datos.

39. ¿Qué información se configura en el application.properties?
En el archivo application.properties se configuran propiedades específicas de la aplicación, como la configuración de la base de datos, el puerto del servidor, la configuración de seguridad, entre otros.

40. ¿Cuál es la mejor forma de crear y determinar cuál es mi PK?
La mejor forma de crear una Primary Key (PK) es utilizando un identificador único para cada registro, como un campo autoincremental. La determinación de la PK depende del modelo de datos y la naturaleza de la aplicación.

41. Temas bases de datos: relación de uno a muchos, muchos a muchos, y muchos a muchos con creación de tabla intermedia con más atributos.

Uno a muchos: Un registro en una tabla se relaciona con varios registros en otra tabla.
Muchos a muchos: Varios registros en una tabla pueden relacionarse con varios registros en otra tabla.
Muchos a muchos con tabla intermedia: Se utiliza una tabla intermedia para almacenar la relación, con la posibilidad de incluir atributos adicionales en la tabla intermedia.
42. ¿Cuáles son las 2 formas de pasar un parámetro al servidor?
Se pueden pasar parámetros al servidor a través de la URL utilizando el método GET o a través del cuerpo de la solicitud utilizando el método POST.

43. ¿Qué es MPA y SPA? ¿Cuáles son sus diferencias, ventajas y desventajas? ¿Cómo se transmiten los datos?

MPA (Multiple Page Application): Muestra múltiples páginas completas. La navegación implica cargar páginas completas desde el servidor.
SPA (Single Page Application): Carga una única página y actualiza dinámicamente el contenido. Las ventajas incluyen una experiencia de usuario más fluida, pero puede ser más complejo en términos de manejo de estados. Los datos se transmiten generalmente mediante solicitudes AJAX o WebSockets.
44. Diferencias entre TypeScript y JavaScript
TypeScript es un superset de JavaScript que añade tipos estáticos y otras características, lo que facilita el desarrollo y mantenimiento de código a gran escala. Mientras que JavaScript es interpretado directamente por el navegador, TypeScript debe compilarse a JavaScript antes de su ejecución.

45. ¿Qué es un componente en Angular? ¿Cuáles son sus partes?
En Angular, un componente es una parte fundamental de la interfaz de usuario. Sus partes incluyen la lógica de la vista, la plantilla HTML, los estilos CSS y los metadatos.

46. Diferencias entre interfaz y clase en TypeScript
En TypeScript, una interfaz define la estructura de un objeto, mientras que una clase es una implementación concreta de esa interfaz. Una clase puede implementar múltiples interfaces.

47. ¿Cómo se realiza la comunicación entre un componente padre y un componente hijo? ¿Y de un componente hijo a uno padre?
La comunicación entre un componente padre y un hijo se realiza mediante la transmisión de datos utilizando el decorador @Input para el componente hijo. Para la comunicación del hijo al padre, se utiliza el decorador @Output con eventos personalizados.

48. Ciclo de vida del componente
El ciclo de vida de un componente en Angular incluye eventos como ngOnInit, ngOnChanges, ngAfterViewInit, entre otros, que se ejecutan en diferentes etapas del ciclo de vida del componente.

49. ¿Qué son los Pipes en Angular?
Los Pipes en Angular son transformadores que modifican el formato de los datos antes de ser mostrados en la interfaz de usuario. Se utilizan para formatear fechas, números, cadenas, entre otros.

50. ¿Qué es RXJS? ¿En qué se diferencia de un patrón observador clásico?
RXJS es una biblioteca reactiva para JavaScript. Se diferencia del patrón observador clásico al ofrecer operadores y abstracciones para trabajar con secuencias de eventos asincrónicos de manera más cómoda y potente.

51. ¿Qué son los pipes en RXJS?
En RXJS, los pipes son operadores que se utilizan para manipular y transformar observables. Permiten encadenar operadores para realizar operaciones más complejas en las secuencias de eventos.

52. ¿Qué antipatrón vimos en RXJS? ¿Por qué es bueno tener el control de flujo con funciones como MergeMap o ConcatMap?
Un antipatrón común en RXJS es el "callback hell" cuando se anidan demasiados operadores subscribe. El control de flujo con funciones como mergeMap o concatMap proporciona una manera más clara y controlada de manejar la concurrencia y la secuencia de eventos en un flujo reactivo.

53. ¿Qué es el frontend y backend?
El frontend se refiere a la interfaz de usuario y la presentación de una aplicación, mientras que el backend se ocupa de la lógica de negocio, la gestión de datos y la interacción con la base de datos.

54. ¿Cuáles son los métodos tradicionales de un API REST?
Los métodos tradicionales de un API REST son GET (obtener información), POST (crear información), PUT (actualizar información), y DELETE (eliminar información).

55. ¿Qué es un API?
Un API (Interfaz de Programación de Aplicaciones) define cómo interactuar con un software o servicio, permitiendo la comunicación entre diferentes componentes de software.

56. ¿Cómo se llama la alternativa de REST más usada?
GraphQL es una alternativa a REST que permite a los clientes solicitar solo los datos que necesitan, evitando la sobre o subrecarga de datos.

57. ¿Cuáles son los 3 niveles de pruebas? ¿Cuáles son sus características?
Los 3 niveles de pruebas son:

Pruebas Unitarias: Se centran en probar una unidad aislada de código.
Pruebas de Integración: Verifican la interacción entre componentes o sistemas.
Pruebas de Aceptación: Evalúan si el sistema cumple con los requisitos del usuario.
58. ¿Qué es AAA en pruebas?
AAA (Arrange, Act, Assert) es un patrón utilizado en pruebas unitarias que consiste en organizar el estado inicial (Arrange), realizar la acción (Act) y verificar el resultado (Assert).

59. ¿Qué se debería probar al realizar testing? ¿Qué cualidades deberían tener mis pruebas?
Deberías probar todas las funcionalidades críticas de tu aplicación. Las pruebas deben ser repetibles, independientes, específicas, y proporcionar una cobertura adecuada para garantizar la robustez y la calidad del código.

60. ¿Qué es Mockito? ¿Cómo funciona? ¿Para qué sirve?
Mockito es un marco de prueba para Java que facilita la creación y el uso de objetos de prueba simulados (mocks) en pruebas unitarias. Permite simular el comportamiento de objetos y controlar las interacciones durante las pruebas.

61. ¿De qué formas se puede identificar un elemento web desde un software de testing E2E?
En las pruebas E2E, los elementos web se pueden identificar mediante selectores como ID, nombre, clases, XPath, o utilizando atributos específicos.

62. ¿Qué es el patrón Builder? ¿Qué problema soluciona?
El patrón Builder es un patrón de diseño que se utiliza para construir un objeto complejo paso a paso. Resuelve el problema de crear objetos con muchas configuraciones posibles al proporcionar una interfaz clara para la construcción.

63. ¿Qué es el patrón DTO? ¿Qué problema soluciona?
El patrón DTO (Data Transfer Object) se utiliza para transferir datos entre subsistemas de una aplicación. Resuelve el problema de transmitir solo la información necesaria y reducir el tráfico de red y la sobrecarga de datos.

64. ¿Qué es JWT? ¿Cómo funciona?
JWT (JSON Web Token) es un estándar abierto que define una forma compacta y autónoma de transmitir información entre partes como un objeto JSON. Consiste en tres partes: encabezado, carga útil y firma, y se utiliza para la autenticación y la información del usuario.

65. ¿Qué es CORS?
CORS (Cross-Origin Resource Sharing) es una política de seguridad que controla cómo los recursos web en una página web pueden ser solicitados desde otro dominio fuera del dominio del recurso actual.

66. ¿Qué prácticas de seguridad aprendimos?
Entre las prácticas de seguridad aprendidas se incluyen la validación de entrada, la gestión de sesiones seguras, el cifrado de contraseñas, la protección contra ataques de inyección, el manejo adecuado de CORS, la autenticación y autorización seguras, y el uso de tokens JWT para la transmisión segura de información.
----------------------------------------------------------------------------------
