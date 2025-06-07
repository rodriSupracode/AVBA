export const HowToAdopt = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <section id="adopta">
      <div className="min-h-96 bg-amber-100 p-4 md:p-8">
        <div className="bg-white shadow-md rounded-lg p-8 z-40">
          <div
            className="flex md:flex-row flex-col items-center justify-center gap-4 !text-2xl text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
          <div className="flex lg:flex-row flex-col mt-4 gap-4 items-center">
            <div
              style={{
                backgroundImage: `url(${image})`,
              }}
              className="lg:flex-1/2 h-80 md:h-[650px] w-full bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl"
            ></div>
            <div
              className="lg:flex-1/2 text-justify align-middle font-light text-lg p-1 md:p-4 flex flex-col gap-4"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
