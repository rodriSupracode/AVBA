import Image from 'next/image';
import { useState } from 'react';
import { Cats } from '../interfaces/cat';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { MoonLoader } from 'react-spinners';

export const CatCard = ({ name, image, description, adopted, id }: Cats) => {
  const [fallbackImage, setFallbackImage] = useState<string | undefined>(image);
  const [isLoadingRedirect, setIsLoadingRedirect] = useState(false);

  const router = useRouter();
  return (
    <>
      {isLoadingRedirect && (
        <div className="absolute h-screen w-screen top-0 left-0 flex justify-center items-center z-40 backdrop-blur-sm">
          <MoonLoader className="backdrop-blur-none" />
        </div>
      )}
      <div
        className={clsx(
          'flex flex-col items-center justify-center z-0 bg-white p-4 rounded-lg shadow-lg  w-full cursor-pointer',
          {
            'grayscale-100': adopted,
            'cursor-auto hover:shadow-2xl transition duration-300': !adopted,
          },
        )}
        onClick={() => {
          setIsLoadingRedirect(true);
          router.push(`/felino?catId=${id}`);
          setIsLoadingRedirect(false);
        }}
      >
        <Image
          src={fallbackImage || '/default_cat.png'}
          alt={name}
          width={200}
          height={200}
          className={clsx(
            '!w-full !h-48 object-cover rounded-lg object-center ',
            {
              'hover:scale-105 transition duration-300':
                !adopted &&
                (!fallbackImage || fallbackImage !== '/default_cat.png'),
            },
          )}
          onError={() => {
            setFallbackImage('/default_cat.png');
          }}
        />
        <h2 className="text-lg font-semibold mt-2">{name}</h2>
        {description && (
          <p className="text-gray-400 text-center w-full text-ellipsis overflow-clip line-clamp-2">
            {description}
          </p>
        )}
      </div>
      {adopted && (
        <div className="absolute bg-amber-200 rounded-lg p-2 flex items-center justify-center mt-8 z-20">
          <p className="text-white text-lg font-bold">Adoptado</p>
        </div>
      )}
    </>
  );
};
