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
    <section id="ayuda">
      <div className="bg-amber-100 md:p-8 p-4">
        <h2 className="text-amber-500 text-center font-bold text-2xl">
          {title}
        </h2>
        <p className="text-justify font-light text-lg mt-4">{description}</p>
        <div className="flex gap-4 mt-4 mb-4">
          {helpList?.map((item, index) => (
            <a key={index} href={item.link} className="w-full">
              <button className="bg-amber-200 h-full rounded-lg p-3 w-full shadow-xl cursor-pointer font-light text-xl hover:shadow-2xl">
                {item.label}
              </button>
            </a>
          ))}
        </div>

        <a href="#contact">
          <button className="bg-amber-200 rounded-lg p-3 w-full shadow-xl cursor-pointer  hover:shadow-2xl mt-1">
            <h2 className="font-medium text-black text-xl">
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
          {socialNetworksTitle}
        </h2>
        <p className="text-center font-light text-lg mt-1 pb-4">
          {socialNetworksDescription}
        </p>
        <hr className="text-amber-300 mt-2 mx-8" />
      </div>
    </section>
  );
};
