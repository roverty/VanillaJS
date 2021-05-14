# ¿Qué es HTML y CSS?

- __HTML__: Es un lenguaje de marcado usado para decirle a tu navegador cómo estructurar las páginas web que visitas. No es un lenguaje de programación.

- __CSS__: Es un lenguaje que nos permite crear páginas web con un diseño agradable para los usuarios. Tampoco es un lenguaje de programación.

## HTML

### Etiquetas en HTML
Una etiqueta es un elemento para darle instrucciones al navegador. Se componen principalmente de:
- Etiqueta de apertura: Declaramos la etiqueta para que el navegador la pueda interpretar. Ej. "Pon un encabezado" <h1>
- Contenido: Es el cuerpo de la etiqueta usuarlemte incluimos texto y otros elementos. Ej. Coloca "I'm Learnign HTML".
- Etiqueta de cierre: Indicamos que finaliza la etiqueta. Es la misma a la de cierre con la diferencia de un slah "/" Ej. "Aquí termina el encabezado" </h1>

En la etiquta de apertura también puedo colocar atributos, por ejemplo, para identificar mi etiqueta de otras.

### Etiquetas más comunes

- DOCTYPE: necesaria para que todos los navegadores interpreten nuestro código de la misma manera. Indicamos qué version de HTML vamos a ocupar.
- html: es la etiqueta principal, aquí va todo el contenido (Similar a main en programación)
- head: contiene la etiqueta head para metadatos, links para acceder a los estilos, tipografía, etc de la aplicación.
- meta: contiene algunos metadatos, datos sobre nuestra página, va dentro de la etiqueta head.
- title: definimos el título de nuestra página
- body: sólo debe haber una etiqueta de apertura y una de cierre en toda la página, aquí va el contenido principal.

#### Etiquetas semánticas
- header: Aquí colocamos la cabecera, usualmente el logo, titulo y barra de navegación de nuesta página.
- nav: la usamos para los enlaces de navegación.
- article: por ejemplo un artículo de noticias.
- section: secciones de nuestra página, por ejemplo. Tendencias, deportes, espectaculos, etc.
- aside: El contendio de esa etiqueta esta relacionado indirectamente al contenido principal, comunmente se muestran como barras laterales y generalmente se coloca anuncios en ellas.
- footer: pare final de la página, normalmente colocamos información de contacto, redes sociales, políticas de privacidad, etc.
- h1, h2, h3, h4, h5, h6: Las utilizamos para agrear títulos y subtítulos en la página. Los números representan el nivel de importancia siendo 1 el de mayor y 6 el de menor.
- div: es de las etiquetas más utilizadas, es un contenedor genérico.
- p: nos permite agregar un párrafo.
- button: nos permite incluir botones.
- a: se utiliza para colocar enlaces.
- ul: se utiliza para colocar una lista desordenada.
- li: utilizado para incluir los items de la lista.
- form: usado para crear formularios.

#### Etiquetas vacías
- img: la utilizamos para incluir imágenes
- input: Es un campo para que el usuario ingrese datos.
- br: Nos permite hacer saltos de línea.
- hr: nos muestra una división, generalmente usada en cambios de sección.


## CSS
### Estilos
Los estilos en CSS se componen de:
- Selector: sirve para hacer referencia a mi elemento en HTML que quiero estilizar.
- Propiedad: es el tipo de estilo que quiero darle al elemento.
- Valor: estilo que tomará el elemento con base en cierta propiedad.

Ejemplo:
```css
h1 {
	font-family: sans-serif;
}
```

- h1: selector
- font-family: propiedad
- sans-serif: valor

### Tipos de selectores
- \*: el selector asterisco afecta a todos los elementos.
- Tipo: hacemos referencia a ellos mediante la etiqueta. Ej. h1, body, span, etc.
- Clase: hacemos referencia a un elemento siempre y cuando éste tenga como atributo una clase. Ej. <h1 class="header" ></h1>. El nombre de la clase es "header".
- ID: similar a la clase con la diferencia de que puedo tener varios elementos con la misma clase, con el ID sólo puedo tener un elemento.
- Pseudo clases: nos permites ser más específico en que elemento o partes de nuestro elemento queremos estilizar.


### Modelo de caja
Todos los elementos en HTML tienen el modelo de caja que se compone por:
- margin: margen de nuestro elemento (exterior).
- padding: margen de nuestro elemento (interior).
- border: borde del elemnto.
- contenido.

