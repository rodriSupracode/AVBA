export const Volunteer = () => {
  return (
    <section id="voluntario" className="bg-white p-8">
      <h2 className="text-amber-500 text-center font-bold text-2xl mb-4">
        ¿Quieres ser voluntario?
      </h2>
      <div className="bg-[url('/volunteers2.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-96 rounded-2xl ">
        <a
          href="#contact"
          className=" backdrop-brightness-50 backdrop-blur-xs w-full h-full flex items-center rounded-2xl justify-center text-center text-white font-bold text-lg p-4 flex-col"
        >
          <p>
            Somos poca gente y siempre nos viene bien tener a más voluntarios.
            Buscamos a personas responsables con más de 13 años que nos pueden
            ayudar con:
          </p>
          <ul className="mt-8 list-volunter">
            <li>El cuidado y alimentación de nuestros gatos;</li>
            <li>La limpieza y mantenimiento de nuestra sede</li>
            <li>Recogidas solitarias de comida en tiendas tales como Kiwoko</li>
            <li>
              El transporte de animales (visitas al veterinario) y materiales
            </li>
            <li>Publicaciones en las redes sociales</li>
            <li>Solicitudes de ayudas y subvenciones</li>
            <li>Organización de eventos, y participación en ellos</li>
            <li>Recaudación de fondos</li>
            <li> ¡Y mil cosas más! </li>
          </ul>
          <p>
            ¿Te animas? {' '}
            <span className="text-amber-300 font-bold">
              ¡ponte en contacto con nosotros!
            </span>
          </p>
        </a>
      </div>
    </section>
  );
};
