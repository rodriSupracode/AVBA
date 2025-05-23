export const Team = () => {
  return (
    <section id="equipo" className="bg-white p-8">
      <h2 className="text-amber-500 text-center font-bold text-2xl mb-8">
        ¡Un equipo maravilloso!
      </h2>
      <div className="bg-[url('/volunteers.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-96 rounded-2xl ">
        <a
          href="#contact"
          className="backdrop-blur-xs backdrop-brightness-50 w-full h-full flex items-center rounded-2xl justify-center text-center text-white font-bold text-lg p-4 flex-col"
        >
          <p>
            Somos un grupo pequeño de personas concienciadas de todas edades que
            quieren ayudar a los animales abandonados. Algunos somos andaluces
            de toda la vida, pero también contamos con voluntarios de Italia,
            Austria, Reino Unido e incluso Australia.
          </p>
          <p className="mt-8">¿Te animas a juntarte?</p>
          <p>
            Siempre nos viene bien tener a más gente, así que{' '}
            <span className="text-amber-300 font-bold">
              ¡ponte en contacto con nosotros!
            </span>
          </p>
        </a>
      </div>
    </section>
  );
};
