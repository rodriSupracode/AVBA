export const Help = ({
  title,
  description,
  socialNetworksTitle,
  helpList,
  socialNetworksDescription,
}: {
  title: string;
  description: string;
  socialNetworksTitle: string;
  socialNetworksDescription: string;
  helpList?: { label: string; link: string }[];
}) => {
  return (
    <section id="ayuda" className="overflow-hidden">
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 md:px-8 lg:px-16 shadow-inner">
        <h2 className="text-amber-600 text-center font-extrabold text-4xl md:text-5xl mb-8 relative z-10 animate-fade-in-down">
          {title}
          <span className="block w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full animate-grow-width"></span>
        </h2>
        <p className="text-center font-light text-xl md:text-2xl mt-8 mb-10 max-w-3xl mx-auto leading-relaxed text-gray-700 animate-fade-in-up">
          {description}
        </p>

        <div className="flex flex-col md:flex-row justify-center align-middle gap-6 mt-8 mb-8 max-w-6xl mx-auto">
          {helpList?.map((item, index) => (
            <a key={index} href={item.link} className="block w-full">
              <button className="bg-amber-300 hover:bg-amber-400 text-white h-full rounded-xl p-5 w-full shadow-lg cursor-pointer font-bold text-xl md:text-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-200 focus:ring-opacity-75">
                {item.label}
              </button>
            </a>
          ))}
        </div>

        {/* CTA for fostering (el resto del código es el mismo) */}
        <a href="#contact" className="block mt-12 max-w-4xl mx-auto">
          <button className="bg-amber-400 hover:bg-amber-500 rounded-2xl p-6 w-full shadow-xl cursor-pointer text-white transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75 group">
            <h2 className="font-extrabold text-white text-3xl md:text-4xl mb-3 group-hover:underline group-hover:underline-offset-4 decoration-2 decoration-white animate-fade-in-up">
              ¡Puedes ser casa de acogida!
            </h2>
            <p className="text-center font-light text-lg md:text-xl leading-relaxed mt-2 animate-fade-in-up delay-100">
              Siempre hacen falta personas responsables que pueden tener un
              animal en casa hasta que le encontremos una adopción permanente.
              Cubrimos todos los gastos, solo pedimos que la acogida lo cuide y
              le de mucho amor.
            </p>
            <p className="font-bold text-lg md:text-xl mt-4 text-amber-100 animate-fade-in-up delay-200">
              Ponte en contacto con nosotros para saber más.
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </p>
          </button>
        </a>
      </div>

      <div className="bg-gray-900 text-white py-12 px-4 md:px-8 lg:px-16 shadow-xl">
        <h2 className="text-center font-extrabold text-3xl md:text-4xl text-amber-300 mb-4 animate-fade-in-down">
          {socialNetworksTitle}
        </h2>
        <p
          className="text-center font-light text-lg md:text-xl mt-4 max-w-2xl mx-auto text-gray-300 animate-fade-in-up"
          dangerouslySetInnerHTML={{
            __html: socialNetworksDescription,
          }}
        />
        <hr className="border-amber-400 mt-8 mx-auto w-2/3 md:w-1/2 lg:w-1/3 animate-grow-width" />
      </div>
    </section>
  );
};
