export const getImageUrl = (path) => {
  return new URL(`./assets/${path}`, import.meta.url).href;
};

// esta funcion es para obtener la url de la imagen que se encuentra en la carpeta assets
