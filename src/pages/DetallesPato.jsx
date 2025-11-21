import { useParams, useNavigate } from "react-router-dom";
import ducklyns from "../data/ducklyn";
/**
 * Estructura de la página de detalles del pato
 * @returns Detalles de un pato seleccionado
 * Lo uso en app.jsx en la ruta /patos/:id
 */
function DetallesPato() {
  {/* Obtener el id del pato desde los parámetros de la URL */}
  const { id } = useParams();
  {/* Hook para navegar entre páginas */}
  const navigate = useNavigate();

  {/* Buscar el pato correspondiente al id */}
  const pato = ducklyns.find((pato) => pato.id === parseInt(id));
  if (!pato) {
    return <p>Pato no encontrado</p>;
  }
  return (
    <>
      <article className="max-w-2xl mx-auto p-4 space-y-2 sm:space-y-4">
        <section className="flex items-center justify-between mb-4">
          <h1 className="contenedor__titulo">{pato.nombre}</h1>
        </section>

        {/*Centrar la imagen (mx-auto) y el texto */}
        <section className="text-end">
          <img
            src={pato.imagen}
            alt={`Imagen de ${pato.nombre}`}
            className="mx-auto w-40 sm:w-64 md:w-72 lg:w-80 h-auto object-contain rounded"
          />
        </section>

        {/* Categoria del pato en negrita  != para que se ponga en negrita¡ ya que en el contenedor__texto... no lo tengo así*/}
        <section className="text-left space-y-1 sm:space-y-2">
          <p className="contenedor__texto-largo !font-bold">{pato.categoria}</p>
          <p className="contenedor__texto-largo ">{pato.descripcion}</p>
          <p className="contenedor__precio !text-base">
            {pato.precio}
          </p>
        </section>

        <section className="my-4">
          {/* Botón para volver a la página anterior (Gracias al -1 volvemos a la pág anterior*/}
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-[#09207d] text-white rounded"
          >
            Volver
          </button>
        </section>

        <p className="contenedor__texto-normal">{pato.detalles}</p>
      </article>
    </>
  );
}
export default DetallesPato;
