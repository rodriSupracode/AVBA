'use client';
import { CatCard } from 'components/CatCard';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import { useState } from 'react';
import { Cats } from '../interfaces/cat';
import { SyncLoader } from 'react-spinners';

export const GridCat = ({
  callback,
  cats,
  hasMoreData,
  nextCursor,
}: {
  callback: ({
    hasMoreData,
    nextCursor,
  }: {
    hasMoreData: boolean;
    nextCursor: string | undefined;
  }) => Promise<
    | {
        cats: Cats[];
        hasMoreData: boolean;
        nextCursor: string | undefined;
      }
    | undefined
  >;
  cats: Cats[];
  hasMoreData: boolean;
  nextCursor: string | undefined;
}) => {
  const [catsUpdated, setCats] = useState(cats);
  const [hasMoreDataUpdated, setHasMoreData] = useState(hasMoreData);
  const [nextCursorUpdated, setNextCursor] = useState<string | undefined>(
    nextCursor,
  );
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const OnReachBottom = () => {
    if (!hasMoreDataUpdated) return;
    setIsLoadingMore(true);
    callback({
      hasMoreData: hasMoreDataUpdated,
      nextCursor: nextCursorUpdated,
    })
      .then((response) => {
        if (response) {
          const {
            cats: catsList,
            hasMoreData: hasExtraData,
            nextCursor: cursor,
          } = response;
          setCats([...catsUpdated, ...catsList]);
          setHasMoreData(hasExtraData);
          setNextCursor(cursor);
        }
      })
      .finally(() => {
        setIsLoadingMore(false);
      });
  };

  return (
    <>
      <BottomScrollListener onBottom={OnReachBottom}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-rows-1 md:grid-rows-2 pb-4">
          {catsUpdated.map((cat, index) => (
            <div key={index} className="flex justify-center w-full">
              <CatCard
                name={cat.name}
                image={cat.image}
                description={cat.description}
                age={cat.age}
                adopted={cat.adopted}
                id={cat.id}
              />
            </div>
          ))}
        </div>
      </BottomScrollListener>
      {isLoadingMore && (
        <div className="flex justify-center items-center">
          <SyncLoader
            className="text-amber-400"
            color="oklch(82.8% 0.189 84.429)"
          />
        </div>
      )}
    </>
  );
};
