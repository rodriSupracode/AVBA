export const HowToAdopt = () => {
  const title = 'Quiero adoptar un gato…';
  const title2 = '¿Cómo se hace?';
  const text1 =
    'Albergamos alrededor de <span class="highlight">50 gatos</span> de rescate que necesitan un hogar y familia permanentes. Tenemos machos y hembras, gatitos jóvenes y abuelitos, además de un montón de colores, tamaños y personalidades. Por lo tanto, siempre que sea posible, recomendamos que el primer paso sea que el adoptante venga a conocerlos en persona. Esta visita también nos permite a conocer al adoptante, comprobar que la adopción será conforme con nuestros requisitos, y ayudar con la elección del gato. En el caso de que no sea posible que el adoptante venga de visita, mandamos un cuestionario. Una vez que el adoptante haya elegido, se hace una cita con nuestros veterinarios para una última revisión del gato y para ponerle microchip. Para formalizar la adopción, el adoptante firma un contrato en el cual se compromete a cuidar al animal etc.';
  const text2 =
    'Todos nuestros gatos vienen vacunados, desparasitados, testados por leucemia e inmunodeficiencia (tras una cuarentena mínima de 28 días) y esterilizados (en el caso de gatitos demasiados jóvenes para esterilización, ésta será obligatoria antes de que el animal cumpla seís meses de edad y, en el caso de hembras, antes del primer celo). El gato es <span class="highlight">100% gratis</span>, pero siempre pedimos que el adoptante aporte 100€ para cubrir una parte de los gastos veterinarios.';

  const text3 =
    'En el caso de gatos mayores de cinco años, o animales con enfermedades crónicas u otra discapacidad, la contribución del adoptante es opcional.';

  return (
    <section id="adopta">
      <div className="min-h-96 bg-amber-100 p-4 md:p-8">
        <div className="bg-white shadow-md rounded-lg p-8 z-40">
          <div className="flex md:flex-row flex-col items-center justify-center gap-4">
            <h1 className="text-2xl text-center">{title}</h1>
            <h2 className="text-2xl text-amber-400 font-bold">{title2}</h2>
          </div>
          <div className="flex lg:flex-row flex-col mt-4 gap-4 items-center">
            <div className="lg:flex-1/2 h-80 md:h-[650px] w-full bg-[url('/cat-main.jpg')] bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl"></div>
            <div className="lg:flex-1/2 text-justify align-middle font-light text-lg p-1 md:p-4 flex flex-col gap-4">
              <p dangerouslySetInnerHTML={{ __html: text1 }} />
              <p dangerouslySetInnerHTML={{ __html: text2 }} />
              <p dangerouslySetInnerHTML={{ __html: text3 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
