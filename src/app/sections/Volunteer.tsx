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
    <section
      id="voluntario"
      className="bg-gradient-to-b from-white to-amber-500 py-16 px-4 md:px-8 lg:px-16"
    >
      <h2 className="text-amber-600 text-center font-extrabold text-4xl md:text-5xl mb-12 relative z-10 lg:animate-fade-in-down">
        {title}
        <span className="block w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full animate-grow-width"></span>
      </h2>

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${image})`,
        }}
        className="bg-cover bg-center bg-no-repeat w-full min-h-[1000px] md:min-h-[700px] rounded-3xl shadow-2xl relative group transform transition-transform duration-500 hover:scale-[1.02] md:ease-in-out"
      >
        <a
          href="#contact"
          className="absolute inset-0 flex items-center justify-center text-center text-white p-8 md:p-12 transition-all duration-500 ease-in-out hover:bg-black/20 focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75"
        >
          <div className="flex flex-col items-center max-w-3xl mx-auto md:opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <p className="font-light text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-md animate-fade-in-up">
              {description}
            </p>
            {list && (
              <ul className="text-white text-base md:text-lg space-y-3 list-none text-left w-full max-w-md animate-fade-in-up delay-200">
                {list.split('\n').map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-amber-300 mr-3 flex-shrink-0 mt-1 drop-shadow-sm"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="drop-shadow-sm">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-10 text-2xl md:text-3xl font-extrabold drop-shadow-lg animate-fade-in-up delay-400">
              ¿Te animas?
              <span className=" ml-4 text-amber-300 hover:text-amber-200 transition-colors duration-300 transform hover:scale-105 inline-block cursor-pointer">
                ¡Ponte en contacto con nosotros!
              </span>
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};
