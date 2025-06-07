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
      className="bg-[url('/donations.png')] bg-contain bg-repeat w-full flex flex-col items-center justify-center relative md:p-8 p-4"
    >
      <div className="bg-[rgba(255,255,255,0.85)] mx-auto rounded shadow-xl p-4 md:px-8 px-4 h-full w-full">
        <h1 className="text-2xl font-bold text-center">{title}</h1>
        <p
          className="font-light text-justify text-lg mt-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <p className="text-amber-500 font-bold px-2 text-center mt-4">
          {descriptionExtra}
        </p>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {donations?.map((donation) => (
            <div
              key={donation.title}
              className="flex flex-row items-start justify-start gap-2 bg-amber-50 md:p-2 p-1 rounded-lg shadow-md"
            >
              <Image
                src={donation.image?.url || ''}
                alt={donation?.image?.alternativeText || donation.title}
                width={donation.image_size}
                height={donation.image_size}
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
