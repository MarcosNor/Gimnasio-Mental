import { Link, useLocation, useMatches } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useCategorias } from "@/hooks/useCategorias";
import { obtenerNombreVisible } from "@/lib/utils";

// Interfaz para la estructura de las ligas
interface Liga {
  pathto: string;
  name: string;
}

export default function Breadcrumb() {


  // No borro esto porque al quitarlo genera errores jaja
  const { categorias, isLoading, error } = useCategorias()
  const matches = useMatches();
  const crumbs = matches;

  // Rutas que vamos a ocultar en el breadcrumb ya que son prefijos
  const rutasOcultas = ["usuario", "auth"];
  
  // Deconstruimos ligas anidadas como "usuario/home/..."
  const generarLigas = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    let currentPath = "";
    const ligas: Liga[] = pathnames.map(segment => {
      currentPath += `/${segment}`;
      return { pathto: currentPath, name: segment };
    });
    
    // regresamos las ligas sin las ocultas
    return ligas.filter(liga => !rutasOcultas.includes(liga.name));
  };


  const ligas = generarLigas();

  return (
    <div className="flex" aria-label="Breadcrumb">
      <ul className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse text-[#2E4053]">
        {/* Recorremos las ligas para construir el breadcrumb */}
        {ligas.map((liga, index) => {
          const isFirst = index === 0;
          const isLast = index === ligas.length - 1;
          const displayName = obtenerNombreVisible(liga.name, categorias) || liga.name;
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
                    {displayName}
                  </span>
                ) : (
                  /* Si no es el último, mostramos el Link */
                  <Link
                    to={liga.pathto}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {isFirst && <Home className="w-4 h-4 me-1.5" />}
                    {displayName}
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
