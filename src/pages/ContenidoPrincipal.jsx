import { Outlet } from "react-router-dom";
/**
 * Contenedor principal de la aplicación.
 * @returns Devuelve el elemento <main> que actúa como área principal de contenido,
 * Lo tengo en app.jsx como ruta principal y aquí se renderizan los componentes hijos según la ruta.
 */
function ContenidoPrincipal() {
  return (
    <main
      id="main-content"
      role="main"
      tabIndex="-1"
      className="min-h-screen bg-linear-to-br flex flex-col items-center justify-center p-8"
    >
      {/* Aquí se renderizarán los componentes hijos según la ruta, lo que cambia de la web (el "centro" de la web)*/}
      <Outlet />
    </main>
  );
}
export default ContenidoPrincipal;
