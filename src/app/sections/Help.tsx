export const Help = () => {
  return (
    <section id="ayuda">
      <div className="bg-amber-100 p-8">
        <h2 className="text-amber-500 text-center font-bold text-2xl">
          ¿Cómo puedo ayudaros?
        </h2>
        <p className="text-justify font-light text-lg mt-4">
          La Asociación de Voluntarios por el Bienestar Animal de Láchar y
          Peñuelas es una entidad sin ánimo de lucro. Dependemos de donaciones,
          voluntarios, casas de acogida y seguidores en las redes sociales para
          seguir ayudando a los animales abandonados.
        </p>
        <div className="flex gap-4 mt-4 mb-4">
          <a href="#dona" className="w-full">
            <button className="bg-amber-200 rounded-lg p-5 w-full shadow-2xl cursor-pointer  hover:bg-amber-300">
              Dona
            </button>
          </a>
          <a href="#voluntario" className="w-full">
            <button className="bg-amber-200 rounded-lg p-5 w-full shadow-2xl cursor-pointer  hover:bg-amber-300">
              Hazte Voluntario
            </button>
          </a>
        </div>

        <a href="#contact">
          <button className="bg-amber-200 rounded-lg p-5 w-full shadow-xl cursor-pointer  hover:shadow-2xl mt-1">
            <h2 className="font-medium text-amber-500 text-xl">
              PUEDES SER CASA DE ACOGIDA
            </h2>
            <p className="text-justify font-light text-lg">
              Siempre hacen falta personas responsables que pueden tener un
              animal en casa hasta que le encontremos una adopción permanente.
              Cubrimos todos los gastos, solo pedimos que la acogida lo cuide y
              le de mucho amor.
            </p>
            <p className="font-bold text-lg">
              Ponte en contacto con nosotros para saber más.
            </p>
          </button>
        </a>
      </div>
      <div className="bg-gray-800 text-white p-8">
        <h2 className="text-center font-light text-2xl">
          PUEDES SEGUIRNOS EN LAS REDES
        </h2>
        <p className="text-center font-light text-lg mt-1 pb-4">
          Dar un &quot;me gusta&quot; y compartir nuestras publicaciones (tanto
          si es un gato en adopción como una factura que tenemos que pagar, por
          ejemplo) nos ayuda a llegar a un público más amplio.
        </p>
        <hr className="text-amber-300 mt-2 mx-8" />
      </div>
    </section>
  );
};
