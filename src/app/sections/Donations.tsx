import { CiBank } from 'react-icons/ci';
import { FaPaypal } from 'react-icons/fa';
import Image from 'next/image';

export const Donations = () => {
  return (
    <section
      id="dona"
      className="bg-[url('/donations.png')] bg-contain bg-repeat w-full flex flex-col items-center justify-center relative p-8"
    >
      <div className="bg-[rgba(255,255,255,0.85)] mx-auto rounded shadow-xl p-4 px-8 h-full w-full">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-row items-center justify-center gap-2 text-xl ">
            <FaPaypal />
            PayPal:
            <div className="text-base bg-white p-1 h-full rounded-lg text-center flex items-center w-full justify-center">
              avba.lachar@gmail.com
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 ">
            <div className="flex flex-row items-center gap-2 text-xl w-36">
              <Image src="/Bizum.svg" alt="bizum" width={20} height={20} />
              Bizzum:
            </div>
            <div className="text-base bg-white p-1 h-full rounded-lg text-center flex items-center w-full justify-center">
              684173059 o con el código 06382 en la sección de «Donar» de la
              aplicación
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 text-xl">
            <CiBank className="text-3xl" />
            Transferencia:
            <div className="text-base bg-white p-1 h-full rounded-lg text-center flex flex-row items-center w-full justify-center ">
              IBAN: ES44 2100 1190 7002 0016 6195 <br /> SWIFT: CAIXESBBXXX
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-2 ">
            <div className="flex flex-row items-center gap-2 text-xl w-44">
              <Image
                src="/teaming_logo.jpg"
                alt="bizum"
                width={30}
                height={30}
                className="rounded"
              />
              Teaming:
            </div>
            <div className="text-base bg-white p-1 h-full rounded-lg text-center flex items-center w-full justify-center">
              <a
                href="https://www.teaming.net/avbaanimales-grupo"
                target="_blank"
                className="text-amber-400 underline font-bold text-xl"
              >
                Desde 1 € al mes
              </a>
            </div>
          </div>
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
