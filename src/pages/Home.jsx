import { Link } from "react-router-dom";
import ContenedorGlobal from "../components/ContenedorGlobal";
import TarjetaPato from "../components/TarjetaPato";
import ducklyn from "../data/ducklyn";
import Slogan from "../assets/images/Slogan.png";

/**
* Página principal de la aplicación.
 * @returns Devuelve el componente <ContenedorGlobal> con el título "Nuestros Patos"
 */
function Home() {
  return (
    <ContenedorGlobal titulo="Nuestros Patos">   {/* Componente contenedor global con el título "Nuestros Patos" */ }
      <article>
        {/* He puesto para q en el móvil no tenga eese "carusel" */}
        <section className="hidden sm:relative sm:flex sm:justify-center sm:mb-8">
          <img
            src={Slogan}
            alt="Slogan de Ducklyn"
            className="w-full max-w-[48rem] h-auto object-contain rounded-2xl shadow-xl"
          />

          <section className="absolute inset-0 flex flex-col items-start justify-center px-6 max-w-[48rem] mx-auto">
            <p className="text-white font-bold font-baloo text-xl sm:text-2xl md:text-3xl mb-3 tracking-wider">
              ¡Chapotea con estilo!
            </p>

            <p className="text-white font-bold font-baloo text-xs sm:text-sm md:text-base leading-snug mb-6 tracking-wide">
              En Ducklyn fabricamos nuestros patos con plástico reciclado de
              alta calidad,
              <br />
              son seguros, resistentes y diseñados para durar,
              <br />
              porque creemos que la calidad también puede ser sostenible.
            </p>
            {/*Boton de conócenos que lleva a /patos (Se podría crear un "Sobre Nosotros" en un futuro*/}
            <section>
              <Link
                to="/patos"
                className="w-fit px-4 sm:px-6 bg-[#09207D] text-white font-bold font-baloo py-2 rounded-md shadow-lg hover:bg-[#031a51] transition-colors text-sm sm:text-base tracking-wide"
              >
                Conócenos
              </Link>
            </section>
          </section>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {ducklyn.slice(0, 8).map((pato) => (
            <Link key={pato.id} to={`/patos/${pato.id}`}>
              {/* Mostrar solo los primeros 8 patos gracias a slice*/}
              <TarjetaPato
                key={pato.id}
                nombre={pato.nombre}
                foto={pato.imagen}
              />
            </Link>
          ))}
        </section>
      </article>
    </ContenedorGlobal>
  );
}
export default Home;
