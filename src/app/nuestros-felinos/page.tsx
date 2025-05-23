import { Footer } from 'components/Footer';
import { getCats } from 'libs/cats';
import { GridCat } from './GridCat';

export default async function Cats() {
  const response = await getCats({});
  if (!response) {
    alert('Failed to fetch cats');
    return null;
  }

  const callback = async ({
    hasMoreData,
    nextCursor,
  }: {
    hasMoreData: boolean;
    nextCursor: string | undefined;
  }) => {
    'use server';
    if (hasMoreData) {
      const response = await getCats({ cursor: nextCursor || undefined });

      if (!response) {
        alert('Failed to fetch more cats');
        throw new Error('Failed to fetch more cats');
      }

      return {
        ...response,
        nextCursor: response.nextCursor ?? undefined,
      };
    }
  };

  return (
    <>
      <div className="min-h-full pt-24 px-4 pb-4">
        <GridCat
          callback={callback}
          cats={response.cats}
          hasMoreData={response.hasMoreData}
          nextCursor={response.nextCursor || undefined}
        />
      </div>
      <Footer />
    </>
  );
}
