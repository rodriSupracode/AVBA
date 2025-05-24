import Image from 'next/image';

export const Donations = () => {
  const donations = [
    {
      logo: '/teaming_logo.jpg',
      alt: 'Teaming',
      title: 'Teaming',
      description: (
        <a
          href="https://www.teaming.net/avbaanimales-grupo"
          target="_blank"
          className="text-gray-800 underline font-bold md:text-base text-xs"
        >
          Desde 1 € al mes
        </a>
      ),
      imageSize: 30,
    },
    {
      logo: '/Bizum.svg',
      alt: 'Bizum',
      title: 'Bizum',
      imageSize: 20,
      description:
        '684173059 o con el código 06382 en la sección de "Donar" de la aplicación',
    },
    {
      logo: '/paypal.png',
      alt: 'PayPal',
      title: 'PayPal',
      imageSize: 30,
      description: 'avba.lachar@gmail.com',
    },
    {
      logo: '/caixabank.png',
      alt: 'CaixaBank',
      title: 'Transferencia bancaria',
      imageSize: 25,
      description: 'IBAN: ES44 2100 1190 7002 0016 6195     SWIFT: CAIXESBBXXX',
    },
  ];

  return (
    <section
      id="dona"
      className="bg-[url('/donations.png')] bg-contain bg-repeat w-full flex flex-col items-center justify-center relative md:p-8 p-4"
    >
      <div className="bg-[rgba(255,255,255,0.85)] mx-auto rounded shadow-xl p-4 md:px-8 px-4 h-full w-full">
        <h1 className="text-2xl font-bold text-center">
          ¿Cómo puedo hacer una donación?
        </h1>
        <p className="font-light text-justify text-lg mt-4">
          La Asociación de Voluntarios por el Bienestar Animal de Láchar y
          Peñuelas es una entidad sin ánimo de lucro con muy pocos recursos. POR
          DESGRACIA, RESCATAR ANIMALES CUESTA MUY CARO En 2023, gastamos unos
          <span className="text-amber-500 font-bold px-2">35.000€</span> solo en
          veterinarios, y cada mes nuestros gatos comen alrededor de 200kg de
          pienso. También necesitan arena, mantas, rascadores, juguetes y mil
          otras cosas para tener una vida digna y feliz.
        </p>
        <p className="text-amber-500 font-bold px-2 text-center mt-4">
          SIN DONACIONES, NO PODEMOS SEGUIR AYUDANDO A GATOS ABANDONADOS
        </p>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {donations.map((donation) => (
            <div
              key={donation.title}
              className="flex flex-row items-start justify-start gap-2 bg-amber-50 md:p-2 p-1 rounded-lg shadow-md"
            >
              <Image
                src={donation.logo}
                alt={donation.alt}
                width={donation.imageSize}
                height={donation.imageSize}
                className="rounded"
              />
              <div>
                <h1 className="font-light text-xl">{donation.title}</h1>
                <p className="text-xs md:text-base font-medium">
                  {donation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="font-light text-justify text-lg mt-4">
          Si quieres ayudar de alguna otra manera (por ejemplo, como voluntario
          o con una compra directa de comida, arena, etc), ponte en contacto con
          nosotros.
        </p>
        <p className="font-bold text-amber-500 text-center text-xl mt-2">
          ¡Muchas gracias!
        </p>
      </div>
    </section>
  );
};
