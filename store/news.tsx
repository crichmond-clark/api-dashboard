import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface NewsState {
  getNews: () => void;
}

const useNewsStore = create<NewsState>()(
  devtools(
    persist(
      (set) => ({
        getNews: async () => {
          set({ getNews: () => {} });
        },
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
