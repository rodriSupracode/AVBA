export const AboutUs = ({
  title,
  description,
  backgroundImage,
}: {
  title: string;
  description: string;
  backgroundImage: string;
}) => {
  return (
    <section
      id="sobre-nosotros"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-50" // Use min-h-screen for full height, flex-col for stacking in small screens
    >
      {/* Background Image Div */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`, // Added a linear gradient for better text readability
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 animate-fade-in" // Added z-0 and animate-fade-in
      />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 lg:px-16 pt-20 pb-10">
        <div className="hidden md:block md:w-1/2 lg:w-3/5"></div>
        <div className="w-full md:w-1/2 lg:w-2/5 backdrop-filter backdrop-blur-md bg-white bg-opacity-80 rounded-xl shadow-2xl p-8 md:p-10 flex flex-col items-start justify-center animate-slide-in-right">
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-4 drop-shadow-sm">
            {title}
          </h2>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6">
            {description}
          </p>
          {/* Optional CTA Button */}
          <a href="#contact" className="self-end md:self-start mt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75">
              Conoce más
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
