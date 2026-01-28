import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import { useMemo } from "react";
import CardDuck from "../components/CardDuck";

import { usePatos } from "../hooks/usePatos";

function Ducks() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: patos, loading, error } = usePatos();

  const filteredPatos = useMemo(() => {
    if (!searchTerm) {
      return patos;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return patos.filter((pato) =>
      pato.nombre.toLowerCase().includes(lowerCaseSearchTerm),
    );
  }, [searchTerm, patos]);

  return (
    <>
      <section>
        <h2 className="contenedor__titulo mb-2">Nuestros Patos</h2>
        <p className="contenedor__texto-largo mb-6">
          Coloridos, divertidos y coleccionables
        </p>
      </section>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Buscar patos por nombre..."
      />

      {loading && (
        <section className="flex justify-center items-center h-64 mt-8">
          <p className="contenedor__texto-normal">
            Cargando patos desde la api...
          </p>
        </section>
      )}

      {error && (
        <section className="flex justify-center items-center h-64 mt-8">
          <p className="contenedor__texto-normal text-red-600">
            Error al cargar los patos: {error}
          </p>
        </section>
      )}

      {!loading && !error && (
        <section aria-label="Listado completo de patos" className="grid-patos">
          {filteredPatos.length > 0 ? (
            filteredPatos.map((pato) => (
              <Link
                key={pato.id}
                to={`/patos/${pato.id}`}
                aria-label={`Ver detalles de ${pato.nombre}`}
              >
                <CardDuck
                  nombre={pato.nombre}
                  foto={pato.imagen}
                  descripcion={pato.descripcion}
                  precio={pato.precio}
                />
              </Link>
            ))
          ) : (
            // Mensaje si no hay resultados
            <p className="col-span-full text-center text-gray-500 p-4">
              No se encontraron patos con el término "{searchTerm}".
            </p>
          )}
        </section>
      )}
    </>
  );
}

export default Ducks;
