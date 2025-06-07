import Image from 'next/image';

export const Donations = ({
  title,
  description,
  descriptionExtra,
  donations,
}: {
  title: string;
  description: string;
  descriptionExtra?: string;
  donations?: {
    id: string;
    title: string;
    image_size: number;
    description: string;
    link?: string;
    image?: {
      id: string;
      url: string;
      alternativeText?: string;
    };
  }[];
}) => {
  return (
    <section
      id="dona"
      className="relative flex w-full flex-col items-center justify-center bg-[url('/donations.png')] bg-center bg-repeat p-4 md:p-10" // Ajustes de fondo y padding
    >
      <div className="w-full rounded-2xl bg-white/90  shadow-2xl backdrop-blur-sm p-6 md:p-10">
        <h1 className="mb-6 text-center text-3xl font-extrabold text-gray-800 md:text-4xl">
          {title}
        </h1>

        <p
          className="mb-6 text-justify text-lg font-light leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <p className="mb-8 px-2 text-center text-xl font-semibold text-amber-600">
          {descriptionExtra}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {donations?.map((donation) => {
            const {
              title: donationTitle,
              description: donationDescription,
              image,
              image_size,
            } = donation;

            const imageUrl = image?.url || '';
            const imageAlt = image?.alternativeText || donationTitle;

            return (
              <a
                key={donationTitle}
                className="flex transform flex-col items-center justify-center gap-4 rounded-xl bg-amber-50 p-4 text-center shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" // Estilo y efectos hover
                href={donation?.link || undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={image_size}
                    height={image_size}
                    className="h-20 w-20 rounded-md object-contain shadow-sm aspect-square"
                  />
                )}
                <div className="flex flex-col">
                  <h3 className="mb-1 text-xl font-semibold text-gray-800">
                    {donationTitle}
                  </h3>
                  <p className="text-sm font-medium text-gray-600">
                    {donationDescription}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <p className="mt-10 text-justify text-lg font-light leading-relaxed text-gray-700">
          Si quieres ayudar de alguna otra manera (por ejemplo, como voluntario
          o con una compra directa de comida, arena, etc), ponte en contacto con
          nosotros.
        </p>

        <p className="mt-4 text-center text-2xl font-extrabold text-amber-600">
          ¡Muchas gracias!
        </p>
      </div>
    </section>
  );
};
