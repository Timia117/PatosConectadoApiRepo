/**
 * Componente ContenedorGlobal
 * @param {*} param0 Se le pasa un objeto con las propiedades titulo y children (Está en home.jsx)
 * @returns Devuelve un contenedor global con un título opcional y el contenido hijo.
 */
function ContenedorGlobal({ titulo, children }) {
  return (

      <section
        aria-labelledby="main-section-title"
        className="w-full max-w-7xl"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="contenedor__titulo mb-2"
          >
            {titulo}
          </h1>
        )}
        {children}
      </section>
   
  );
}

export default ContenedorGlobal;
