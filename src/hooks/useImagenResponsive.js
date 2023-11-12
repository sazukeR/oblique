import { useState, useEffect } from "react";

// Custom hook para manejar la lógica de la imagen responsive
const useImagenResponsive = (imagenPathGrande, imagenPathPequeno) => {
 const [imagenPath, setImagenPath] = useState("");

 // Función para manejar el evento de redimensionamiento de la ventana
 const handleResize = () => {
  // Obtener el ancho de la ventana
  const windowWidth = window.innerWidth;

  // Actualizar el estado de la imagen dependiendo del ancho de la ventana
  if (windowWidth >= 600) {
   setImagenPath(imagenPathGrande);
  } else {
   setImagenPath(imagenPathPequeno);
  }
 };

 // Agregar el evento de redimensionamiento cuando el componente se monta
 useEffect(() => {
  handleResize(); // Llamar a la función para establecer el estado inicial

  // Agregar el evento de redimensionamiento
  window.addEventListener("resize", handleResize);

  // Limpiar el evento al desmontar el componente
  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, [imagenPathGrande, imagenPathPequeno]); // Reacciona a cambios en los paths de las imágenes

 return imagenPath;
};

export default useImagenResponsive;
