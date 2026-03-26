import { Link, useLocation } from "react-router-dom";
import { Slash, ChevronRight, Home } from "lucide-react";

// Interfaz para la estructura de las ligas
interface Liga {
  pathto: string;
  name: string;
}

export default function Breadcrumb() {

  const location = useLocation();

  // Rutas que vamos a ocultar en el breadcrumb ya que son prefijos
  const rutasOcultas = ["usuario", "auth"];
  
  // Deconstruimos ligas como "usuario/home/..."
  const generarLigas = () =>{
    const pathnames = location.pathname.split("/").filter((x) => x);
    let currentPath = "";
    const ligas: Liga[] = pathnames.map(segment => {
      currentPath += `/${segment}`;
      return { pathto: currentPath, name: segment };
    });
    
    return ligas.filter(liga => !rutasOcultas.includes(liga.name));
  };

  const ligas = generarLigas();

  // Función de ayuda para limpiar las clases condicionales
  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    return `cursor-pointer p-4 rounded-md transition-colors ${
      isActive
        ? "bg-[#8AD4FF] hover:text-black" 
        : "hover:bg-[#8AD4FF] hover:text-black"
    }`;
  };

  return (
    <div className="flex" aria-label="Breadcrumb">
      <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-[#2E4053]">
        {/* Recorremos las ligas para construir el breadcrumb */}
        {ligas.map((liga, index) => {
          const isFirst = index === 0;
          const isLast = index === ligas.length - 1;
          const nameCapitalized = liga.name.charAt(0).toUpperCase() + liga.name.slice(1);
          return (
            <li 
              key ={liga.pathto} 
              className={isFirst ? "inline-flex items-center" : ""}
              aria-current={isLast ? "page" : undefined}
            >
              <div className={`flex items-center ${!isFirst ? "space-x-1.5" : ""}`}>
                
                {/* Separador (solo se muestra a partir del segundo elemento) */}
                {!isFirst && (
                  <ChevronRight className="w-4 h-4 text-gray-400 rtl:rotate-180" />
                )}

                {/* Si es el último elemento, mostramos texto plano (span) */}
                {isLast ? (
                  <span className="inline-flex items-center text-sm font-medium text-gray-500 bg-[#C9EDFF] p-1 rounded-md">
                    {/* El ícono de Home solo va en el primer elemento */}
                    {isFirst && <Home className="w-4 h-4 me-1.5" />}
                    {nameCapitalized}
                  </span>
                ) : (
                  /* Si no es el último, mostramos el Link */
                  <Link
                    to={liga.pathto}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {isFirst && <Home className="w-4 h-4 me-1.5" />}
                    {nameCapitalized}
                  </Link>
                )}

              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
