import { create } from 'zustand';
import { Cats } from '../interfaces/cat';

interface CatsStats {
  cats: Cats[];
  hasMoreData: boolean;
  nextCursor: string | undefined;
  setCats: (cats: Cats[]) => void;
  setNextCursor: (cursor: string | undefined) => void;
  setHasMoreData: (hasMoreData: boolean) => void;
}

export const useStore = create<CatsStats>((set) => ({
  cats: [],
  hasMoreData: false,
  nextCursor: undefined,
  setCats: (newCats: Cats[]) => {
    set((state) => ({
      cats: [...state.cats, ...newCats],
    }));
  },
  setNextCursor: (cursor: string | undefined) => {
    set(() => ({
      nextCursor: cursor,
    }));
  },
  setHasMoreData: (hasMoreData: boolean) => {
    set(() => ({
      hasMoreData,
    }));
  },
}));
