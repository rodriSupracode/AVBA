export const Team = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) => {
  return (
    <section
      id="equipo"
      className="bg-gradient-to-br from-white to-gray-50 py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <h2 className="text-amber-600 text-center font-extrabold text-4xl md:text-5xl mb-12 relative z-10 animate-fade-in-down">
        {title}
        <span className="block w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full animate-grow-width"></span>
      </h2>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image})`,
        }}
        className="bg-cover bg-center bg-no-repeat w-full min-h-[800px] md:min-h-[550px] lg:min-h-[600px] rounded-3xl shadow-2xl relative overflow-hidden transform transition-transform duration-500 ease-in-out
              md:group md:hover:scale-[1.02]"
      >
        <a
          href="#contact"
          className="absolute inset-0 flex items-center justify-center text-center text-white p-8 md:p-12 transition-all duration-500 ease-in-out
                md:hover:bg-black/20 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75"
        >
          {/* ¡CORRECCIÓN AQUÍ! */}
          {/* Este div ya no tiene las clases de ocultamiento por defecto */}
          <div
            className="flex flex-col items-center max-w-3xl mx-auto
                   opacity-100 transform translate-y-0 // Siempre visible y sin desplazamiento inicial
                  transition-all duration-500 ease-in-out"
          >
            <div
              className="font-light text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-md animate-fade-in-up"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <p className="mt-10 text-2xl md:text-3xl font-extrabold drop-shadow-lg animate-fade-in-up delay-200">
              ¿Listo para colaborar?{' '}
              <span className="text-amber-300 hover:text-amber-200 transition-colors duration-300 transform hover:scale-105 inline-block cursor-pointer">
                ¡Hablemos de tu proyecto!
              </span>
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};
