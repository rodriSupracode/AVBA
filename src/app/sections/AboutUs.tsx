import Image from 'next/image';

export const AboutUs = () => {
  return (
    <section
      className="flex flex-row items-center justify-end w-full h-screen bg-white"
      id="sobre-nosotros"
    >
      <Image
        src="/avba-refugee.jpeg"
        alt="refugio"
        height={1000}
        width={1000}
        className="!h-full w-10/12 rounded shadow-2xl about-us-image md:block hidden"
      />
      <Image
        src="/avba-refugee.jpeg"
        alt="refugio"
        height={1000}
        width={1000}
        className="!h-full shadow-2xl block bg-cover bg-no-repeat md:hidden"
      />
      <div className="absolute md:w-96 md:left-2 px-2 md:px-0 w-full top-0 pt-24 md:top-auto">
        <div className="md:bg-white backdrop-blur-xs md:backdrop-blur-none rounded-lg shadow-xl p-8 flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold text-amber-100  md:text-amber-300 mb-4">
            ¿QUIÉNES SOMOS?
          </h1>
          <p className="md:text-gray-700 text-white text-lg mb-4">
            La Asociación de Voluntarios por el Bienestar Animal de Láchar y
            Peñuelas (AVBA) es una entidad sin ánimo de lucro fundada en 2021.
            Su objetivo es ayudar a los animales abandonados en los pueblos de
            Láchar y Peñuelas, que están situados a unos 20km de Granada, en el
            sur de España.
          </p>
        </div>
      </div>
    </section>
  );
};
