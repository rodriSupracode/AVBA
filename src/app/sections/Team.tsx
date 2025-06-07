export const Team = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}) => {
  return (
    <section id="equipo" className="bg-white md:p-8 p-4">
      <h2 className="text-amber-500 text-center font-bold text-2xl mb-8">
        {title}
      </h2>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center bg-no-repeat w-full min-h-96 rounded-2xl "
      >
        <a
          href="#contact"
          className="backdrop-blur-xs backdrop-brightness-50 w-full h-full min-h-96 flex items-center rounded-2xl justify-center text-center text-white font-bold text-lg p-4 flex-col"
          dangerouslySetInnerHTML={{ __html: description }}
        ></a>
      </div>
    </section>
  );
};
