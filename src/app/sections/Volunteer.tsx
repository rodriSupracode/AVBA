export const Volunteer = ({
  title,
  description,
  image,
  list,
}: {
  title: string;
  description: string;
  image?: string;
  list?: string;
}) => {
  return (
    <section id="voluntario" className="bg-white md:p-8 p-4">
      <h2 className="text-amber-500 text-center font-bold text-2xl mb-4">
        {title}
      </h2>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className=" bg-cover bg-center bg-no-repeat w-full min-h-96 rounded-2xl "
      >
        <a
          href="#contact"
          className=" backdrop-brightness-50 backdrop-blur-xs w-full h-full min-h-96 flex items-center rounded-2xl justify-center text-center text-white font-bold text-lg p-4 flex-col"
        >
          <p>{description}</p>
          <ul className="mt-8 list-volunter">
            {list?.split('\n').map((item, index) => (
              <li key={index}>{item}</li>
            ))}
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
