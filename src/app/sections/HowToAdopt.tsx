import { FaArrowRightLong } from 'react-icons/fa6';
export const HowToAdopt = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <section
      id="adopta"
      className="bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4 md:px-8 lg:px-16 overflow-hidden relative"
    >
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')`,
        }}
      ></div>

      <div className="relative z-10 bg-white shadow-2xl rounded-3xl p-6 md:p-12 transform transition-transform duration-700 hover:scale-[1.005] ease-in-out group">
        <h2
          className="text-amber-400 text-center font-extrabold text-4xl md:text-5xl mb-8 relative leading-tight animate-fade-in-down" // Título principal más pequeño
        >
          <span dangerouslySetInnerHTML={{ __html: title }}></span>
          <span className="block w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full animate-grow-width origin-center"></span>{' '}
        </h2>

        <div className="flex flex-col lg:flex-row mt-10 gap-8 items-center">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${image})`,
            }}
            className="lg:flex-1 h-[300px] md:h-[500px] lg:h-[650px] w-full bg-cover bg-center bg-no-repeat rounded-2xl shadow-xl flex-shrink-0
                  transform transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
          ></div>

          <div
            className="lg:flex-1 text-gray-800 font-light text-lg md:text-xl p-1 md:p-4 flex flex-col gap-6 leading-relaxed animate-fade-in-up" // Texto de descripción más pequeño
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up delay-200">
          <a href="#contact" className="inline-block">
            <button className="inline-flex items-center justify-center cursor-pointer bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg md:text-xl py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-400 focus:ring-opacity-75">
              ¡Quiero adoptar un compañero!
              <FaArrowRightLong />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
