1.- En este proyecto he creado una datei con el nombre utils.js que contiene la funcion con  la cual podriamos obtener de una manera mas dinamica las imagenes de la carpeta     assets.
    *Flexibilidad: La función permite construir URLs de imágenes de forma dinámica, lo que puede ser útil si las rutas de las imágenes son relativas y pueden variar.

    *Portabilidad: Utiliza import.meta.url para obtener la ubicación del archivo actual, lo que hace que la función sea portátil y no dependa de rutas de archivos absolutas.

    *Mantenibilidad: Si las rutas de las imágenes cambian en el futuro, solo necesitarías actualizar la función getImageUrl en lugar de todas las referencias a las imágenes en tu código.

 2.-En vite.config.js he anadido el codigo   css: {modules:{ localsConvention: "camelCase",}},
    Esta opción determina cómo se convierten los nombres de las clases CSS en el archivo CSS modular a nombres de variables JavaScript en el código. En este caso, se usa "camelCase" como convención, lo que significa que los nombres de las clases se convertirán a camelCase en el código JavaScript. Por ejemplo, una clase CSS como .container-fluid se convertirá en styles.containerFluid en el código JavaScript.

  3.-En el archivo vars.css ,Al definir estas variables, se facilita la personalización y mantenimiento de la apariencia de la aplicación, ya que puedes ajustar fácilmente los colores y fuentes en un solo lugar y estos cambios se reflejarán automáticamente en toda la aplicación donde se utilicen estas variables.  

  4.- En el index.css he reseteado los estilos por defecto de los navegadores, lo que garantiza que los estilos de la aplicación se apliquen de manera consistente en todos los navegadores.

  5.-En el archivo index.html he añadido el meta viewport para asegurarme de que la aplicación se vea bien en dispositivos móviles y otros dispositivos con diferentes tamaños de pantalla.

  6.-Cree el componentey Navbar.js con su respectivo Navbar.css , el cual contiene la barra de navegación de la aplicación. Este componente se puede reutilizar en toda la aplicación para mostrar una barra de navegación consistente en todas las páginas.

  7.- En cada uno de los modulos css importamos la variable css que creamos en el archivo vars.css, lo que nos permite utilizar estas variables en los estilos de cada módulo.

  8.- Con la ayuda de Canva he creado mis background para darle un estilo unico a los diferentes componentes. Aqui tuve que jugar un poco en backgroun-image en lo que es background- position con los pixeles y asi puedan concordar tanto en Hero y about section.
  
